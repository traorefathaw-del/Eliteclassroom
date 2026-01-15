import type { Metadata } from "next";
import "./globals.css";
import { LayoutDashboard, BookOpen, MessageSquare, Settings, User } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elite Classroom",
  description: "L'excellence par le partage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#020617] antialiased">
        {/* BARRE DE NAVIGATION FLOTTANTE (LOOK FUTURISTE) */}
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-slate-900/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-8 shadow-2xl">
          <Link href="/" className="text-slate-400 hover:text-blue-500 transition-colors"><User size={20}/></Link>
          <Link href="/courses" className="text-slate-400 hover:text-blue-500 transition-colors"><BookOpen size={20}/></Link>
          <div className="w-px h-6 bg-white/10" />
          <Link href="/dashboard" className="text-white bg-blue-600 p-2 rounded-xl"><LayoutDashboard size={20}/></Link>
          <div className="w-px h-6 bg-white/10" />
          <Link href="/forum" className="text-slate-400 hover:text-blue-500 transition-colors"><MessageSquare size={20}/></Link>
          <Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Settings size={20}/></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
