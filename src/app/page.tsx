"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent)] z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          ELITE CLASSROOM
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-slate-400 text-lg tracking-[0.2em] uppercase mb-12"
        >
          L'excellence par le partage
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
            ENTRER DANS L'ARÈNE
          </button>
        </motion.div>
      </motion.div>

      {/* Décoration animée */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-slate-800 rounded-full opacity-20 z-0"
      />
    </main>
  );
}
