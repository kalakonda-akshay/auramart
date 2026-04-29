import { ShoppingBag, Store } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-30 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/25">
            <Store size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">Aura Mart</h1>
            <p className="text-sm font-semibold text-cyan-700">Local Store</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          className="apple-button relative inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-5 font-semibold text-white"
          aria-label="Open shopping cart"
        >
          <ShoppingBag size={20} />
          <span className="hidden sm:inline">Cart</span>
          <span className="absolute -right-2 -top-2 grid h-7 min-w-7 place-items-center rounded-full bg-amber-400 px-2 text-sm font-bold text-slate-950">
            {cartCount}
          </span>
        </button>
      </nav>
    </header>
  );
}
