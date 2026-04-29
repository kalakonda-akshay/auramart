import { Github, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col gap-4 rounded-3xl px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500 text-white">
            <HeartHandshake size={20} />
          </div>
          <p className="font-semibold text-slate-800">
            Built as a student-friendly React internship portfolio project.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 font-semibold text-slate-600">
          <Github size={18} />
          React + Tailwind + Lucide
        </div>
      </div>
    </footer>
  );
}
