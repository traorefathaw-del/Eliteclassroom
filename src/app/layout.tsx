"use client";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav"; // Assure-toi que le fichier est bien nommé MobileNav.tsx
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Liste des pages où l'on ne veut PAS de menus (Connexion, Inscription, Accueil)
  const isAuthPage = pathname === "/" || pathname === "/login" || pathname === "/signup";

  return (
    <html lang="fr">
      <body className="bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
        <div className="flex min-h-screen">
          
          {/* --- MENU ORDINATEUR (SIDEBAR) --- */}
          {!isAuthPage && (
            <aside className="hidden md:flex w-64 fixed h-full z-50 border-r border-white/5 bg-[#020617]">
              <Sidebar />
            </aside>
          )}

          {/* --- CONTENU PRINCIPAL --- */}
          <main 
            className={`flex-1 w-full transition-all duration-300 
              ${!isAuthPage ? "md:ml-64 pb-24 md:pb-10" : ""} 
              ${isAuthPage ? "flex items-center justify-center" : ""}`}
          >
            {/* On ajoute un conteneur pour limiter la largeur sur très grands écrans */}
            <div className="max-w-[1600px] mx-auto w-full">
              {children}
            </div>
          </main>

          {/* --- MENU MOBILE (TAB BAR) --- */}
          {!isAuthPage && (
            <div className="md:hidden">
              <MobileNav />
            </div>
          )}

        </div>
      </body>
    </html>
  );
}
