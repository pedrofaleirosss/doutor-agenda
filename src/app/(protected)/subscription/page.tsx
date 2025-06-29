import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTittle,
} from "@/components/ui/page-container";

import SubscriptionPlan from "./_components/subscription-plan";

const SubscriptionPage = () => {
  return (
    <PageContainer>
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
        <SubscriptionPlan active={false} className="max-w-[350px]" />
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
