import React from "react";
import {
  Home,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  Code,
  Link as LinkIcon,
  Download,
  ListChecks,
  Info,
  Video,
  Search,
  Cpu,
  Layers,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

// ------------------------------------------------------------
// RZEM.AI — Design A "Neon Synth" — Lesson 1 (Tailwind-only)
// No Framer Motion, no custom CSS — just Tailwind utilities.
// ------------------------------------------------------------

export default function Flux101Lesson1TailwindOnly() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50">
      <Header />
      <LessonHero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <Sidebar />
        <Article />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 animate-[pulse_4s_ease-in-out_infinite]" />
          <span className="font-semibold tracking-tight">rzem.ai</span>
          <span className="hidden md:inline text-xs text-zinc-400 ml-2">FLUX.1 Learning Hub</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a className="hover:text-white transition" href="#">Guides</a>
          <a className="hover:text-white transition" href="#">Prompt Library</a>
          <a className="hover:text-white transition" href="#">Workflows</a>
          <a className="hover:text-white transition" href="#">Benchmarks</a>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700 hover:bg-zinc-800 text-sm">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </header>
  );
}

function LessonHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      {/* Neon blobs (Tailwind gradients only) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <a className="hover:text-zinc-200 flex items-center gap-1" href="#"><Home className="h-3.5 w-3.5" /> Home</a>
          <span>/</span>
          <a className="hover:text-zinc-200" href="#">FLUX 101</a>
          <span>/</span>
          <span className="text-zinc-300">Lesson 1</span>
        </nav>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
          FLUX 101 · Lesson 1 — Your First Render
        </h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          Install, configure, and generate your first image with FLUX.1. We’ll set up the environment, walk through a minimal prompt, and export results reproducibly.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><Clock3 className="h-3.5 w-3.5" /> 20–30 min</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><Flame className="h-3.5 w-3.5" /> Beginner</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><BookOpen className="h-3.5 w-3.5" /> FLUX 101</span>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <h4 className="text-sm font-semibold mb-3">Lesson Outline</h4>
          <ol className="space-y-2 text-sm text-zinc-300">
            <li><a href="#req" className="hover:text-white">Requirements</a></li>
            <li><a href="#setup" className="hover:text-white">Setup</a></li>
            <li><a href="#first-prompt" className="hover:text-white">Your First Prompt</a></li>
            <li><a href="#render" className="hover:text-white">Render & Export</a></li>
            <li><a href="#troubleshoot" className="hover:text-white">Troubleshooting</a></li>
            <li><a href="#next" className="hover:text-white">Next Lesson</a></li>
          </ol>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <h4 className="text-sm font-semibold mb-3">Downloads</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2"><Download className="h-4 w-4" /> Starter Preset (.json)</li>
            <li className="flex items-center gap-2"><Download className="h-4 w-4" /> ComfyUI Graph (.json)</li>
            <li className="flex items-center gap-2"><Download className="h-4 w-4" /> LUT Pack (.cube)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> FLUX.1 Docs</li>
            <li className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> ComfyUI Quickstart</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

function Article() {
  return (
    <article className="space-y-10">
      <Callout icon={<Info className="h-4 w-4" />} title="What you'll achieve">
        By the end of this lesson you will: (1) install the required tools; (2) run your first FLUX.1 text→image render; (3) export a reproducible record (prompt + seed + sampler + CFG + steps).
      </Callout>

      <Section id="req" title="Requirements">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> GPU w/ 8GB+ VRAM (or cloud)</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Python 3.10+</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> ComfyUI latest build</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> FLUX.1 model weights</li>
        </ul>
      </Section>

      <Section id="setup" title="Setup">
        <Step number={1} label="Install ComfyUI">
          Clone the repo and install dependencies. Keep a dedicated virtual environment per model family.
        </Step>
        <CodeBlock>
{`git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt`}
        </CodeBlock>
        <Step number={2} label="Add FLUX.1 weights">
          Place the model files in <code>ComfyUI/models/checkpoints/</code> (or your configured path). Verify filenames match your loader node.
        </Step>
        <Step number={3} label="Launch UI">
          Start ComfyUI and confirm GPU is recognized.
        </Step>
        <CodeBlock>
{`python main.py --listen 127.0.0.1 --port 8188`}
        </CodeBlock>
      </Section>

      <Section id="first-prompt" title="Your First Prompt">
        <p className="text-zinc-300">Paste the prompt below into your text node. Keep it minimal and concrete.</p>
        <CodeBlock language="prompt">
{`a single ceramic mug on a wooden table, soft window light at 5500K, shallow depth of field, crisp rim lighting, neutral color grading`}
        </CodeBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-zinc-400">
          <Prop label="Seed" value="123456789" />
          <Prop label="Steps" value="28" />
          <Prop label="CFG" value="5.5" />
          <Prop label="Sampler" value="dpmpp_2m" />
          <Prop label="Resolution" value="768 × 1024" />
          <Prop label="Batch" value="1" />
        </div>
      </Section>

      <MediaPanel />

      <Section id="render" title="Render & Export">
        <p className="text-zinc-300">Run the graph. When satisfied, export a JSON receipt of parameters and the image. This ensures reproducibility for later comparisons.</p>
        <CodeBlock>
{`# In ComfyUI: Save as workflow JSON
# Also save prompt/seed sampler/cfg/steps in your preset manager
# Example export path
exports/
  2025-08-27_lesson1_mug/
    workflow.json
    render_seed123456789.png
    manifest.yaml`}
        </CodeBlock>
        <Callout icon={<ListChecks className="h-4 w-4" />} title="Quality checklist">
          Sharp subject edges, believable lighting, clean bokeh, no color cast (5500K), and consistent grain. If you see plastic sheen or waxy texture, lower CFG or switch sampler.
        </Callout>
      </Section>

      <Section id="troubleshoot" title="Troubleshooting">
        <ul className="list-disc ml-6 text-zinc-300 space-y-2">
          <li><b>CUDA out of memory</b>: reduce resolution to 640×896 or use tiled VAE.</li>
          <li><b>Muddy colors</b>: remove conflicting adjectives; keep white balance explicit (e.g., 5500K).</li>
          <li><b>Waxy faces</b>: lower CFG 5.0–6.0 and try Euler a or DPM++ 2M.</li>
        </ul>
      </Section>

      <nav id="next" className="flex items-center justify-between border-t border-zinc-800 pt-8">
        <a href="#" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Intro
        </a>
        <a href="#" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
          Lesson 2 — Lighting & Color <ArrowRight className="h-4 w-4" />
        </a>
      </nav>

      <AsideChangelog />
    </article>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

function Step({ number, label, children }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 border border-zinc-700 flex items-center justify-center font-bold text-zinc-200">
          {number}
        </div>
        <div className="font-semibold">{label}</div>
      </div>
      <div className="mt-3 text-sm text-zinc-300">{children}</div>
    </div>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm text-zinc-200">
      <code>{children}</code>
    </pre>
  );
}

function Prop({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="font-mono text-sm">{value}</div>
    </div>
  );
}

function Callout({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 p-4">
      <div className="flex items-center gap-2 text-fuchsia-300 font-medium">
        {icon}
        {title}
      </div>
      <div className="mt-2 text-sm text-zinc-300">{children}</div>
    </div>
  );
}

function MediaPanel() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="aspect-video rounded-xl border border-zinc-800 bg-zinc-950/60 flex items-center justify-center">
          <div className="text-center text-zinc-400">
            <Video className="h-8 w-8 mx-auto mb-2" />
            <div className="text-sm">Lesson video — coming soon</div>
          </div>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="text-sm text-zinc-400">ComfyUI Graph (schematic)</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 border border-zinc-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AsideChangelog() {
  return (
    <aside className="mt-10 rounded-2xl border border-zinc-800 p-6 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20">
      <h4 className="text-lg font-semibold flex items-center gap-2"><GitBranch className="h-5 w-5" /> Latest Changelog</h4>
      <ul className="mt-4 space-y-3 text-sm text-zinc-300">
        <li>• New: FLUX.1 style control cheatsheet</li>
        <li>• Update: Portrait rig v2 with color LUTs</li>
        <li>• Fix: ComfyUI batch export bug notes</li>
      </ul>
      <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm text-cyan-300">View all updates <ArrowUpRight className="h-4 w-4" /></a>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-zinc-400 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} rzem.ai — FLUX.1 learning resources</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">RSS</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
