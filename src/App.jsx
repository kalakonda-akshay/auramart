import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Cart from './components/Cart.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductModal from './components/ProductModal.jsx';
import { products } from './data/products.js';

const categories = ['All', 'Electronics', 'Groceries', 'Lifestyle'];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('featured');

  // Cart logic: if a product is already in the cart, increase its quantity.
  // Otherwise, add it as a new cart item with quantity set to 1.
  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  };

  // Quantity logic: dropping below 1 removes the product, which keeps the UI simple.
  const handleUpdateQuantity = (productId, nextQuantity) => {
    if (nextQuantity < 1) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  // Filtering and sorting are derived from state with useMemo so the UI stays fast
  // and the original products array never gets mutated.
  const visibleProducts = useMemo(() => {
    const filteredProducts =
      selectedCategory === 'All'
        ? [...products]
        : products.filter((product) => product.category === selectedCategory);

    if (sortOrder === 'price-low') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'price-high') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  }, [selectedCategory, sortOrder]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#d9f99d_0,#f7fbff_28%,#e0f2fe_58%,#fce7f3_100%)]">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[2rem] p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  <SlidersHorizontal size={16} />
                  Catalog Controls
                </div>
                <h2 className="mt-2 text-3xl font-black text-slate-950">Featured Products</h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-bold text-slate-700">Filter by category</span>
                  <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="h-12 w-full rounded-2xl border border-white/70 bg-white/80 px-4 font-semibold text-slate-800 outline-none transition focus:ring-4 focus:ring-cyan-300/40"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-bold text-slate-700">Sort by price</span>
                  <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="h-12 w-full rounded-2xl border border-white/70 bg-white/80 px-4 font-semibold text-slate-800 outline-none transition focus:ring-4 focus:ring-cyan-300/40"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </section>
      </main>
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
