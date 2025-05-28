import React, { createContext, useContext } from 'react'; // ## Importa React e Context API

// ## Define a tipagem do contexto (simples, sem autenticação real)
interface AuthContextType {
  user: null;                 // ## Sempre null (sem login)
  loading: boolean;          // ## Não existe carregamento real
  signIn: () => void;        // ## Apenas redireciona para a Kiwify
  signOut: () => void;       // ## Redireciona para a página inicial
  error: null;               // ## Sem tratamento de erro necessário
}

// ## Cria o contexto com valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ## Provedor do contexto de "autenticação"
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const signIn = () => {
    // ## Redireciona para a página de pagamento da Kiwify
    window.location.href = 'https://kiwify.app/3iXnAoY';
  };

  const signOut = () => {
    // ## Apenas redireciona para a home (pode ser adaptado)
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,           // ## Usuário sempre null
        loading: false,       // ## Sem loading real
        error: null,          // ## Sem erro
        signIn,               // ✅ Redireciona para a Kiwify
        signOut,              // ✅ Redireciona para home
      }}
    >
      {children} {/* ## Renderiza os filhos normalmente */}
    </AuthContext.Provider>
  );
}

// ## Hook personalizado para acessar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}