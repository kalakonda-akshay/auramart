import { Plus, X } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-4 py-6">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close product detail overlay"
      />
      <section className="glass-panel relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
          aria-label="Close product details"
        >
          <X size={20} />
        </button>
        <div className="grid gap-0 md:grid-cols-2">
          <img src={product.image} alt={product.title} className="h-80 w-full object-cover md:h-full" />
          <div className="p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              {product.category}
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{product.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{product.description}</p>
            <p className="mt-4 leading-8 text-slate-600">{product.details}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-3xl font-black text-slate-950">${product.price.toFixed(2)}</p>
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="apple-button inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-bold text-white"
              >
                <Plus size={19} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
