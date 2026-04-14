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
import { auth } from "@/lib/auth";

import StarterPlan from "./_components/starter-plan";
import SubscriptionPlan from "./_components/subscription-plan";

const SubscriptionPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <PageContainer>
      <Breadcrumb items={[{ label: "Outros" }, { label: "Planos" }]} />
      <PageHeader>
        <PageHeaderContent>
          <PageTittle>Planos</PageTittle>
          <PageDescription>
            Conheça os planos disponíveis e escolha o ideal para sua clínica.
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <></>
        </PageActions>
      </PageHeader>

      <PageContent>
        <div className="flex w-full flex-wrap justify-center gap-6 md:justify-start">
          <StarterPlan active={session.user.plan === null} />
          <SubscriptionPlan
            active={session.user.plan === "essential"}
            userEmail={session.user.email}
          />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
