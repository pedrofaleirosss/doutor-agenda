import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StarterPlanProps {
  active?: boolean;
}

const StarterPlan = ({ active = false }: StarterPlanProps) => {
  const features = [
    "Até 20 agendamentos por mês",
    "Métricas básicas",
    "Cadastro de pacientes (limitado)",
    "Cadastro de médicos (limitado)",
    "Confirmação manual",
    "Suporte via e-mail",
  ];

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
          {active && (
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Atual
            </Badge>
          )}
        </div>
        <p className="text-gray-600">
          Para quem está começando ou quer conhecer o Doutor Agenda
        </p>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">R$0</span>
          <span className="ml-1 text-gray-600">/ mês</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 border-t border-b border-gray-200 py-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-gray-600">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button
            className="w-full !cursor-default hover:bg-transparent hover:text-inherit"
            variant="outline"
          >
            Plano Padrão
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StarterPlan;
