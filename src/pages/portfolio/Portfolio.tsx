import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  User,
  Briefcase,
  FolderKanban,
  Sparkles,
  FileText,
  Newspaper,
  Mail,
  LayoutGrid,
  X,
  Download,
  type LucideIcon,
} from "lucide-react";

type SectionKey =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "resume"
  | "blog"
  | "contact";

const ORDER: SectionKey[] = [
  "about",
  "experience",
  "projects",
  "skills",
  "resume",
  "blog",
  "contact",
];

const LABELS: Record<SectionKey, string> = {
  about: "About Me",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  resume: "Resume.pdf",
  blog: "Blog",
  contact: "Contact",
};

const ICONS: Record<SectionKey, LucideIcon> = {
  about: User,
  experience: Briefcase,
  projects: FolderKanban,
  skills: Sparkles,
  resume: FileText,
  blog: Newspaper,
  contact: Mail,
};

const displayFont = { fontFamily: "'Space Grotesk', sans-serif" };
const monoFont = { fontFamily: "'IBM Plex Mono', monospace" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };

interface TagProps {
  children: ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <span
      className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-400"
      style={monoFont}
    >
      {children}
    </span>
  );
}

interface SectionLabelProps {
  children: ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h4
      className="mb-2 mt-5 text-xs uppercase tracking-wide text-amber-400 first:mt-0"
      style={displayFont}
    >
      {children}
    </h4>
  );
}

function AboutContent() {
  return (
    <div>
      <p className="mb-3.5 text-slate-200">
        Hi, I'm <strong className="text-slate-100">Alex Rivera</strong> — a
        product engineer who likes building things that feel a little alive.
        Most days that means shipping thoughtful interfaces; most nights it
        means tinkering with small tools nobody asked for, this desktop being
        one of them.
      </p>
      <p className="mb-3.5 text-slate-200">
        I care about the gap between "it works" and "it feels right" — the extra
        10% that makes software memorable instead of merely functional.
        Currently open to product engineering and front-end roles.
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Tag>6 yrs experience</Tag>
        <Tag>frontend-leaning full stack</Tag>
        <Tag>remote-friendly</Tag>
      </div>
    </div>
  );
}

interface ExperienceEntryProps {
  role: string;
  meta: string;
  bullets: string[];
}

function ExperienceEntry({ role, meta, bullets }: ExperienceEntryProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-slate-100">{role}</span>
        <span className="text-xs text-slate-400" style={monoFont}>
          {meta}
        </span>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div>
      <ExperienceEntry
        role="Senior Product Engineer — Nova Systems"
        meta="2023 — Present"
        bullets={[
          "Led rebuild of the core dashboard, cutting median load time by 40%.",
          "Introduced a shared component library adopted across 4 product teams.",
          "Mentored two junior engineers through their first major launches.",
        ]}
      />
      <ExperienceEntry
        role="Frontend Engineer — Lightwell Studio"
        meta="2021 — 2023"
        bullets={[
          "Built client-facing marketing sites and internal tools for 12+ clients.",
          "Owned the design-to-code handoff process, reducing rework by half.",
        ]}
      />
      <ExperienceEntry
        role="Junior Developer — Bramble Co."
        meta="2019 — 2021"
        bullets={[
          "Shipped first production features within first month on the team.",
          "Migrated legacy jQuery codebase to a modern component framework.",
        ]}
      />
    </div>
  );
}

interface ProjectCardProps {
  name: string;
  desc: string;
  tags: string[];
}

function ProjectCard({ name, desc, tags }: ProjectCardProps) {
  return (
    <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3.5 last:mb-0">
      <h5
        className="mb-1 text-sm font-semibold text-slate-100"
        style={displayFont}
      >
        {name}
      </h5>
      <p className="mb-2 text-sm text-slate-300">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div>
      <ProjectCard
        name="Constellation"
        desc="A realtime collaborative whiteboard for distributed teams."
        tags={["React", "WebSockets", "Canvas"]}
      />
      <ProjectCard
        name="Pocket Atlas"
        desc="Offline-first travel journal PWA with map-based entries."
        tags={["Svelte", "IndexedDB", "PWA"]}
      />
      <ProjectCard
        name="Loopcast"
        desc="A browser-based loop sequencer for quick music sketches."
        tags={["WebAudio", "TypeScript"]}
      />
    </div>
  );
}

