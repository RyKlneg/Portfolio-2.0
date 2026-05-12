"use client";
import { Section } from "@/src/components/ui/Section";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "D-Antojo",
    description: "D-antojo is an online bakery offering high-quality, custom desserts with easy ordering and home delivery.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Whatsapp API", "framer-motion"],
    image: "/images/dantojo.png",
    live: "https://d-antojo.vercel.app/"
  },
  {
    title: "Weather-App",
    description: "Weather App is a mobile application that provides real-time weather updates, forecasts, and climate information, helping users plan their daily activities with accurate and easy-to-read data.",
    tags: ["React", "JavaScript", "API", "Tailwind", "framer-motion"],
    image: "/images/weather.png",
    live: "https://weather-app-two-weld-83.vercel.app/"
  },
  {
    title: "Calculator App",
    description: "Calculate App is a mobile application that provides real-time weather updates, forecasts, and climate information, helping users plan their daily activities with accurate and easy-to-read data.",
    tags: ["React", "JavaScript", "Tailwind", "framer-motion"],
    image: "/images/calculate.png",
    live: "https://calculate-black.vercel.app/"
  },
  {
    title: "Talentix",
    description: "Talentix is a job board platform currently in development that aims to connect job seekers with employers, making it easier to discover and apply for job opportunities.",
    tags: ["Vue", "Laravel", "MySQL",],
    image: "/images/talentix.png",
    live: "#"
  },
  {
    title: "Vulpis-Clean",
    description: "Vulpis-Clean is an online laundry management system that digitizes manual processes, reduces operational errors, and provides greater administrative control for laundry businesses.",
    tags: ["Vue", "Laravel", "PostgreSQL(Supabase)", "Render", "Chart.js"],
    image: "/images/vulpisclean.png",
    live: "https://vulpisclean.onrender.com/panel"
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
    autoplaySpeed: 5000,
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
          arrows: false
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
            Featured Projects
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
                <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-white/50 transition-all duration-300 group h-full flex flex-col min-h-[550px]">
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
