
import React, { useMemo } from 'react';
import type { CartItem, Addon } from '../types';
import { ADDONS } from '../constants';
import { IconShoppingCart, IconX, IconLeaf, IconMeat } from './Icons';

interface CartProps {
  cart: CartItem[];
  selectedAddons: Set<string>;
  onRemove: (itemId: string) => void;
  onToggleAddon: (addonId: string) => void;
  onPlaceOrder: () => void;
  isPlacingOrder: boolean;
}

const Cart: React.FC<CartProps> = ({ cart, selectedAddons, onRemove, onToggleAddon, onPlaceOrder, isPlacingOrder }) => {
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + item.price, 0), [cart]);

  const addonTotal = useMemo(() => {
    return ADDONS.reduce((acc, addon) => {
        return selectedAddons.has(addon.id) ? acc + addon.price : acc;
    }, 0);
  }, [selectedAddons]);

  const total = subtotal + addonTotal;

  return (
    <aside className="sticky top-24 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
            <IconShoppingCart className="w-7 h-7 text-green-600"/>
            <h2 className="text-2xl font-bold text-gray-800">Your Meal Plan</h2>
        </div>
      
        <div className="max-h-60 overflow-y-auto pr-2 space-y-3 mb-4 custom-scrollbar">
            {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your plan is empty. Add some healthy meals!</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                            {item.isVeg ? <IconLeaf className="w-4 h-4 text-green-600"/> : <IconMeat className="w-4 h-4 text-orange-600"/>}
                            <div>
                                <p className="text-sm font-semibold text-gray-800">{item.meal.dishName}</p>
                                <p className="text-xs text-gray-500">{item.meal.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-700">₹{item.price}</span>
                            <button 
                                onClick={() => onRemove(item.id)} 
                                disabled={isPlacingOrder}
                                className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <IconX className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
      
        <div className="border-t border-gray-200 pt-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Optional Add-ons</h3>
            <div className="space-y-2">
                {ADDONS.map(addon => {
                    const Icon = addon.icon;
                    return (
                     <div key={addon.id} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100">
                        <label htmlFor={addon.id} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                           <Icon className="w-5 h-5 text-gray-500" />
                           {addon.name}
                        </label>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-600">+ ₹{addon.price}</span>
                            <input 
                                type="checkbox"
                                id={addon.id}
                                disabled={isPlacingOrder}
                                checked={selectedAddons.has(addon.id)}
                                onChange={() => onToggleAddon(addon.id)}
                                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer disabled:opacity-50"
                            />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <span>Add-ons</span>
                <span>₹{addonTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
            </div>
        </div>

        <button 
            onClick={onPlaceOrder}
            disabled={cart.length === 0 || isPlacingOrder}
            className={`w-full mt-6 font-bold py-3 rounded-lg text-lg transition-colors shadow-md flex justify-center items-center gap-2
                ${cart.length === 0 || isPlacingOrder 
                    ? 'bg-gray-300 cursor-not-allowed shadow-none text-gray-500' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
        >
            {isPlacingOrder ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </>
            ) : (
                'Place Order'
            )}
        </button>
    </aside>
  );
};

export default Cart;
