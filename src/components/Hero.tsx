"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Effet de lueur en arrière-plan */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)0%,rgba(2,6,23,1)100%)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6">
          Apprenez par la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Communauté.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          La plateforme d'entraide où chaque étudiant devient un mentor. 
          Maîtrisez le code, le design et la data avec les meilleurs.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105">
            Commencer gratuitement
          </button>
          <button className="px-8 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-900 transition-all">
            Explorer le forum
          </button>
        </div>
      </motion.div>
    </section>
  );
}
