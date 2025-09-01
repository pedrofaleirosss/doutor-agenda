"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { protectedActionClientWithClinic } from "@/lib/next-safe-action";

export const deleteDoctor = protectedActionClientWithClinic
  .schema(
    z.object({
      id: z.string().uuid(),
    }),
  )
  .action(async ({ parsedInput, ctx }) => {
    const doctor = await db.query.doctorsTable.findFirst({
      where: eq(doctorsTable.id, parsedInput.id),
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    if (doctor.clinicId != ctx.user.clinic.id) {
      throw new Error("Unauthorized");
    }

    await db.delete(doctorsTable).where(eq(doctorsTable.id, parsedInput.id));
    revalidatePath("/doctors");
  });
