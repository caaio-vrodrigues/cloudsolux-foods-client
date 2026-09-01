// src/core/application/auth/handler/validate-session.ts

import { decodeToken, isExpired } from "../../../domain/auth/token";
import type { TokenStorage } from "@/core/ports/auth/token-storage";

export class ValidateSession {
  constructor(private readonly storage: TokenStorage) {}

  execute(): boolean {
    const token = this.storage.get();

    if(!token) return false;
    
    try {
      return !isExpired(decodeToken(token));
    } 
    catch {
      this.storage.remove();
      return false;
    }
  }
}