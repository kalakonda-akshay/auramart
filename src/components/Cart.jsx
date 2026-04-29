import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';

export default function Cart({ isOpen, cartItems, onClose, onRemoveItem, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const delivery = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + delivery;

  return (
    <div
      className={`fixed inset-0 z-40 transition ${isOpen ? 'visible' : 'invisible'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-label="Close cart overlay"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white/85 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200/80 p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-600 text-white">
              <ShoppingCart size={21} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Checkout
              </p>
              <h2 className="text-xl font-black text-slate-950">Your Cart</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="text-2xl font-black text-slate-950">Your cart is empty</p>
                <p className="mt-2 text-slate-600">Add a few local favorites to see totals here.</p>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="rounded-3xl bg-white/75 p-4 shadow-sm">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">${item.price.toFixed(2)} each</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full bg-slate-100 p-1">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white"
                          aria-label={`Decrease quantity of ${item.title}`}
                        >
                          <Minus size={15} />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white"
                          aria-label={`Increase quantity of ${item.title}`}
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-slate-200/80 p-5">
          <div className="space-y-3 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="flex justify-between text-sm text-slate-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-300">
              <span>Local delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-white/15 pt-3 text-xl font-black">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="apple-button mt-2 w-full rounded-full bg-cyan-400 px-5 py-3 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
