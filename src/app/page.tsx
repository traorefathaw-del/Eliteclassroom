"use client";
import { motion } from "framer-motion";
import { MessageSquare, Users, Star, ArrowRight, Code, Shield, Zap, Globe } from "lucide-react";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 1. NAVBAR FIXE */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter italic">ELITE<span className="text-blue-500">CLASS</span></div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Avantages</a>
          <a href="#forum" className="hover:text-white transition-colors">Communauté</a>
          <a href="#mentors" className="hover:text-white transition-colors">Mentors</a>
        </div>
        <button className="text-[10px] font-black bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-tighter">Login</button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent)] z-0" />
        <motion.div {...fadeUp} className="z-10 text-center px-4">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-700 leading-none">
            ELITE<br/><span className="text-blue-600 italic">MINDSET.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 font-light">
            L'excellence n'est pas un acte, mais une habitude. Rejoignez l'élite du développement et du partage.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/10">
              Rejoindre l'élite
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 3. SECTION AVANTAGES (POURQUOI NOUS ?) */}
      <section id="features" className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Zap />, title: "Apprentissage Rapide", desc: "Des parcours optimisés pour ne jamais perdre de temps." },
            { icon: <Users />, title: "Mentorat Direct", desc: "Échangez en temps réel avec des experts du domaine." },
            { icon: <Shield />, title: "Certifications", desc: "Vos compétences validées par des projets réels." },
            { icon: <Globe />, title: "Réseau Mondial", desc: "Connectez-vous avec des développeurs du monde entier." }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-900/30 border border-white/5 rounded-3xl hover:bg-blue-600/10 transition-colors group"
            >
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SECTION APERÇU DU FORUM */}
      <section id="forum" className="py-32 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">LE FORUM.</h2>
          <p className="text-slate-500">Plus qu'une plateforme, une intelligence collective.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10, backgroundColor: "rgba(30, 58, 138, 0.1)" }}
              className="p-6 border border-white/5 rounded-2xl flex items-center justify-between cursor-pointer transition-all"
            >
              <div className="flex gap-6 items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-blue-500">#</div>
                <h3 className="font-bold">Comment configurer son environnement sur Ubuntu ?</h3>
              </div>
              <div className="text-xs text-slate-600 font-mono">24 messages</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SECTION TÉMOIGNAGES (Chef-d'œuvre visuel) */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-black leading-tight mb-8 italic">Ils ont transformé <br/> leur carrière.</h2>
            <p className="text-slate-400 mb-8 italic text-xl border-l-4 border-blue-600 pl-6">
              "Grâce au forum d'EliteClass, j'ai trouvé mon premier job de développeur en 3 mois. La communauté est d'une aide précieuse."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700" />
              <div>
                <p className="font-bold">Marc-Antoine D.</p>
                <p className="text-xs text-blue-500 uppercase tracking-tighter">Software Engineer @TechCorp</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full aspect-square bg-blue-600/10 rounded-full blur-[100px] absolute" />
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="h-40 bg-slate-900 border border-white/5 rounded-2xl" />
                <div className="h-40 bg-slate-900 border border-white/5 rounded-2xl mt-8" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto p-16 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Prêt pour l'excellence ?</h2>
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Commencer l'aventure
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </motion.div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-700 text-[9px] uppercase tracking-[1em]">
        Elite Classroom • Building the future one student at a time • 2026
      </footer>
    </main>
  );
}
