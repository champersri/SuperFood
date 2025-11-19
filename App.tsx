
import React, { useState, useMemo, useCallback } from 'react';
import { MEAL_DATA, MAIN_QUOTE } from './constants';
import type { CartItem, Addon } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AgeSelector from './components/AgeSelector';
import MealPlan from './components/MealPlan';
import Cart from './components/Cart';
import Subscriptions from './components/Subscriptions';
import { IconLeaf, IconCheckCircle } from './components/Icons';

const App: React.FC = () => {
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isVeg, setIsVeg] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const selectedAgeGroupData = useMemo(() => {
    if (!selectedAgeGroupId) return null;
    return MEAL_DATA.find(group => group.id === selectedAgeGroupId) || null;
  }, [selectedAgeGroupId]);

  const handleSelectAgeGroup = useCallback((id: string) => {
    setSelectedAgeGroupId(id);
    setOrderPlaced(false);
  }, []);

  const handleAddToCart = useCallback((item: CartItem) => {
    setCart(prevCart => [...prevCart, { ...item, id: `${item.id}-${Date.now()}` }]);
    setOrderPlaced(false);
  }, []);

  const handleRemoveFromCart = useCallback((itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  }, []);
  
  const handleToggleAddon = useCallback((addonId: string) => {
    setSelectedAddons(prevAddons => {
        const newAddons = new Set(prevAddons);
        if (newAddons.has(addonId)) {
            newAddons.delete(addonId);
        } else {
            newAddons.add(addonId);
        }
        return newAddons;
    });
  }, []);

  const handlePlaceOrder = useCallback(async () => {
    if (cart.length === 0) return;
    
    setIsPlacingOrder(true);
    setOrderPlaced(false);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          addons: Array.from(selectedAddons),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setOrderPlaced(true);
        setCart([]);
        setSelectedAddons(new Set());
      } else {
        console.error("Order failed:", data.error);
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred while placing your order. Please check your connection.");
    } finally {
      setIsPlacingOrder(false);
    }
  }, [cart, selectedAddons]);

  return (
    <div className="min-h-screen flex flex-col bg-green-50/50">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <section className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <IconLeaf className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Super Food</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your daily partner for healthy, natural, and delicious meals, delivered right to your doorstep.
          </p>
          <blockquote className="mt-4 text-lg italic text-gray-500 max-w-2xl mx-auto">
            "{MAIN_QUOTE}"
          </blockquote>
        </section>

        <AgeSelector
          selectedId={selectedAgeGroupId}
          onSelect={handleSelectAgeGroup}
        />

        {orderPlaced && (
           <div className="my-8 p-6 bg-green-100 border-l-4 border-green-500 rounded-r-lg text-green-800 flex items-center justify-center shadow-lg animate-fade-in-down">
                <IconCheckCircle className="w-8 h-8 mr-4" />
                <div>
                    <p className="text-lg font-semibold">Thank you! Your healthy meal plan is on its way.</p>
                    <p className="text-sm opacity-80">You will receive a confirmation shortly.</p>
                </div>
            </div>
        )}

        {selectedAgeGroupData ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <MealPlan
                ageGroupData={selectedAgeGroupData}
                isVeg={isVeg}
                setIsVeg={setIsVeg}
                onAddToCart={handleAddToCart}
              />
            </div>
            <div className="mt-8 lg:mt-0">
              <Cart
                cart={cart}
                selectedAddons={selectedAddons}
                onRemove={handleRemoveFromCart}
                onToggleAddon={handleToggleAddon}
                onPlaceOrder={handlePlaceOrder}
                isPlacingOrder={isPlacingOrder}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-16 px-4">
             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome to a Healthier You!</h2>
             <p className="text-gray-500 mb-8">Please select an age group above to view your personalized meal plan.</p>
             <Subscriptions />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
