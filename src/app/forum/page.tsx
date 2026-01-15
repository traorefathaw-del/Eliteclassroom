"use client";
import { motion } from "framer-motion";
import { MessageSquare, ThumbsUp, Eye, Search, Plus } from "lucide-react";

const DISCUSSIONS = [
  { id: 1, title: "Problème d'installation de ZSH sur Ubuntu 24.04", author: "DevAlpha", replies: 12, likes: 5, tags: ["Ubuntu", "Terminal"] },
  { id: 2, title: "Pourquoi utiliser Next.js plutôt que React pur ?", author: "TechGuru", replies: 45, likes: 128, tags: ["NextJS", "React"] },
  { id: 3, title: "Conseils pour mon premier job de Junior", author: "Student_99", replies: 8, likes: 22, tags: ["Carrière"] },
];

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter">LE <span className="text-blue-500">FORUM</span></h1>
            <p className="text-slate-500 uppercase tracking-widest text-[10px] mt-2 font-bold">L'intelligence collective de l'élite</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
            <Plus size={18} /> POSER UNE QUESTION
          </button>
        </div>

        {/* BARRE DE RECHERCHE */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher une discussion..." 
            className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-500 outline-none transition-all font-medium"
          />
        </div>

        {/* LISTE DES DISCUSSIONS */}
        <div className="space-y-4">
          {DISCUSSIONS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.1)" }}
              className="p-6 bg-slate-900/30 border border-white/5 rounded-3xl cursor-pointer group transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-tighter bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-xs mt-2 italic">Posté par <span className="text-slate-300">@{post.author}</span></p>
                </div>
                
                <div className="flex gap-6 text-slate-500">
                  <div className="text-center">
                    <MessageSquare size={18} className="mx-auto mb-1 opacity-50" />
                    <span className="text-[10px] font-bold">{post.replies}</span>
                  </div>
                  <div className="text-center">
                    <ThumbsUp size={18} className="mx-auto mb-1 opacity-50" />
                    <span className="text-[10px] font-bold">{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
