import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudSolux Alimentos",
  description: "Criado por Caio Vincius Rodrigues. Desenvolvedor especialista em Java + React-js.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => 
  <html lang="pt-BR">
    <body suppressHydrationWarning={true}>
      {children}
    </body>
  </html>

export default RootLayout;