function SkillsContent() {
  return (
    <div>
      <SectionLabel>Languages</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        <Tag>JavaScript / TypeScript</Tag>
        <Tag>Python</Tag>
        <Tag>Go</Tag>
      </div>
      <SectionLabel>Frameworks</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        <Tag>React</Tag>
        <Tag>Next.js</Tag>
        <Tag>Node.js</Tag>
      </div>
      <SectionLabel>Tools &amp; Design</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        <Tag>Figma</Tag>
        <Tag>Docker</Tag>
        <Tag>Git</Tag>
        <Tag>PostgreSQL</Tag>
      </div>
    </div>
  );
}

function ResumeContent() {
  return (
    <div>
      <p className="mb-3.5 text-slate-200">
        The short version: 6 years building interfaces, 3 companies, a lot of
        shipped features, and an ongoing habit of over-polishing side projects
        (see: this page).
      </p>
      <p className="mb-3.5 text-slate-200">
        Download the full resume for the detailed version — roles, dates, and
        specifics.
      </p>
      <a
        href="#"
        download
        className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-300"
      >
        <Download size={15} />
        Download Resume
      </a>
    </div>
  );
}

interface BlogItemProps {
  title: string;
  date: string;
  excerpt: string;
}

function BlogItem({ title, date, excerpt }: BlogItemProps) {
  return (
    <div className="border-b border-white/10 py-3 last:border-b-0">
      <h5 className="text-sm font-semibold text-slate-100" style={displayFont}>
        {title}
      </h5>
      <div className="text-xs text-slate-400" style={monoFont}>
        {date}
      </div>
      <p className="mt-1.5 text-sm text-slate-300">{excerpt}</p>
    </div>
  );
}

function BlogContent() {
  return (
    <div>
      <BlogItem
        title="Designing interfaces that feel like software, not spreadsheets"
        date="June 2026"
        excerpt="Thoughts on why so many internal tools feel lifeless, and three small habits that fix it."
      />
      <BlogItem
        title="What building a fake OS taught me about real ones"
        date="April 2026"
        excerpt="Notes from building this very desktop — windows, dock, and all."
      />
      <BlogItem
        title="Notes on debugging with empathy"
        date="February 2026"
        excerpt="A short reflection on treating bug reports as stories, not tickets."
      />
    </div>
  );
}

