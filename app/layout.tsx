import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Peintre Local",
  description: "Peintre en bâtiment à [Votre ville] : peinture intérieure et extérieure, décoration, façades et revêtements. Devis gratuit.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
