// src/components/auth/LoginForm.tsx

"use client";

import styles from './LoginForm.module.css';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from '@/components/logo/Logo';
import { ErrorMsg } from './ErrorMsg'
import { Login } from "@/core/application/auth/handler/login";
import { AuthGatewayManager } from "@/infra/auth/auth-gateway-adapters";
import { TokenStorageManager } from "@/infra/auth/token-storage-adapters";

const TOKEN_KEY = "@foods:token";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const login = new Login(
      new AuthGatewayManager(API_URL),
      new TokenStorageManager(TOKEN_KEY)
    );

    try {
      await login.execute({ email, password });
      router.replace("/products");
    } 
    catch {
      setError("Credenciais inválidas");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      {error && <ErrorMsg msg={error}/>}
      <div>
        <input
          type="text"
          name="email"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};