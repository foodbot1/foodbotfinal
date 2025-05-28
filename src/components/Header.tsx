import React from 'react'; // ## Importa a biblioteca React para construir o componente
import { ArrowRight } from 'lucide-react'; // ## Importa o ícone de seta 'ArrowRight' da biblioteca lucide-react

const Header: React.FC = () => { // ## Define o componente funcional 'Header' com tipagem React.FC (Functional Component)
  return (
    <header className="bg-red-600 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      {/* ## Cabeçalho fixo no topo da tela, com fundo vermelho, sombra, largura total e z-index alto */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* ## Container centralizado com padding horizontal e layout flexível distribuindo os elementos com espaçamento */}
        
        <div className="flex items-center"> {/* ## Agrupa os elementos do lado esquerdo (logo + badge + ícone) */}
          <span className="text-white text-2xl font-bold italic">FoodBot</span> {/* ## Nome da marca com estilo negrito, itálico e branco */}

          <div className="hidden sm:flex ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            Pedido pronto {/* ## Badge verde com texto branco, visível apenas em telas médias para cima */}
          </div>

          <div className="hidden sm:block ml-1 text-white">
            <ArrowRight size={16} className="inline-block ml-1" /> {/* ## Ícone de seta, visível apenas em telas médias para cima */}
          </div>
        </div>

        <div className="flex items-center"> {/* ## Agrupa os elementos do lado direito (botão de ação) */}
          <a
            href="https://kiwify.app/3iXnAoY" // ## Link que leva à página de vendas (Kiwify)
            className="bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors transform hover:scale-105 duration-200 flex items-center"
            // ## Botão branco com texto vermelho, padding, cantos arredondados, efeito de hover com escala e transição suave
          >
            Começar {/* ## Texto exibido no botão */}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; // ## Exporta o componente 'Header' para uso em outros arquivos