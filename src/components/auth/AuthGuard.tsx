// src/components/auth/AuthGuard.tsx

"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { ValidateSession } from "@/core/application/auth/handler/validate-session";
import { TokenStorageManager } from "@/infra/auth/token-storage-adapters";

const TOKEN_KEY = "@foods:token";

interface AuthGuardProps {
  children: React.ReactNode;
}

const subscribe = () => () => {};

const getSnapshot = () => {
  const validator = new ValidateSession(new TokenStorageManager(TOKEN_KEY));
  return validator.execute();
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();

  const authorized = useSyncExternalStore(subscribe, getSnapshot, () => false);

  useEffect(() => {
    if(!authorized) {
      router.replace("/");
    }
  }, [authorized, router]);

  if(!authorized) return null;

  return <>{children}</>;
};