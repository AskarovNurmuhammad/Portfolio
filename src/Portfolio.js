import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGit,
  faBootstrap,
  faSass,
  faGithub,
  faNpm,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";

import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Home,
  User,
  Wrench,
  Briefcase,
  MessageCircle,
  Menu,
  X,
  Linkedin,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Download,
  MapPin,
  Phone,
} from "lucide-react";
import "./index.css";
const HomeSection = ({ activeSection }) => {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Java Developer",
    "Backend Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    setTypedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, roles]);

  const techIcons = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-600" },
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "Spring", icon: "🍃", color: "from-green-500 to-emerald-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-400" },
    { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-400" },
  ];

  if (activeSection !== "home") return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Askarov Nurmuhammad
          </h1>

          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl">
              I'm a{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold">
                {typedText}
              </span>
              <span
                className={`inline-block w-0.5 h-6 md:h-8 bg-blue-400 ml-1 ${
                  isTyping ? "animate-pulse" : "animate-ping"
                }`}
              ></span>
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className={`group relative w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              title={tech.name}
            >
              <span className="relative z-10 group-hover:animate-swing">
                {tech.icon}
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a
            href="/resume.pdf"
            className="group flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ activeSection }) => {
  if (activeSection !== "about") return null;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/60"></div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p className="text-xl">
                Hi, I'm{" "}
                <span className="text-blue-400 font-semibold">
                  Askarov Nurmuhammad
                </span>
                , a passionate Full Stack Developer specializing in modern web
                technologies.
              </p>
              <p>
                With expertise in <span className="text-purple-400">React</span>
                , <span className="text-blue-400">Next.js</span>, and{" "}
                <span className="text-orange-400">Java</span>, I create scalable
                web applications that solve real-world problems. I'm constantly
                exploring new technologies and best practices to deliver
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me reading about personal
                development, watching tech documentaries, or exploring new
                places. I believe in continuous learning and love collaborating
                on innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-gray-300">Uzbekistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" size={20} />
                <span className="text-gray-300">Available for work</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                Frontend
              </h3>
              <p className="text-gray-300 text-center">
                React, Next.js, TypeScript
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105">
              <Database className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                Backend
              </h3>
              <p className="text-gray-300 text-center">Java, Spring, Node.js</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                Full Stack
              </h3>
              <p className="text-gray-300 text-center">
                End-to-end development
              </p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:scale-105">
              <Smartphone className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                Responsive
              </h3>
              <p className="text-gray-300 text-center">Mobile-first design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = ({ activeSection }) => {
  const [selectedTab, setSelectedTab] = useState("frontend");

  const skillCategories = {
    frontend: [
      {
        name: "React",
        icon: (
          <FontAwesomeIcon icon={faReact} size="2x" className="text-cyan-400" />
        ),
        level: 95,
      },
      {
        name: "Next.js",
        icon: (
          <FontAwesomeIcon
            icon={faNodeJs}
            size="2x"
            className="text-green-500"
          />
        ),
        level: 90,
      },
      {
        name: "TypeScript",
        icon: <div className="text-blue-500 font-bold text-xl">TS</div>,
        level: 95,
      },
      {
        name: "JavaScript",
        icon: (
          <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-400" />
        ),
        level: 95,
      },
      {
        name: "Redux",
        icon: <div className="text-purple-500 font-bold text-lg">🌀</div>,
        level: 85,
      },
      {
        name: "Tailwind",
        icon: <div className="text-sky-400 font-bold text-lg">TW</div>,
        level: 95,
      },
      {
        name: "HTML5",
        icon: (
          <FontAwesomeIcon
            icon={faHtml5}
            size="2x"
            className="text-orange-500"
          />
        ),
        level: 98,
      },
      {
        name: "CSS3",
        icon: (
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="2x"
            className="text-blue-500"
          />
        ),
        level: 95,
      },
      {
        name: "SASS",
        icon: (
          <FontAwesomeIcon icon={faSass} size="2x" className="text-pink-400" />
        ),
        level: 97,
      },
      {
        name: "Material UI",
        icon: <div className="text-indigo-400 font-semibold text-sm">MUI</div>,
        level: 80,
      },
      {
        name: "Bootstrap",
        icon: (
          <FontAwesomeIcon
            icon={faBootstrap}
            size="2x"
            className="text-purple-500"
          />
        ),
        level: 95,
      },
      {
        name: "Git",
        icon: (
          <FontAwesomeIcon icon={faGit} size="2x" className="text-orange-400" />
        ),
        level: 92,
      },
    ],
    backend: [
      {
        name: "Java",
        icon: (
          <FontAwesomeIcon
            icon={faJava}
            size="2x"
            className="text-orange-600"
          />
        ),
        level: 88,
      },
      {
        name: "Spring",
        icon: <div className="text-green-400 font-bold text-sm">SPRING</div>,
        level: 85,
      },
      {
        name: "Node.js",
        icon: (
          <FontAwesomeIcon
            icon={faNodeJs}
            size="2x"
            className="text-green-500"
          />
        ),
        level: 70,
      },
      {
        name: "TypeScript",
        icon: <div className="text-blue-500 font-bold text-xl">TS</div>,
        level: 95,
      },
      {
        name: "JavaScript",
        icon: (
          <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-400" />
        ),
        level: 95,
      },
      {
        name: "Next.js",
        icon: (
          <FontAwesomeIcon
            icon={faNodeJs}
            size="2x"
            className="text-green-500"
          />
        ),
        level: 90,
      },
      {
        name: "REST API",
        icon: <div className="text-blue-400 font-semibold text-sm">API</div>,
        level: 90,
      },
      {
        name: "GraphQL",
        icon: <div className="text-pink-400 font-bold text-sm">GQL</div>,
        level: 65,
      },
      {
        name: "Firebase",
        icon: (
          <FontAwesomeIcon
            icon={faFire}
            size="2x"
            className="text-orange-400"
          />
        ),
        level: 95,
      },
    ],
  };

  if (activeSection !== "skills") return null;

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/70"></div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setSelectedTab("frontend")}
              className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                selectedTab === "frontend"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectedTab("backend")}
              className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                selectedTab === "backend"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Backend
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skillCategories[selectedTab].map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium text-sm mb-3">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ activeSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      name: "Barbershop Management System",
      description:
        "A comprehensive barbershop booking and management platform featuring real-time appointment scheduling, customer management, and responsive design. Built with modern React patterns and optimized for performance.",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop&crop=face",
      github: "https://github.com/AskarovNurmuhammad/Barber.git",
      demo: "https://barber-gamma-virid.vercel.app/",
      tech: [
        "React",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Local Storage",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "GreenShop E-commerce",
      description:
        "A modern e-commerce platform specialized for plants and gardening supplies. Features include advanced product filtering, shopping cart functionality, wishlist management, and secure checkout process.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center",
      github: "https://github.com/AskarovNurmuhammad/GreeShop.git",
      demo: "https://gree-shop-ohfg.vercel.app/",
      tech: ["React", "Redux", "E-commerce", "Shopping Cart", "Material UI"],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Weather Forecast App",
      description:
        "An intelligent weather application providing real-time weather data, 7-day forecasts, and location-based services. Features beautiful animations, weather maps, and detailed meteorological information.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center",
      github: "https://github.com/AskarovNurmuhammad/Weather.git",
      demo: "https://weather-orpin-psi.vercel.app/",
      tech: ["React", "Weather API", "Geolocation", "Charts", "PWA"],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (activeSection !== "portfolio") return null;

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/70"></div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            modern web development
          </p>
        </div>

        {/* Project Showcase */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${projects[currentSlide].color} opacity-20`}
                ></div>
              </div>

              {/* Project Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3
                    className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${projects[currentSlide].color} bg-clip-text text-transparent`}
                  >
                    {projects[currentSlide].name}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {projects[currentSlide].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentSlide].tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-sm px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={projects[currentSlide].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-2 bg-gray-700/50 hover:bg-gray-600 px-6 py-3 rounded-xl transition-all duration-300 border border-gray-600 hover:border-gray-500"
                  >
                    <Github
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-white font-medium">View Code</span>
                  </a>
                  <a
                    href={projects[currentSlide].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center space-x-2 bg-gradient-to-r ${projects[currentSlide].color} px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg`}
                  >
                    <ExternalLink
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-white font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm p-4 rounded-full transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm p-4 rounded-full transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (activeSection !== "contact") return null;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/70"></div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Say Hi! 👋
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-4">
            Reach out and let's bring your ideas to life!
          </p>
          <p className="text-gray-400">
            I am available for freelance work and collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">
                      salomxayr80@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-medium">Uzbekistan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="text-white font-medium">
                      Open for opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com/AskarovNurmuhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:salomxayr80@gmail.com"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AskarovNurmuhammad",
      label: "GitHub",
    },
    { icon: Mail, href: "mailto:salomxayr80@gmail.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nurmuhammadaskarov?igsh=MWtoaGdkYzlwZmJlNg==",
      label: "Instagram",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 border-r border-gray-700/50`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 lg:hidden text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-700/50">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            <image
              src="/rasm.jpg"
              alt="Nurmuhammad Askarov"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">
            Askarov Nurmuhammad
          </h3>
          <p className="text-gray-400 text-sm mb-4">Full Stack Developer</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                title={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl mb-2 transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Contact Info at bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-center">
            <p className="text-blue-400 text-sm font-medium">
              salomxayr80@gmail.com
            </p>
            <p className="text-gray-500 text-xs mt-1">Available for work</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Background images for different sections
  const backgroundImages = {
    home: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop",
    about:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
    skills:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
    portfolio:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    contact:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop",
  };

  // Smooth scrolling between sections
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle navigation clicks
  useEffect(() => {
    const handleSectionChange = (sectionId) => {
      scrollToSection(sectionId);
    };

    // Add event listeners for smooth navigation
    const navButtons = document.querySelectorAll("[data-section]");
    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const sectionId = e.target.getAttribute("data-section");
        if (sectionId) {
          handleSectionChange(sectionId);
        }
      });
    });

    return () => {
      navButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 z-0"
        style={{ backgroundImage: `url(${backgroundImages[activeSection]})` }}
      />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-gray-900/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gray-800/80 transition-colors duration-300 shadow-lg border border-gray-700/50"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="lg:ml-80 relative z-10">
        <HomeSection activeSection={activeSection} />
        <AboutSection activeSection={activeSection} />
        <SkillsSection activeSection={activeSection} />
        <PortfolioSection activeSection={activeSection} />
        <ContactSection activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Portfolio;
