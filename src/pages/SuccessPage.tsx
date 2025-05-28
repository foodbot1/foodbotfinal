import React from 'react';

function SuccessPage() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">✅ Pagamento Aprovado!</h1>

        <p className="text-gray-600 mb-6">
          Seu pagamento foi aprovado com sucesso! Agora você pode utilizar o <span className="font-semibold">FoodBot</span>.
        </p>

        <a
          href="https://chromewebstore.google.com/detail/foodbot/naecjnofdgohlcfhpcbohldghddmahki?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition"
        >
          👉 Clique aqui para instalar a extensão
        </a>

        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-lg font-bold mb-2">🚀 Como instalar a extensão:</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Clique no link acima para abrir a página da extensão.</li>
            <li>Clique no botão azul <strong>"Usar no Chrome"</strong> ou <strong>"Adicionar ao Chrome"</strong>.</li>
            <li>Confirme clicando em <strong>"Adicionar extensão"</strong>.</li>
            <li>Aguarde a mensagem: <em>"FoodBot foi adicionada ao Chrome"</em>.</li>
            <li>Para facilitar, fixe a extensão: → Clique no ícone de peça de quebra-cabeça 🧩 no canto superior direito; → Encontre o <strong>FoodBot</strong> e clique no ícone de alfinete 📌.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-4">
            Ou copie este link: <span className="break-words text-gray-400">https://chromewebstore.google.com/detail/foodbot/naecjnofdgohlcfhpcbohldghddmahki?hl=pt-br</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;