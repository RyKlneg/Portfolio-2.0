"use client";
import { Section } from "@/src/components/ui/Section";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, Stripe integration, and a headless CMS backend.",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "AI Task Manager",
    description: "Smart productivity app using OpenAI API to prioritize and categorize daily tasks automatically.",
    tags: ["TypeScript", "OpenAI", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracker with interactive charts and portfolio management features.",
    tags: ["React", "Recharts", "WebSocket", "Redux"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Social Media App",
    description: "A community platform for developers to share snippets and discuss code.",
    tags: ["Vue", "Firebase", "SCSS", "Jest"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false // Hide arrows on mobile for cleaner UI
        }
      }
    ]
  };

  return (
    <Section id="projects" className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-black">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, ranging from web applications to system tools.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="mx-auto px-4">
            <style>{`
                .slick-dots li button:before {
                    color: #4b5563;
                }
                .slick-dots li.slick-active button:before {
                    color: #ffffff;
                }
                .slick-prev:before, .slick-next:before {
                    color: #ffffff;
                }
                .slick-slide {
                    padding: 0 10px;
                }
            `}</style>
            
            <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="h-full py-4">
                <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-white/50 transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 flex-grow">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                        <span 
                            key={i} 
                            className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto">
                        <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                        </a>
                        <a href={project.live} className="flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </Slider>
        </div>
      </div>
    </Section>
  );
};
