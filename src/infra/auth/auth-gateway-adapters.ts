// src/infra/auth/auth-gateway-adapters.ts

import type { Credentials } from "@/core/domain/auth/credentials";
import type { AuthGateway } from "@/core/ports/auth/auth-gateway";
import { loginRequest } from "@/connection/auth/login-request";

export class AuthGatewayManager implements AuthGateway {
  constructor(private readonly baseUrl: string) {}

  async login(credentials: Credentials): Promise<string> {
    const { token } = await loginRequest(this.baseUrl, credentials);
    return token;
  }
}