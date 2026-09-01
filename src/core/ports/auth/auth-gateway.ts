// src/core/ports/auth/auth-gateway.ts

import type { Credentials } from "@/core/domain/auth/credentials";

export interface AuthGateway {
  login(credentials: Credentials): Promise<string>;
}