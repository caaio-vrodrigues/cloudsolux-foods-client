// src/core/application/auth/handler/logout.ts

import type { TokenStorage } from "@/core/ports/auth/token-storage";

export class Logout {
  constructor(private readonly storage: TokenStorage) {}

  execute(): void {
    this.storage.remove();
  }
}