import React from "react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Projects } from "@/src/components/sections/Projects";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30 selection:text-green-200">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #16a34a;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
