"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, MessageSquare, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  
  const navItems = [
    { icon: <LayoutDashboard size={24} />, href: "/dashboard" },
    { icon: <BookOpen size={24} />, href: "/courses" },
    { icon: <MessageSquare size={24} />, href: "/forum" },
    { icon: <User size={24} />, href: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-slate-950/80 backdrop-blur-xl border-t border-white/5 flex justify-around items-center md:hidden z-[100]">
      {navItems.map((item, i) => {
        const isActive = pathname === item.href;
        return (
          <Link 
            key={i} 
            href={item.href} 
            className={`p-2 transition-all ${isActive ? "text-blue-500 scale-110" : "text-slate-500"}`}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
}
