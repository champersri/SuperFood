
import React from 'react';
import type { Meal, CartItem } from '../types';
import { PRICING } from '../constants';
import { IconSun, IconPlate, IconSnack, IconMoon, IconDumbbell, IconPlusCircle, IconLeaf, IconMeat } from './Icons';

interface MealCardProps {
  meal: Meal;
  isVeg: boolean;
  onAddToCart: (item: CartItem) => void;
}

const MealTimeIcon: React.FC<{ time: Meal['time'] }> = ({ time }) => {
    const icons = {
        Morning: <IconSun className="w-5 h-5 text-yellow-500" />,
        Noon: <IconPlate className="w-5 h-5 text-orange-500" />,
        Evening: <IconSnack className="w-5 h-5 text-purple-500" />,
        Night: <IconMoon className="w-5 h-5 text-indigo-500" />,
        Special: <IconDumbbell className="w-5 h-5 text-red-500" />,
    };
    return icons[time];
}

const MealCard: React.FC<MealCardProps> = ({ meal, isVeg, onAddToCart }) => {
  const price = PRICING[meal.time];
  const canBeVeg = !!meal.vegDishName;
  const canBeNonVeg = !!meal.nonVegDishName;

  // Determine the dish name based on the toggle and availability
  let displayDishName = meal.dishName;
  let isDisplayingVeg = meal.isVeg;

  if (isVeg) {
    if (canBeVeg) {
      displayDishName = meal.vegDishName!;
      isDisplayingVeg = true;
    } else {
      isDisplayingVeg = meal.isVeg;
    }
  } else { // if toggle is non-veg
    if (canBeNonVeg) {
      displayDishName = meal.nonVegDishName!;
      isDisplayingVeg = false;
    } else {
      isDisplayingVeg = meal.isVeg;
    }
  }
  
  // A meal is available if the toggle matches its nature (veg/non-veg)
  // or if it has an alternative for the selected toggle option.
  const isAvailable = (isVeg && isDisplayingVeg) || (!isVeg && !isDisplayingVeg);

  const handleAdd = () => {
    onAddToCart({
      id: `${meal.time}-${displayDishName}`,
      meal: { ...meal, dishName: displayDishName },
      isVeg: isDisplayingVeg,
      price: price,
    });
  };

  return (
    <div className={`bg-gray-50/50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 ${!isAvailable ? 'opacity-50 bg-gray-100' : 'hover:shadow-md hover:border-green-300'}`}>
        <div>
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                    <MealTimeIcon time={meal.time} />
                    <h3 className="font-bold text-lg text-gray-800">{meal.time}</h3>
                </div>
                {isAvailable && (
                    <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${isDisplayingVeg ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                        {isDisplayingVeg ? <IconLeaf className="w-3 h-3"/> : <IconMeat className="w-3 h-3"/>}
                        {isDisplayingVeg ? 'Veg' : 'Non-Veg'}
                    </div>
                )}
            </div>
            
            <p className="text-gray-700 font-semibold mb-2">{displayDishName}</p>
            
            {meal.nutrients && (
                <p className="text-xs text-gray-500 mb-2">
                    <span className="font-semibold">Nutrients:</span> {meal.nutrients}
                </p>
            )}
            
            {meal.specialNotes && (
                <p className="text-xs text-gray-500 italic">
                    "{meal.specialNotes}"
                </p>
            )}
        </div>
      
        <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-green-600">₹{price}</span>
            <button
                onClick={handleAdd}
                disabled={!isAvailable}
                className="flex items-center gap-1.5 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none shadow-sm"
            >
                <IconPlusCircle className="w-5 h-5"/>
                Add
            </button>
        </div>
    </div>
  );
};

export default MealCard;
