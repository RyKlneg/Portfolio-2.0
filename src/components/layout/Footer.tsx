import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/LOGO.png"
              alt="Logo"
              className="h-30 w-30 object-contain hover:scale-110 hover:drop-shadow-lg transition-all duration-300 cursor-pointer"
            />
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/RyKlneg" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/edgar-zapata-becerra-27738a281/" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
