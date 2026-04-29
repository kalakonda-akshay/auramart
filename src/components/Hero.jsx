import { Sparkles, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-14">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm backdrop-blur-md">
          <Sparkles size={16} />
          Curated local finds, ready for checkout
        </div>
        <div className="space-y-4">
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Shop essentials with a fresh, modern cart experience.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            Browse electronics, groceries, and lifestyle products in a responsive store built
            with clean React state and recruiter-friendly component structure.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
          <span className="rounded-full bg-white/65 px-4 py-2 backdrop-blur-md">React State</span>
          <span className="rounded-full bg-white/65 px-4 py-2 backdrop-blur-md">Tailwind CSS</span>
          <span className="rounded-full bg-white/65 px-4 py-2 backdrop-blur-md">Lucide Icons</span>
        </div>
      </div>

      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1100&q=80"
          alt="Modern local shop counter with products"
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Fast Pickup
            </p>
            <p className="mt-1 font-bold text-slate-900">Same-day local store collection</p>
          </div>
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-500 text-white">
            <Truck size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}
