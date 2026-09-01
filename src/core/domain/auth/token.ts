// src/core/domain/auth/token.ts

export interface TokenPayload {
  exp?: number;
  [key: string]: unknown;
}

export class InvalidTokenError extends Error {}

export function decodeToken(token: string): TokenPayload {
  try {
    return JSON.parse(atob(token.split(".")[1])) as TokenPayload;
  } 
  catch {
    throw new InvalidTokenError("Token inválido");
  }
}

export function isExpired(
  payload: TokenPayload,
  now: number = Date.now() / 1000
): boolean {
  return !!payload.exp && payload.exp < now;
}