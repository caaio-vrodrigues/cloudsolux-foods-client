// src/core/application/auth/handler/login.ts

import type { Credentials } from "@/core/domain/auth/credentials";
import type { AuthGateway } from "@/core/ports/auth/auth-gateway";
import type { TokenStorage } from "@/core/ports/auth/token-storage";

export class Login {
  constructor(
    private readonly gatewayManager: AuthGateway,
    private readonly tokenManager: TokenStorage
  ) {}

  async execute(credentials: Credentials): Promise<void> {
    if(!credentials.email || !credentials.password)
      throw new Error("Credenciais obrigatórias");

    const token = await this.gatewayManager.login(credentials);

    this.tokenManager.save(token);
  }
}