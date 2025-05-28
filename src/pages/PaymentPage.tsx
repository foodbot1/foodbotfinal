import React from 'react';

function PaymentPage() {
  const handlePayment = async () => {
    try {
      const response = await fetch('/.netlify/functions/createCheckoutSession', { method: 'POST' });
      const data = await response.json();

      if (data.error) {
        console.error('❌ Erro na criação da sessão:', data.error);
        return;
      }

      if (!data.url) {
        console.error('❌ Nenhuma URL de checkout retornada.');
        return;
      }

      console.log('🔗 Checkout URL:', data.url);

      // ✅ Redireciona para o Stripe Checkout
      window.location.assign(data.url);

    } catch (error) {
      console.error('❌ Erro ao iniciar pagamento:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Finalizar Assinatura</h1>

      <div className="bg-white rounded shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">FoodBot Premium</h2>
        <p className="text-4xl font-bold text-red-600 mb-2">
          R$ 49,90 <span className="text-base">/semana</span>
        </p>

        <ul className="mb-6 space-y-2">
          <li>✅ Automação 24 horas por dia</li>
          <li>✅ Suporte técnico prioritário</li>
          <li>✅ Cancelamento flexível</li>
        </ul>

        <button
          onClick={handlePayment}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-credit-card w-5 h-5 mr-2">
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
          </svg>
          Pagar Agora
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">Pagamento processado com segurança</p>
      </div>
    </div>
  );
}

export default PaymentPage;