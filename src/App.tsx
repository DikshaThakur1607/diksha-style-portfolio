
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, Link as LinkIcon, ExternalLink } from "lucide-react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight"
    >
      {title}
    </motion.h2>
    <div className="mt-6">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border text-sm leading-none">{children}</span>
);

const skills = [
  "JavaScript","TypeScript","Python","C/C++","Rust","Solidity",
  "Next.js","React","Node.js","Express","Tailwind","Framer Motion",
  "Docker","AWS","Kubernetes","Azure","GCP","ArgoCD","Helm",
  "PostgreSQL","Prisma","Redis","MongoDB","Cloudflare","WebRTC","Linux","ROS"
];

const projects = [
  {
    title: "NoteWrite – Ed‑tech Platform",
    blurb: "Full‑stack learning platform with automated workflows, secure auth, and payments.",
    stack: ["Next.js","TypeScript","MongoDB","Express","Docker"],
    href: "#"
  },
  {
    title: "Arcade Engine – Game Creator",
    blurb: "Turns prompts into playable games/videos. React frontend, scalable Postgres backend.",
    stack: ["React","TypeScript","Supabase","PostgreSQL","Docker"],
    href: "#"
  },
  {
    title: "Robonauts – Team Website",
    blurb: "Official robotics team site with events, profiles, and dynamic content.",
    stack: ["React","TypeScript","Node","Express","PostgreSQL"],
    href: "#"
  },
  {
    title: "getChecked – Location Tracker",
    blurb: "Zones, radius alerts, attendance insights; AI‑assisted summaries.",
    stack: ["React Native","TypeScript","Expo","PostgreSQL","Express"],
    href: "#"
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:bg-white focus:px-3 focus:py-2 focus:rounded-lg focus:shadow">
        Skip to main content
      </a>

      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">Your Name</a>
          <ul className="hidden sm:flex items-center gap-6 text-sm">
            <li><a className="hover:underline" href="#about">About</a></li>
            <li><a className="hover:underline" href="#skills">Technical Skills</a></li>
            <li><a className="hover:underline" href="#experience">Experience</a></li>
            <li><a className="hover:underline" href="#projects">Projects</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border hover:bg-neutral-100"><Linkedin size={18} /></a>
            <a aria-label="Twitter / X" href="#" className="p-2 rounded-lg border hover:bg-neutral-100"><Twitter size={18} /></a>
            <a aria-label="GitHub" href="#" className="p-2 rounded-lg border hover:bg-neutral-100"><Github size={18} /></a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm uppercase tracking-wider text-neutral-500">Hey, I'm <span className="font-medium">Your Name</span></p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">Full‑Stack Developer · Open Source</h1>
            <p className="mt-3 text-neutral-600 max-w-2xl">I build scalable web apps and delightful UX with automation sprinkled throughout.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-neutral-100">
                <Mail size={18} /> you@example.com
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-neutral-900 hover:text-white transition">
                View Projects <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
            <div>
              <p className="text-neutral-700">
                Hello! I’m <span className="font-medium">Your Name</span> — a developer who grew from newbie to full‑stack & DevOps enthusiast.
                I build well‑crafted web products and automation that upgrade everyday workflows.
              </p>
              <div className="mt-4 p-4 rounded-2xl border bg-white">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <LinkIcon size={16} /> <a href="#" className="underline">YourAgency.com</a>
                  <span className="ml-auto inline-flex items-center text-xs px-2 py-0.5 rounded-full border">Active Now</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700">
                  We craft custom AI automations, web apps, and integrations for teams worldwide.
                </p>
                <div className="mt-3">
                  <a href="#contact" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-neutral-100 text-sm">
                    Let’s build something amazing
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 grid place-content-center text-neutral-500">
              <span className="text-sm">Illustration / 3D Placeholder</span>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="< Code : Skills />">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((s) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl border bg-white flex items-center justify-between"
              >
                <span className="font-medium">{s}</span>
                <span className="text-xs text-neutral-500">tech</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="< Work : Experience />">
          <div className="space-y-6">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold">DevOps Engineer Intern</h3>
                <span className="text-neutral-500">• Remote</span>
                <span className="text-neutral-500">• Jan 2025 – Present</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Managed multi‑cloud deployments; optimized CI/CD and container delivery.</li>
                <li>Automated pipelines with GitHub Actions and ArgoCD.</li>
                <li>Handled data migrations and caching; enforced infra automation.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Azure","GCP","Docker","Kubernetes","GitHub Actions","ArgoCD","Redis","PostgreSQL"].map(t => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-white">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold">Full‑Stack Developer Intern</h3>
                <span className="text-neutral-500">• On‑site</span>
                <span className="text-neutral-500">• Oct 2024 – Mar 2025</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Built a responsive app with TypeScript/React and robust Express APIs.</li>
                <li>Designed relational schemas and automated workflows to reduce processing time.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React","TypeScript","Node","Express","PostgreSQL","Prisma","Docker"].map(t => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="< Code : Projects />">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl border bg-white"
              >
                <h3 className="font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
                <div className="mt-4">
                  <a href={p.href} className="inline-flex items-center gap-2 text-sm underline">
                    View project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border"><Github size={16}/> GitHub</a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border"><Twitter size={16}/> X</a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border"><Mail size={16}/> Email</a>
          </div>
          <p className="mt-6 text-sm text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
