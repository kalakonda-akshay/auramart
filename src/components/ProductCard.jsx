import { Eye, Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl">
      <button
        type="button"
        onClick={() => onViewDetails(product)}
        className="relative block overflow-hidden text-left"
        aria-label={`View details for ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 backdrop-blur-md">
          {product.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-950">{product.title}</h3>
          <p className="rounded-full bg-slate-950 px-3 py-1 text-sm font-bold text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="mt-3 flex-1 leading-7 text-slate-700">{product.description}</p>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-3">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="apple-button inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-4 py-3 font-bold text-white"
          >
            <Plus size={18} />
            Add to Cart
          </button>
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="grid h-12 w-12 place-items-center rounded-full bg-white/80 text-slate-800 shadow-sm transition hover:bg-white"
            aria-label={`Open ${product.title} details`}
          >
            <Eye size={19} />
          </button>
        </div>
      </div>
    </article>
  );
}
