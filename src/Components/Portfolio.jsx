import React, { useState, useEffect } from "react";
import biteandbun from "../../public/biteandbun.png";
import portfolio from "../../public/portfolio_web.png";
import comingsoon from "../../public/comingsoon.jpeg";
import mili from "../../public/milienterprise.png";
import towingsquad from "../../public/UseHomePage.png";
import essence from "../../public/essence.png";
import recipe from "../../public/recipe.png";
import chatty from "../../public/chatty.png";

const projects = [
  {
    image: mili,
    title: "Milienterprise",
    description:
      "Milienterprise is a fabrication company providing services for different types of fabrication works. In this project I have used Hostinger for hosting.",
    languages: ["HTML", "CSS", "JAVASCRIPT"],
    projectLink: "https://milienterprise.in/",
    codeLink: "https://github.com/jaimin123-r/Mili_Enterprise",
  },
  {
    image: biteandbun,
    title: "Bite & Bun",
    description:
      "Developed a food delivery website inspired by McDonalds UI/UX. Features include menu display, add to cart, and a mobile-friendly navbar. I hosted this website on netlify.",
    languages: ["REACT", "HTML", "CSS", "JAVASCRIPT"],
    projectLink: "https://biteandbun.netlify.app/",
    codeLink: "https://github.com/jaimin123-r/Bite_and_Bun",
  },
  {
    image: towingsquad,
    title: "Towing Squad",
    description:
      "Towing Squad is academic project designed to efficiently manage and display details of vehicles towed from no-parking zones. The system includes dedicated dashboards for Admin, Traffic Officers, and Users, along with an Officer Panel for streamlined operations. It enables role-based access, real-time vehicle tracking, and simplifies fine payments and data management.",
    languages: ["REACT", "EXPRESS", "NODE", "MONGODB", "TAILWIND CSS"],
    projectLink: "https://github.com/jaimin123-r",
    codeLink: "https://github.com/jaimin123-r",
  },
  {
    image: recipe,
    title: "DeliciousEats",
    description:
      "A dynamic recipe website built with React that allows users to explore a wide variety of recipes using a third-party API. It features powerful search and filter options to easily find dishes based on ingredients or preferences. Users can like or unlike their favorite recipes for a personalized experience.",
    languages: ["REACT","API","TAILWIND CSS"],
    projectLink: "https://deliciouseatss.netlify.app",
    codeLink: "https://github.com/jaimin123-r/DeliciousEats",
  },
  {
    image: essence,
    title: "Essence Perfumes",
    description:
      "Essence is my first project for my friend. I have done this project using HTML and CSS. I hosted this website on netlify.",
    languages: ["HTML", "CSS"],
    projectLink: "https://itsessence.netlify.app",
    codeLink: "https://github.com/jaimin123-r/Essence_Perfume",
  },
  {
     image: chatty,
    title: "Chatty App",
    description:
      "I developed a real-time chat application using React, Express, Node.js, MongoDB, and Socket.IO for seamless bi-directional communication. The UI is built with Tailwind CSS and DaisyUI, ensuring a modern, responsive design. The app supports live messaging, user authentication, and persistent chat history. It’s optimized for performance and scalable for future enhancements.",
    languages: ["REACT", "EXPRESS", "NODE", "MONGODB", "TAILWIND CSS","SOCKET.IO","DAISYUI"],
    projectLink: "#",
    codeLink: "https://github.com/jaimin123-r",
  },
  {
    image: comingsoon,
    title: "Smart Shopping Cart (IoT Project)",
    description:
      " This project enables a seamless, human-less shopping experience in malls. Users can scan products themselves to add them to a virtual cart and make online payments instantly. If a product is not needed, scanning it again automatically removes it from the cart, ensuring a smooth and efficient checkout process.",
    languages: ["C++"],
    projectLink: "#",
    codeLink: "https://docs.google.com/document/d/10D4o9_0oIPWj-Lq4NPf7yVuzYWyHp2xsOE2zmzAhGu0/edit?pli=1&tab=t.0",
  },
   {
    image: portfolio,
    title: "My Portfolio",
    description: "In this portfolio i used third party form for contact form and Inquiry form and hosted this website on netlify.",
    languages: ["REACT", "HTML", "CSS", "JAVASCRIPT"],
    projectLink: "https://rjaiminportfolio.netlify.app/",
    codeLink: "https://github.com/jaimin123-r/Portfolio",
  },
];

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="Portfolio"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16"
    >
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
            My Projects
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards] origin-center"></div>
        </div>
        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Explore my journey through code, creativity, and innovation
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-2 animate-bounce"></div>
        </div>

        {/* Timeline Items */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`timeline-item relative mb-20 md:mb-32 ${
              visibleItems.has(index.toString())
                ? "animate-fadeInUp"
                : "opacity-0"
            }`}
            data-index={index}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-20 hidden md:block shadow-lg">
              <div className="absolute inset-1 bg-purple-500 rounded-full animate-pulse"></div>
            </div>

            {/* Project Content */}
            <div
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 px-4">
                <div
                  className={`relative group ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex space-x-2">
                        {project.languages.slice(0, 3).map((lang, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/90 text-black text-xs rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 px-4">
                <div
                  className={`relative ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    {/* Project Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-mid">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-md"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:scale-105 transform"
                      >
                        <span>View Project</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 md:px-6 md:py-3 bg-white border-2 border-purple-500 text-purple-500 rounded-full font-medium transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:scale-105 transform"
                      >
                        <span>View Code</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Mobile Timeline Line */
        @media (max-width: 768px) {
          .timeline-item::before {
            content: "";
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899);
          }

          .timeline-item::after {
            content: "";
            position: absolute;
            left: 14px;
            top: 50%;
            width: 14px;
            height: 14px;
            background: #8b5cf6;
            border: 3px solid white;
            border-radius: 50%;
            transform: translateY(-50%);
            box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
          }

          .timeline-item > div {
            margin-left: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
