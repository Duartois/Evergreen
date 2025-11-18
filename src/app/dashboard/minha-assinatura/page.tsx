import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CreditCard, XCircle } from 'lucide-react';

export default async function MySubscription() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Minha Assinatura</h1>
      <div className="flex gap-10">
        <PlanCard />
        <ActionCard />
      </div>
    </>
  );
}

function PlanCard() {
  return (
    <Card className="max-w-md w-full text-secondary" variant='white'>
      <CardHeader>
        <CardTitle>Detalhes da Assinatura</CardTitle>
        <CardDescription>Informações sobre seu plano atual</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Plano:</span>
            <span>Plano Pro</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="text-green-600">Ativo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Próxima cobrança:</span>
            <span>01/01/2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Valor:</span>
            <span>R$ 29,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Ciclo:</span>
            <span>Mensal</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ActionCard() {
  return (
    <Card className="w-full max-w-sm h-full text-secondary" variant='white'>
      <CardHeader>
        <CardTitle>Ações</CardTitle>
        <CardDescription>Gerencie sua assinatura</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <CreditCard className="mr-2 h-5 w-5 text-gray-400" />
            Atualizar método de pagamento
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <XCircle className="mr-2 h-5 w-5" />
            Cancelar assinatura
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
