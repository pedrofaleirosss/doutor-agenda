import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTittle,
} from "@/components/ui/page-container";
import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddDoctorButton from "./_components/add-doctor-button";
import DoctorCard from "./_components/doctor-card";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  const doctors = await db.query.doctorsTable.findMany({
    where: eq(doctorsTable.clinicId, session.user.clinic.id),
  });

  return (
    <PageContainer>
      <Breadcrumb items={[{ label: "Menu Principal" }, { label: "Médicos" }]} />
      <PageHeader>
        <PageHeaderContent>
          <PageTittle>Médicos</PageTittle>
          <PageDescription>Gerencie os médicos da sua clínica.</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddDoctorButton />
        </PageActions>
      </PageHeader>

      <PageContent>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}

          {doctors.length === 0 && (
            <p className="text-muted-foreground text-center text-sm">
              Nenhum médico encontrado. Adicione um médico para começar a
              gerenciar sua clínica.
            </p>
          )}
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
