// src/core/ports/auth/token-storage.ts

export interface TokenStorage {
  get(): string | null;
  save(token: string): void;
  remove(): void;
}