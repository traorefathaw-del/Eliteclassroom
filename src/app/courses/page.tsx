"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Code2, Terminal, Search, Youtube, ArrowLeft, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

// Bibliothèque restreinte aux 3 langages demandés
const ELITE_LIBRARY = {
  "javascript": {
    name: "JavaScript Masterclass",
    videoId: "Ssh71heLhXY", // Tutoriel JS stable
    language: "javascript",
    defaultCode: "// Elite JS Lab\nconsole.log('Système prêt.');\n\nfunction saluer(nom) {\n  return 'Hello ' + nom;\n}\n\nconsole.log(saluer('Fathaw'));"
  },
  "python": {
    name: "Apprendre Python",
    videoId: "oUJolR5bX6g", // Tutoriel Python stable
    language: "python",
    defaultCode: "# Elite Python Lab\nprint('Système prêt.')\n\ndef saluer(nom):\n    return f'Hello {nom}'\n\nprint(saluer('Fathaw'))"
  },
  "c": {
    name: "Langage C Fondamentaux",
    videoId: "q6FcVUFM42o", // Tutoriel C stable
    language: "c",
    defaultCode: "// Elite C Lab\n#include <stdio.h>\n\nint main() {\n    printf(\"Système Elite C prêt.\\n\");\n    printf(\"Hello Fathaw\\n\");\n    return 0;\n}"
  }
};

export default function UniversalLab() {
  const [search, setSearch] = useState("");
  const [currentCourse, setCurrentCourse] = useState(ELITE_LIBRARY["javascript"]);
  const [code, setCode] = useState(currentCourse.defaultCode);
  const [output, setOutput] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = search.toLowerCase().trim();
    if (ELITE_LIBRARY[query as keyof typeof ELITE_LIBRARY]) {
      const course = ELITE_LIBRARY[query as keyof typeof ELITE_LIBRARY];
      setCurrentCourse(course);
      setCode(course.defaultCode);
      setOutput(""); 
      setSearch("");
    } else {
      alert("Langage non disponible. Choisissez entre : c, python, javascript");
    }
  };

  const runCode = () => {
    setOutput(`> Compilation ${currentCourse.language.toUpperCase()}...\n[PROCESS]: Initialisation terminée.\n[OUTPUT]: Exécution simulée réussie.`);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col overflow-hidden">
      
      {/* HEADER RESPONSIVE AVEC BARRE DE RECHERCHE */}
      <nav className="p-4 md:h-20 border-b border-white/5 flex flex-col md:flex-row items-center gap-4 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link href="/dashboard" className="text-slate-500 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-black italic text-xl tracking-tighter uppercase">Elite<span className="text-blue-500">Labs</span></h1>
        </div>

        <form onSubmit={handleSearch} className="flex-1 w-full max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text"
            placeholder="Rechercher un langage : c, python ou javascript..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-blue-500 text-sm transition-all italic font-medium"
          />
        </form>

        <button 
          onClick={runCode}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <Play size={14} fill="currentColor"/> Compiler
        </button>
      </nav>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        
        {/* SECTION GAUCHE : VIDÉO & COURS */}
        <div className="w-full lg:w-1/2 p-4 md:p-8 border-r border-white/5 overflow-y-auto max-h-[40vh] lg:max-h-none bg-slate-900/10">
          <div className="aspect-video bg-black rounded-[2rem] overflow-hidden mb-6 border border-white/5 shadow-2xl relative">
             <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentCourse.videoId}`}
                title={currentCourse.name}
                allowFullScreen
             ></iframe>
          </div>

          <div className="flex items-center gap-2 text-blue-500 mb-4 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
             <Sparkles size={14} />
             <span className="text-[9px] font-black uppercase tracking-widest">{currentCourse.language} Lab</span>
          </div>
          
          <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tighter leading-tight">{currentCourse.name}</h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xl">
            Apprends les concepts fondamentaux du langage {currentCourse.language} en vidéo, puis pratique immédiatement dans l'IDE. 
          </p>
          
          <div className="mt-8 p-6 bg-slate-950/50 border border-white/5 rounded-[2rem] flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
               <Zap size={24} />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase">Prochaine étape</p>
               <h4 className="text-sm font-bold uppercase italic">Maîtriser les boucles et les conditions</h4>
            </div>
          </div>
        </div>

        {/* SECTION DROITE : IDE & TERMINAL */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#050505] min-h-[60vh] lg:min-h-0">
          <div className="px-6 py-3 bg-slate-950/80 border-b border-white/5 flex items-center gap-3">
             <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
             </div>
             <div className="h-4 w-px bg-white/10 mx-2"></div>
             <Code2 size={16} className="text-blue-500"/>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 italic">
                main.{currentCourse.language === 'javascript' ? 'js' : currentCourse.language === 'python' ? 'py' : 'c'}
             </span>
          </div>
          
          <div className="flex-1">
            <Editor
              height="100%"
              language={currentCourse.language}
              theme="vs-dark"
              value={code}
              onChange={(v) => setCode(v || "")}
              options={{ 
                fontSize: 14, 
                minimap: { enabled: false }, 
                fontFamily: "JetBrains Mono, monospace",
                lineNumbers: "on",
                padding: { top: 20 }
              }}
            />
          </div>

          <div className="h-48 md:h-64 bg-black border-t border-white/10 p-6 font-mono overflow-y-auto">
             <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-700 uppercase mb-4">
                <Terminal size={14}/> Terminal Elite
             </div>
             <pre className="text-blue-400 text-sm whitespace-pre-wrap leading-relaxed">
                {output || "> Système prêt. En attente de compilation..."}
             </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
