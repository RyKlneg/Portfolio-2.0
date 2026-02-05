"use client";

import React from "react";
import { Section } from "@/src/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics dashboard featuring real-time data visualization, dark mode support, and secure user authentication.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkYXJrJTIwbW9kZSUyMHVpJTIwZGVzaWdufGVufDF8fHx8MTc3MDIyNjI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React", "TypeScript", "D3.js", "Firebase"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Modern e-commerce solution with cart functionality, payment gateway integration, and inventory management system.",
    image: "https://images.unsplash.com/photo-1476885084911-210727f73472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzAyMjYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "AI Task Manager",
    category: "Productivity",
    description: "Smart task management application that uses AI to prioritize daily activities and suggest optimal schedules.",
    image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwZGFyayUyMGFlc3RoZXRpYyUyMGJsdWV8ZW58MXx8fHwxNzcwMjI2MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Python", "React", "OpenAI API", "FastAPI"],
    links: { demo: "#", code: "#" }
  }
];

export const Projects = () => {
  return (
    <div className="bg-neutral-950 py-10">
      <Section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-green-500">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of projects that demonstrate my passion for building solving real-world problems.
            </p>
          </div>
          <a href="#" className="text-green-500 hover:text-green-400 font-medium flex items-center gap-2 group">
            View Github <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.links.code} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.links.demo} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
