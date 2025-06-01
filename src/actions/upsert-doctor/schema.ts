import { z } from "zod";

export const upsertDoctorSchema = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().trim().min(1, { message: "Por favor, digite o nome." }),
    specialty: z
      .string()
      .trim()
      .min(1, { message: "Por favor, selecione a especialidade." }),
    appointmentPriceInCents: z
      .number()
      .min(1, { message: "Por favor, digite o preço da consulta." }),
    availableFromWeekDay: z.number().min(0).max(6),
    availableToWeekDay: z.number().min(0).max(6),
    availableFromTime: z
      .string()
      .min(1, { message: "Por favor, selecione a hora de início." }),
    availableToTime: z
      .string()
      .min(1, { message: "Por favor, selecione a hora de término." }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message:
        "O horário de término precisa ser posterior ao horário de início.",
      path: ["availableToTime"],
    },
  );

export type UpsertDoctorSchema = z.infer<typeof upsertDoctorSchema>;
