"use client";

import React from "react";
import { Section } from "@/src/components/ui/Section";

export const About = () => {
  return (
    <div className="bg-black">
      <Section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-red-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-white/5 rounded-2xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDIyNjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="relative w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-red-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a passionate software engineer with a deep love for creating seamless digital experiences. With years of experience in full-stack development, I specialize in building efficient, scalable, and user-friendly web applications.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              My journey in coding started with a curiosity for how things work on the internet, which quickly turned into a career obsession. I thrive on solving complex problems and turning innovative ideas into reality through code.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                <p className="text-red-400 uppercase text-sm tracking-wider">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-red-400 uppercase text-sm tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
