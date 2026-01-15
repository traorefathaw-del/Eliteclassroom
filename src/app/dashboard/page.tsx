"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Trophy, Target, Zap, Clock, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Cours terminés", value: "12", icon: <BookOpen className="text-blue-500" />, color: "bg-blue-500/10" },
    { label: "Points d'XP", value: "2,450", icon: <Zap className="text-orange-500" />, color: "bg-orange-500/10" },
    { label: "Badges acquis", value: "8", icon: <Trophy className="text-yellow-500" />, color: "bg-yellow-500/10" },
    { label: "Heures de focus", value: "48h", icon: <Clock className="text-emerald-500" />, color: "bg-emerald-500/10" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter italic uppercase">Dashboard <span className="text-blue-600">Elite</span></h1>
            <p className="text-slate-500 text-sm mt-1">Bon retour, <span className="text-white font-bold">@fathaw</span>. Prêt pour une nouvelle session ?</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-white/5">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black">F</div>
            <div className="pr-4">
              <p className="text-xs font-bold uppercase tracking-tighter">Niveau 14</p>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1">
                <div className="h-full bg-blue-500 w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* GRID DE STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-slate-900/40 border border-white/5 rounded-3xl"
            >
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SECTION : CONTINUER L'APPRENTISSAGE */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 italic">
              <Target className="text-blue-500" size={20} /> Reprendre là où vous vous êtes arrêté
            </h2>
            <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-48 aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Zap size={40} className="text-white/20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black mb-2 leading-tight text-white">Masterclass Ubuntu & Terminal</h3>
                <p className="text-slate-400 text-sm mb-6">Leçon 4 : Automatisation avec scripts Bash</p>
                <Link href="/courses/setup-ubuntu">
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
                    Continuer la leçon
                  </button>
                </Link>
              </div>
            </div>

            {/* LISTE DES AUTRES COURS */}
            <h2 className="text-xl font-bold pt-6 italic">Vos autres formations</h2>
            <div className="space-y-3">
              {[1, 2].map((id) => (
                <div key={id} className="p-4 bg-slate-900/20 border border-white/5 rounded-2xl flex items-center justify-between hover:border-blue-500/30 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800" />
                      <p className="font-bold text-sm">Design System avec Tailwind CSS</p>
                   </div>
                   <ChevronRight size={16} className="text-slate-600" />
                </div>
              ))}
            </div>
          </div>

          {/* SECTION : BADGES & RÉCOMPENSES */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold italic flex items-center gap-2">
              <Star className="text-yellow-500" size={20} /> Badges récents
            </h2>
            <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] p-8 grid grid-cols-2 gap-6">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-full border-2 border-white/5 flex items-center justify-center mb-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                      🏆
                    </div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Explorateur</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
