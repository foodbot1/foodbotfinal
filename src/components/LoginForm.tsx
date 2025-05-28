import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  // Estados para capturar o email e a senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simulação da função signIn → substitua pela sua real
  const signIn = async ({ email, password }: { email: string; password: string }) => {
    console.log('signIn executado com:', email, password);
    // Aqui você coloca sua lógica de autenticação real
    if (email === 'teste@teste.com' && password === '123456') {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('Credenciais inválidas'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Tentando logar com:', email, password);
      await signIn({ email, password });
      console.log('Login bem-sucedido, redirecionando para /payment');
      navigate('/payment');  // ✅ Navegação sem recarregar
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;