"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, CheckCircle2, Lock, ArrowLeft, 
  MessageSquare, Download, ChevronRight, 
  ThumbsUp, Share2, MoreHorizontal 
} from "lucide-react";
import Link from "next/link";

const CURRICULUM = [
  { id: 1, title: "Introduction au Terminal", duration: "05:20", completed: true, locked: false },
  { id: 2, title: "Installation des paquets essentiels", duration: "12:45", completed: false, locked: false },
  { id: 3, title: "Configuration de ZSH & OhMyZsh", duration: "18:10", completed: false, locked: false },
  { id: 4, title: "Automatisation avec scripts Bash", duration: "22:00", completed: false, locked: true },
];

export default function CoursePlayer() {
  const [activeLesson, setActiveLesson] = useState(CURRICULUM[1]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col md:flex-row font-sans">
      
      {/* 1. BARRE LATÉRALE (CURRICULUM) */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-full md:w-96 border-r border-white/5 bg-slate-950 flex flex-col h-screen sticky top-0 z-20"
          >
            <div className="p-6 border-b border-white/5">
              <Link href="/courses" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <ArrowLeft size={14} /> Retour au catalogue
              </Link>
              <h2 className="font-black text-xl leading-tight tracking-tighter italic">MASTERCLASS <br/><span className="text-blue-500 font-sans not-italic uppercase">Ubuntu & Terminal</span></h2>
              <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "25%" }}
                  className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                />
              </div>
              <p className="text-[9px] text-slate-500 mt-3 font-bold uppercase tracking-widest">Progression : 25% complété</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {CURRICULUM.map((lesson) => (
                <button 
                  key={lesson.id}
                  onClick={() => !lesson.locked && setActiveLesson(lesson)}
                  className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all group ${activeLesson.id === lesson.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'hover:bg-white/5 text-slate-400'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeLesson.id === lesson.id ? 'text-white' : 'text-blue-500'}`}>
                      {lesson.completed ? <CheckCircle2 size={18} className="text-emerald-400" /> : lesson.locked ? <Lock size={18} className="text-slate-600" /> : <Play size={18} />}
                    </div>
                    <div className="text-left">
                      <p className={`text-sm font-bold leading-tight ${activeLesson.id === lesson.id ? 'text-white' : 'text-slate-200'}`}>{lesson.title}</p>
                      <p className="text-[10px] opacity-50 font-mono mt-1 tracking-tighter">{lesson.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* 2. ZONE DE LECTURE PRINCIPALE */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#020617]">
        
        {/* LECTEUR VIDÉO (EFFET CINÉMA) */}
        <div className="w-full aspect-video bg-black relative flex items-center justify-center group overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
           
           {/* Bouton Play Central */}
           <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl z-20 relative group-hover:bg-white transition-colors"
           >
              <Play size={32} className="text-white group-hover:text-black ml-1 transition-colors" fill="currentColor" />
           </motion.button>

           <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2 block">Lecture en cours</span>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase">{activeLesson.title}</h3>
           </div>
        </div>

        {/* CONTENU & SOCIAL */}
        <div className="p-6 md:p-12 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic border-l-4 border-blue-600 pl-6 uppercase">
                {activeLesson.title}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Maîtrisez les outils de l'élite. Dans cette session, nous plongeons dans les entrailles du système pour optimiser votre flux de travail.
              </p>
            </div>
            
            <div className="flex gap-3">
               <button title="Ressources" className="p-4 bg-slate-900 border border-white/5 rounded-2xl hover:bg-blue-600 hover:border-blue-500 transition-all group">
                  <Download size={20} className="group-hover:text-white" />
               </button>
               <button title="Partager" className="p-4 bg-slate-900 border border-white/5 rounded-2xl hover:bg-white transition-all group">
                  <Share2 size={20} className="group-hover:text-black" />
               </button>
            </div>
          </div>

          {/* SECTION COMMENTAIRES ELITE */}
          <div className="mt-24 border-t border-white/5 pt-16">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black italic flex items-center gap-3 tracking-tighter">
                <MessageSquare className="text-blue-500" /> ENTRAIDE COMMUNAUTAIRE
              </h2>
              <span className="text-xs font-mono text-slate-500 uppercase">14 Contributions</span>
            </div>

            {/* Input de l'utilisateur */}
            <div className="flex gap-6 mb-16 bg-slate-900/30 p-8 rounded-[2rem] border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20">F</div>
              <div className="flex-1">
                <textarea 
                  placeholder="Une question sur la configuration ?" 
                  className="w-full bg-transparent border-none text-slate-200 placeholder:text-slate-600 outline-none resize-none text-lg font-medium h-24"
                />
                <div className="flex justify-end pt-4 border-t border-white/5">
                  <button className="bg-white text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Publier la question
                  </button>
                </div>
              </div>
            </div>

            {/* Liste des retours */}
            <div className="space-y-12">
              {[
                { user: "Marc_Dev", role: "Mentor", date: "2h", text: "N'oubliez pas d'utiliser sudo pour les commandes d'installation, sinon vous aurez une erreur de permission 'Permission Denied'.", likes: 24 },
                { user: "Sophie_L", role: "Étudiante", date: "5h", text: "Le passage sur l'édition du fichier .bashrc est super clair, merci !", likes: 8 }
              ].map((comment, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/5 flex-shrink-0" />
                  <div className="flex-1 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-black text-sm uppercase tracking-tighter">{comment.user}</span>
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[8px] font-black rounded-md uppercase border border-blue-500/20">{comment.role}</span>
                      <span className="text-[10px] text-slate-600 font-mono ml-auto">{comment.date}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6 font-light">{comment.text}</p>
                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors text-[10px] font-black uppercase tracking-tighter">
                        <ThumbsUp size={14} /> Utile ({comment.likes})
                      </button>
                      <button className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-tighter">Répondre</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-auto p-8 border-t border-white/5 text-center">
            <p className="text-[9px] text-slate-700 uppercase tracking-[0.5em] font-bold">Elite Classroom Terminal Session // 2026</p>
        </footer>
      </main>
    </div>
  );
}
