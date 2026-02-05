"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { InteractiveBackground } from "@/src/components/effects/InteractiveBackground";

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Gradient Overlay for bottom fade only, allowing animation to be visible */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-green-500 font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
            Full Stack Developer
          </h2>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft robust, scalable, and elegant web solutions using modern technologies. 
          Focusing on performance, interaction, and clean code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)]"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white font-medium rounded-full transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-green-400 transition-colors border border-white/5 hover:border-green-500/30"
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};
