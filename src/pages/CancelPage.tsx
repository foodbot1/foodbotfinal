import React from 'react';
import { useNavigate } from 'react-router-dom';

function CancelPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-red-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">❌ Pagamento Cancelado</h1>

        <p className="text-gray-600 mb-6">
          Parece que você cancelou o processo de pagamento. Se quiser, pode tentar novamente.
        </p>

        <button
          onClick={() => navigate('/payment')}
          className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-700 transition"
        >
          🔄 Tentar novamente
        </button>

        <button
          onClick={() => navigate('/payment')}
          className="mt-4 inline-block bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-400 transition"
        >
          🏠 Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default CancelPage;