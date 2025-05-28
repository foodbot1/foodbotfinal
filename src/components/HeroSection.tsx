import React from 'react'; // ## Importa a biblioteca React para criar o componente
import { ArrowRight } from 'lucide-react'; // ## Importa o ícone ArrowRight da biblioteca de ícones Lucide

export default function HeroSection() { // ## Define e exporta o componente HeroSection
  return (
    <section className="bg-red-600 text-white py-20"> {/* ## Seção com fundo vermelho, texto branco e padding vertical grande */}
      <div className="container mx-auto px-4 text-center"> {/* ## Container centralizado com padding horizontal e texto centralizado */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4"> {/* ## Título principal grande e em negrito */}
          FOODBOT + iFOOD = <span className="text-yellow-300">ALTA DEMANDA</span> {/* ## Destaque em amarelo dentro do título */}
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"> {/* ## Parágrafo com tamanho médio/grande, largura máxima e centralizado */}
          Aumente sua visibilidade no iFood e receba mais pedidos automaticamente.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center"> {/* ## Container com layout em coluna no mobile e linha em telas maiores */}
          <a
            href="https://kiwify.app/3iXnAoY" // ## Link que leva para a página de vendas (externo)
            target="_blank" // ## Abre o link em uma nova aba
            rel="noopener noreferrer" // ## Segurança para evitar acesso ao `window.opener`
            className="bg-white text-red-600 px-6 py-3 rounded-md font-bold text-lg mb-4 sm:mb-0 sm:mr-4 hover:bg-red-50 transition-colors transform hover:scale-105 duration-200 flex items-center justify-center"
            // ## Botão branco com texto vermelho, padding, cantos arredondados, animações de hover e responsividade
          >
            COMEÇAR AGORA {/* ## Texto do botão */}
            <ArrowRight size={20} className="ml-2" /> {/* ## Ícone de seta com espaçamento à esquerda */}
          </a>
          <a
            href="#how-it-works" // ## Link que leva para a seção "Como Funciona" na mesma página
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-red-600 transition-colors transform hover:scale-105 duration-200"
            // ## Botão transparente com borda branca, texto branco e efeitos de hover
          >
            COMO FUNCIONA {/* ## Texto do segundo botão */}
          </a>
        </div>
      </div>
    </section>
  );
}