import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import projectsdata from "../src/assets/projects.json";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

function App() {
  const [projects] = useState(projectsdata);
  const [activeFilter, setActiveFilter] = useState<"all" | "main" | "side">(
    "all"
  );

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  // Fade-in animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <main className="bg-bg text-text-color font-secondary min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* ── Hero ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h1 className="font-primary text-4xl md:text-5xl font-semibold leading-tight">
            Tushar Sharma
          </h1>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
            Final year B.Tech student in Information Technology. I love building
            things for the web and learning new technologies.
          </p>

          {/* Social row */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://github.com/TusharSharma811"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tusharsharma8"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/tusharr_twts"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="X / Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:sharmatushar811@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="/MyResume-updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-1.5"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ── Projects ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="section-heading mb-0">Projects</h2>
            <div className="flex gap-2">
              {(["all", "main", "side"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-secondary px-3 py-1 rounded-full border transition-all duration-300 capitalize
                    ${
                      activeFilter === f
                        ? "bg-accent text-bg border-accent"
                        : "border-border text-muted hover:border-accent hover:text-accent"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            {filteredProjects.map((project, id) => (
              <ProjectCard
                key={id}
                title={project.title}
                description={project.description}
                githubURL={project.githubLink}
                liveURL={project.liveLink}
              />
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ── Skills ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <h2 className="section-heading">Skills</h2>
          <div className="space-y-4">
            {[
              {
                label: "Frontend",
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "TailwindCSS",
                  "Zustand",
                ],
              },
              {
                label: "Backend",
                items: [
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Golang",
                  "Redis",
                ],
              },
              {
                label: "DevOps",
                items: ["GitHub Actions", "Docker", "AWS"],
              },
              {
                label: "Tools",
                items: ["Git", "GitHub", "Postman"],
              },
              {
                label: "CS Fundamentals",
                items: ["Operating Systems", "Networking", "Databases", "OOP"],
              },
            ].map((category) => (
              <div key={category.label}>
                <span className="text-xs text-muted font-secondary uppercase tracking-wider">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ── Certifications ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <h2 className="section-heading">Certifications</h2>
          <div className="space-y-3">
            <a
              href="https://www.credly.com/badges/5332c864-ed4d-4219-aafd-1e11078547fc/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-border group hover:border-accent transition-colors duration-200"
            >
              <span className="text-sm group-hover:text-accent transition-colors duration-200">
                Google Cloud Computing Foundations Certificate
              </span>
              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-accent transition-colors duration-200"
              />
            </a>
            <a
              href="https://www.credly.com/badges/5332c864-ed4d-4219-aafd-1e11078547fc/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-border group hover:border-accent transition-colors duration-200"
            >
              <span className="text-sm group-hover:text-accent transition-colors duration-200">
                CCNA: Introduction to Networks
              </span>
              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-accent transition-colors duration-200"
              />
            </a>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ── Coding Profiles ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          <h2 className="section-heading">Coding Profiles</h2>
          <div className="space-y-1">
            {[
              {
                name: "LeetCode",
                url: "https://leetcode.com/u/Tushar_Sharma811/",
              },
              {
                name: "Codeforces",
                url: "https://codeforces.com/profile/Itachi_01",
              },
              {
                name: "CodeChef",
                url: "https://www.codechef.com/users/itachi_3000",
              },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-b border-border group hover:border-accent transition-colors duration-200"
              >
                <span className="text-sm group-hover:text-accent transition-colors duration-200">
                  {profile.name}
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted group-hover:text-accent transition-colors duration-200"
                />
              </a>
            ))}
          </div>
        </motion.section>

        {/* ── Footer ── */}
        <div className="section-divider" />
        <footer className="text-center text-xs text-muted py-4">
          <p>
            Built with React & TailwindCSS •{" "}
            <a
              href="https://github.com/TusharSharma811"
              className="hover:text-accent transition-colors duration-200"
            >
              Tushar Sharma
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
