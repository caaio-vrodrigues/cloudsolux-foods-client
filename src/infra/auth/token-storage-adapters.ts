// src/infra/auth/token-storage-adapters.ts

import type { TokenStorage } from "@/core/ports/auth/token-storage";

export class TokenStorageManager implements TokenStorage {
  constructor(private readonly key: string) {}

  get(): string | null {
    return typeof window !== "undefined"
      ? localStorage.getItem(this.key)
      : null;
  }

  save(token: string): void {
    if(typeof window !== "undefined") {
      localStorage.setItem(this.key, token);
    }
  }

  remove(): void {
    if(typeof window !== "undefined") {
      localStorage.removeItem(this.key);
    }
  }
}