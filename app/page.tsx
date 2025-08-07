"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Server,
  User,
  FolderOpen,
  ArrowLeft,
  Code2,
  Database,
  Globe,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type Section = "home" | "about" | "projects" | "tech" | "contact"

const techStack = [
  { name: "HTML", icon: " ", category: "Frontend" },
  { name: "CSS", icon: "", category: "Frontend" },
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Expressjs", icon: "", category: "Backend" },

  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "JavaScript", icon: "📜", category: "Language" },
  { name:"C++", icon: "🔧", category: "Language" },
  { name: "Python", icon: "🐍", category: "Language" },

  { name: "WebSockets", icon: "🔌", category: "Miscellaneous" },
  { name: "Redis", icon: "🔴", category: "Miscellaneous" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Linux", icon: "🐧", category: "DevOps" },
  { name: "Github actions", icon: "🔧", category: "DevOps" },
]

const projects = [
  {
    title: "Real-time Chat Platform",
    description:
      "Scalable chat application with WebSocket connections, message persistence, and real-time notifications. Scalable architecture to handle multiple concurrent requests.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    status: "Production",
    type: "Full-Stack",
    features: ["Real-time messaging", "File sharing", "User presence", "Message encryption"],
    metrics: { users: "10K+", uptime: "99.9%", messages: "1M+" },
    github: "https://github.com/username/chat-platform",
    demo: "https://chat-platform-demo.com",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time data visualization and performance metrics.",
    tech: ["React", "Express", "MongoDB", "Chart.js"],
    status: "Live",
    type: "Dashboard",
    features: ["Real-time analytics", "Custom dashboards", "Export functionality", "Multi-tenant support"],
    metrics: { dataPoints: "50M+", clients: "25+", performance: "< 2s" },
    github: "https://github.com/username/analytics-dashboard",
    demo: "https://analytics-demo.com",
  },
  {
    title: "Event-Driven Microservices",
    description: "Distributed system using event-driven patterns for high-throughput data processing.",
    tech: ["Node.js", "Redis", "Docker", "RabbitMQ"],
    status: "Architecture",
    type: "Backend",
    features: ["Event sourcing", "CQRS pattern", "Auto-scaling", "Fault tolerance"],
    metrics: { throughput: "100K/s", latency: "< 50ms", availability: "99.99%" },
    github: "https://github.com/username/microservices-arch",
    demo: "https://microservices-docs.com",
  },
]

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState<Section>("home")

  const BentoCard = ({
    title,
    description,
    icon: Icon,
    gradient,
    onClick,
    className = "",
    children,
    delay = 0,
  }: {
    title: string
    description: string
    icon: any
    gradient: string
    onClick: () => void
    className?: string
    children?: React.ReactNode
    delay?: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Card
        className={`h-full bg-gradient-to-br ${gradient} border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 overflow-hidden relative`}
      >
        <CardContent className="p-6 h-full flex flex-col relative z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />

          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <motion.div
                className="h-0.5 bg-white/30 mt-1 rounded-full"
                initial={{ width: "20%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <p className="text-white/80 mb-4 flex-1 leading-relaxed">{description}</p>

          {children}

          <motion.div
            className="flex items-center gap-2 text-white/60 text-sm mt-auto"
            initial={{ opacity: 0.7, x: 0 }}
            whileHover={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Explore</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const HomePage = () => (
    <div className="h-screen flex flex-col overflow-hidden ">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-6 lg:p-8 relative z-20"
      >
        <motion.div className="text-2xl font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <motion.span
            animate={{
              rotate: [0, 5, -5, 0],
              color: ["#ffffff", "#10b981", "#f59e0b", "#ef4444", "#ffffff"],
            }}
            transition={{
              rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 },
              color: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            {"<Tushar Sharma />"}
          </motion.span>
          <motion.div
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-black hover:bg-gray-200">
              Resume
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-5 gap-8 h-full">
            {/* Hero Section */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <motion.h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <motion.span
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                    >
                      Building
                    </motion.span>{" "}
                    <motion.span
                      className="text-emerald-400 inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                    >
                      scalable
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                    >
                      systems.
                    </motion.span>
                    <br />
                    <motion.span
                      className="text-yellow-400 inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                    >
                      Crafting
                    </motion.span>{" "}
                    <motion.span
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
                    >
                      experiences.
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg text-gray-400 leading-relaxed max-w-lg"
                  >
                    Final-year Engineering student passionate about full-stack development, generative AI,
                    and creating impactful technology solutions.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <motion.div
                    className="flex items-center gap-2 text-gray-500"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Available for opportunities</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-6 grid-rows-4 gap-4 h-full"
              >
                {/* About Me - Large */}
                <BentoCard
                  title="About Me"
                  description="Engineering journey, technical philosophy, and continuous learning approach."
                  icon={User}
                  gradient="from-blue-600/20 via-blue-500/10 to-purple-600/20"
                  className="col-span-4 row-span-2"
                  onClick={() => setCurrentSection("about")}
                  delay={0.1}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Code2 className="w-4 h-4" />
                      <span>2+ years of development experience and self-learning</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Full-Stack", "Systems Design", "Problem Solving"].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>Connect:</span>
                      <div className="flex gap-2">
                        {[
                          { icon: Github, label: "GitHub", href: "https://github.com/tusharsharma811" },
                          { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/tusharsharma8" },
                          { icon: Mail, label: "Email", href: "mailto:sharmatushar811@gmail.com" },
                        ].map((contact, index) => (
                          <motion.a
                            key={contact.label}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-7 h-7 z-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(contact.href, "_blank");
                            }}
                          >
                            <contact.icon className="w-3.5 h-3.5 text-white" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* Tech Stack */}
                <BentoCard
                  title="Tech Stack"
                  description="Modern technologies for scalable applications."
                  icon={Server}
                  gradient="from-orange-600/20 via-red-500/10 to-red-600/20"
                  className="col-span-2 row-span-2"
                  onClick={() => setCurrentSection("tech")}
                  delay={0.2}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {["React", "Node.js", "MongoDB", "Docker"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-xs bg-white/10 px-2 py-1 rounded text-white/80 text-center"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </BentoCard>

                {/* Projects */}
                <BentoCard
                  title="Projects"
                  description="Full-stack applications and system architectures."
                  icon={FolderOpen}
                  gradient="from-emerald-600/20 via-green-500/10 to-teal-600/20"
                  className="col-span-6 row-span-2"
                  onClick={() => setCurrentSection("projects")}
                  delay={0.3}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Recent Projects</span>
                    </div>
                    <div className="space-y-1">
                      {projects.slice(0, 2).map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="flex items-center gap-2 text-xs text-white/60"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          <span className="truncate">{project.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const AboutPage = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-screen p-6 lg:p-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Button variant="ghost" onClick={() => setCurrentSection("home")} className="mb-4 hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h1>
        </motion.div>

        <div className="flex-1 grid lg:grid-cols-2 gap-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-gray-900/50 border-gray-800 h-fit">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">Engineering Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Final-year Computer Science student with a passion for building robust, scalable systems. My journey
                  has been driven by curiosity and a commitment to solving complex technical challenges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in full-stack development with expertise in modern web technologies, backend systems, and
                  event-driven architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 h-fit">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400">Technical Philosophy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and designing systems that scale. Every solution should
                  be purposeful, efficient, and built with the end user in mind.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-gray-900/50 border-gray-800 h-fit">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">Core Expertise</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full-Stack Web Development",
                    "Distributed Systems Architecture",
                    "Event-Driven Design Patterns",
                    "Database Design & Optimization",
                  ].map((area, index) => (
                    <motion.li
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      {area}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 h-fit">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Currently Exploring</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Rust Programming", level: 70 },
                    { name: "Kubernetes", level: 60 },
                    { name: "AI/ML Integration", level: 80 },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-red-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  const ProjectsPage = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-screen p-6 lg:p-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Button variant="ghost" onClick={() => setCurrentSection("home")} className="mb-4 hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Full-stack applications demonstrating system design and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="flex-1 grid lg:grid-cols-3 gap-6 overflow-hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-fit"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <Badge
                          variant="outline"
                          className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs"
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600 text-xs">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800">
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <Badge variant="outline" className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const TechPage = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-screen p-6 lg:p-8 "
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Button variant="ghost" onClick={() => setCurrentSection("home")} className="mb-4 hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Tech <span className="text-orange-400">Stack</span>
          </h1>
          <p className="text-gray-400 mt-2">Technologies and tools for building modern, scalable applications.</p>
        </motion.div>

        <div className="flex-1 grid lg:grid-cols-4 gap-6 ">
          {["Frontend", "Backend", "Database", "DevOps" , "Language", "Miscellaneous"].map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-gray-300 mb-4">{category}</h3>
              <div className="space-y-3">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{tech.icon}</span>
                            <div>
                              <div className="font-semibold text-white">{tech.name}</div>
                              <div className="text-xs text-gray-400">{tech.category}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const ContactPage = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-screen p-6 lg:p-8 flex items-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Button variant="ghost" onClick={() => setCurrentSection("home")} className="mb-6 hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          Let's <span className="text-purple-400">Connect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Open to discussing innovative projects, technical challenges, and opportunities in software engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              href: "mailto:your.email@example.com",
              color: "bg-purple-500 hover:bg-purple-600",
            },
            { icon: Github, label: "GitHub", href: "https://github.com/tusharsharma811", color: "border-gray-700 hover:bg-gray-800" },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/tusharsharma8",
              color: "border-gray-700 hover:bg-gray-800",
            },
          ].map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className={contact.color}
                variant={contact.label === "Email" ? "default" : "outline"}
              >
                <Link href={contact.href} target="_blank">
                  <contact.icon className="w-5 h-5 mr-2" />
                  {contact.label}
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm"
        >
          <p>Available for full-time opportunities starting 2024</p>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white ">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {currentSection === "home" && <HomePage key="home" />}
        {currentSection === "about" && <AboutPage key="about" />}
        {currentSection === "projects" && <ProjectsPage key="projects" />}
        {currentSection === "tech" && <TechPage key="tech" />}
        {currentSection === "contact" && <ContactPage key="contact" />}
      </AnimatePresence>
    </div>
  )
}
