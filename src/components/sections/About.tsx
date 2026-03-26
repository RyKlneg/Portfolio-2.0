"use client";

import React from "react";
import { Section } from "@/src/components/ui/Section";

export const About = () => {
  return (
    <div className="bg-black">
      <Section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-white rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-white/5 rounded-2xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
            <img
              src="/LOGO.png"
              alt="Profile"
              className="relative w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a Systems Engineering student and Full Stack Developer passionate about building functional and efficient web applications. My experience includes developing administrative systems, creating APIs, and working with modern technologies like Laravel, Vue.js, and Flutter.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I enjoy learning new technologies, solving real-world problems, and continuously improving my skills as a developer. My goal is to grow professionally while contributing to impactful software projects.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
                <p className="text-gray-300 uppercase text-sm tracking-wider">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                <p className="text-gray-300 uppercase text-sm tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