function ContactContent() {
  return (
    <div>
      <div className="flex items-center gap-2.5 border-b border-white/10 py-2.5 text-sm">
        <Mail size={16} className="flex-none text-amber-400" />
        <a
          href="mailto:hello@alexrivera.dev"
          className="text-slate-100 hover:text-amber-400"
        >
          hello@alexrivera.dev
        </a>
      </div>
      <div className="flex items-center gap-2.5 border-b border-white/10 py-2.5 text-sm">
        {/* <Github size={16} className="flex-none text-amber-400" /> */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-amber-400"
        >
          github.com/alexrivera
        </a>
      </div>
      <div className="flex items-center gap-2.5 py-2.5 text-sm">
        {/* <Linkedin size={16} className="flex-none text-amber-400" /> */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-100 hover:text-amber-400"
        >
          linkedin.com/in/alexrivera
        </a>
      </div>
      <a
        href="mailto:hello@alexrivera.dev"
        className="mt-3 mr-2 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-slate-100 hover:bg-white/10"
      >
        Say hello
      </a>
    </div>
  );
}

const CONTENT: Record<SectionKey, ReactNode> = {
  about: <AboutContent />,
  experience: <ExperienceContent />,
  projects: <ProjectsContent />,
  skills: <SkillsContent />,
  resume: <ResumeContent />,
  blog: <BlogContent />,
  contact: <ContactContent />,
};

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface MousePos {
  x: number;
  y: number;
}

export default function Portfolio() {
  const [openKey, setOpenKey] = useState<SectionKey | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [now, setNow] = useState(new Date());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setStartOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Constellation wallpaper
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let W: number, H: number, nodes: Node[], raf: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      const count = Math.max(28, Math.min(70, Math.floor((W * H) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    }
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", onMove);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const linkDist = 130;
      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.strokeStyle = `rgba(160,146,205,${0.28 * (1 - dist / linkDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      const { x: mx, y: my } = mouseRef.current;
      for (const n of nodes) {
        const dx = n.x - mx,
          dy = n.y - my;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        const glow = distMouse < 160 ? 1 - distMouse / 160 : 0;
        ctx.beginPath();
        ctx.fillStyle =
          glow > 0
            ? `rgba(242,169,59,${0.4 + glow * 0.5})`
            : "rgba(243,241,248,0.55)";
        ctx.arc(n.x, n.y, n.r + glow * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-100"
      style={bodyFont}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`}</style>

      {/* Wallpaper */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-950 via-slate-950 to-slate-950" />
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-14 items-center justify-between border-b border-white/10 bg-white/5 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-200 text-xs font-bold text-slate-900"
            style={displayFont}
          >
            AR
          </div>
          <div className="text-sm font-semibold" style={displayFont}>
            Alex Rivera
          </div>
          <div
            className="ml-2 hidden border-l border-white/10 pl-2 text-xs text-slate-400 sm:block"
            style={monoFont}
          >
            product engineer
          </div>
        </div>
        <div
          className="flex items-center gap-4 text-xs text-slate-400"
          style={monoFont}
        >
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            available for work
          </span>
          <span className="text-sm text-slate-100">{time}</span>
        </div>
      </div>

      {/* Desktop icons */}
      <div className="absolute inset-x-0 top-14 bottom-16 z-10 flex flex-wrap content-start gap-2 overflow-y-auto p-6">
        {ORDER.map((key) => {
          const Icon = ICONS[key];
          return (
            <button
              key={key}
              onClick={() => setOpenKey(key)}
              aria-label={`Open ${LABELS[key]}`}
              className="flex w-24 flex-col items-center gap-2 rounded-xl px-1.5 py-2.5 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-amber-400">
                <Icon size={20} />
              </div>
              <div className="text-center text-xs leading-tight text-slate-100">
                {LABELS[key]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dock */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-16 items-center gap-2.5 border-t border-white/10 bg-white/5 px-4 backdrop-blur-xl">
        <button
          onClick={() => setStartOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-400/20"
          style={displayFont}
        >
          <LayoutGrid size={16} />
          Menu
        </button>
        <div className="mx-1 h-7 w-px bg-white/10" />
        <div className="flex flex-1 items-center gap-1.5 overflow-x-auto">
          {ORDER.map((key) => {
            const Icon = ICONS[key];
            const active = openKey === key;
            return (
              <div key={key} className="relative flex-none">
                <button
                  onClick={() => setOpenKey(key)}
                  title={LABELS[key]}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-amber-400 transition-transform hover:-translate-y-1"
                >
                  <Icon size={17} />
                </button>
                {active && (
                  <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-400" />
                )}
              </div>
            );
          })}
        </div>
        <div
          className="whitespace-nowrap pl-2 text-xs text-slate-400"
          style={monoFont}
        >
          {date} · {time}
        </div>
      </div>

      {/* Start menu */}
      {startOpen && (
        <div className="absolute bottom-20 left-4 z-20 flex w-56 flex-col gap-0.5 rounded-2xl border border-white/10 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl">
          {ORDER.map((key) => {
            const Icon = ICONS[key];
            return (
              <button
                key={key}
                onClick={() => {
                  setOpenKey(key);
                  setStartOpen(false);
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm hover:bg-white/10"
              >
                <Icon size={15} className="text-amber-400" />
                <span>{LABELS[key]}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Window overlay */}
      {openKey && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/45 p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenKey(null);
          }}
        >
          <div
            className="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/85 shadow-2xl backdrop-blur-2xl"
            style={{ maxHeight: "82vh" }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div
                className="flex items-center gap-2.5 text-sm font-semibold"
                style={displayFont}
              >
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                {LABELS[openKey]}
              </div>
              <button
                onClick={() => setOpenKey(null)}
                aria-label="Close window"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-slate-100"
              >
                <X size={16} />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 text-sm leading-relaxed">
              {CONTENT[openKey]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
