import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Projects } from "@/src/components/sections/Projects";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/layout/Footer";
import { CustomCursor } from "@/src/components/effects/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 selection:text-red-200 cursor-none">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #ffffff;
        }
        ::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        body {
          cursor: none; /* Hide default cursor for the custom one */
        }
        a, button, input, textarea {
          cursor: none; /* Hide default cursor on interactive elements too */
        }
      `}</style>
      <CustomCursor />
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
