"use client";

import React from "react";
import { Section } from "@/src/components/ui/Section";
import { 
  Database, 
  Layout, 
  Server, 
  Terminal
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "Go", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: ["Docker", "AWS", "CI/CD", "Linux", "Git"],
  }
];

export const Skills = () => {
  return (
    <div className="bg-black py-10">
      <Section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-green-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated list of technologies and tools I use to build powerful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <skill.icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
