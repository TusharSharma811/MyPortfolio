import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Zap,
  Target,
  Lightbulb,
  BarChart3,
  Layers,
} from "lucide-react";
import projectsData from "../assets/projects.json";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="bg-bg text-text-color font-secondary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-primary text-3xl mb-4">Project not found</h1>
          <Link
            to="/"
            className="text-base text-accent hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
        </div>
      </main>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <main className="bg-bg text-text-color font-secondary min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* ── Back link ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider"
          >
            <ArrowLeft size={14} /> Back
          </Link>
        </motion.div>

        {/* ── Header ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted font-secondary uppercase tracking-wider">
              {project.year}
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="text-sm text-accent font-secondary uppercase tracking-wider">
              {project.type === "main" ? "Featured" : "Side Project"}
            </span>
          </div>
          <h1 className="font-primary text-3xl md:text-4xl font-semibold leading-tight">
            {project.title}
          </h1>
          <p className="mt-1 text-base text-muted">{project.subtitle}</p>
        </motion.section>

        {/* ── Links ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex items-center gap-4 mt-6"
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-1.5"
          >
            <ArrowUpRight size={14} /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-1.5"
          >
            <Github size={14} /> Source Code
          </a>
        </motion.div>

        <div className="section-divider" />

        {/* ── Tech Stack ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <h2 className="section-heading inline-flex items-center gap-2">
            <Layers size={14} className="text-accent" /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* ── Problem ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          <h2 className="section-heading inline-flex items-center gap-2">
            <Target size={14} className="text-accent" /> Problem
          </h2>
          <p className="text-base leading-relaxed text-text-color">
            {project.problem}
          </p>
        </motion.section>

        <div className="section-divider" />

        {/* ── Solution ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
        >
          <h2 className="section-heading inline-flex items-center gap-2">
            <Lightbulb size={14} className="text-accent" /> Solution
          </h2>
          <p className="text-base leading-relaxed text-text-color">
            {project.solution}
          </p>
        </motion.section>

        <div className="section-divider" />

        {/* ── Architecture Highlights ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={6}
        >
          <h2 className="section-heading inline-flex items-center gap-2">
            <Zap size={14} className="text-accent" /> Architecture Highlights
          </h2>
          <ul className="space-y-3 mt-2">
            {project.architectureHighlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base text-text-color"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <div className="section-divider" />

        {/* ── Impact / Performance Metrics ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={7}
        >
          {project.metrics ? (
            <>
              <h2 className="section-heading inline-flex items-center gap-2">
                <BarChart3 size={14} className="text-accent" /> Performance
                Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-lg border border-border hover:border-accent transition-colors duration-200"
                  >
                    <p className="text-base font-semibold text-accent">
                      {metric.split(" ")[0]}
                    </p>
                    <p className="text-sm text-muted mt-0.5">
                      {metric.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : project.impact ? (
            <>
              <h2 className="section-heading inline-flex items-center gap-2">
                <BarChart3 size={14} className="text-accent" /> Impact
              </h2>
              <ul className="space-y-3 mt-2">
                {project.impact.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-text-color"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </motion.section>

        {/* ── Footer nav ── */}
        <div className="section-divider" />
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 uppercase tracking-wider"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Live"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
