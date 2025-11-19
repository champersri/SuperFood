
import React, { useState, useMemo } from 'react';
import type { AgeGroupData, CartItem, Meal, MealInfo, DailyPlan } from '../types';
import MealCard from './MealCard';
import { IconLeaf, IconMeat, IconPlusCircle } from './Icons';
import { PRICING, DAILY_QUOTES } from '../constants';

interface MealPlanProps {
  ageGroupData: AgeGroupData;
  isVeg: boolean;
  setIsVeg: (isVeg: boolean) => void;
  onAddToCart: (item: CartItem) => void;
}

const VegNonVegToggle: React.FC<{ isVeg: boolean, setIsVeg: (isVeg: boolean) => void }> = ({ isVeg, setIsVeg }) => {
    return (
        <div className="flex items-center justify-center bg-gray-100 rounded-full p-1 w-64 mx-auto shadow-inner">
            <button 
                onClick={() => setIsVeg(true)}
                className={`w-1/2 rounded-full py-2 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-300 ${isVeg ? 'bg-green-500 text-white shadow' : 'text-gray-600'}`}>
                <IconLeaf className="w-5 h-5" />
                Veg
            </button>
            <button 
                onClick={() => setIsVeg(false)}
                className={`w-1/2 rounded-full py-2 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-300 ${!isVeg ? 'bg-orange-500 text-white shadow' : 'text-gray-600'}`}>
                <IconMeat className="w-5 h-5" />
                Non-Veg
            </button>
        </div>
    );
};

const DaySelector: React.FC<{ selectedDay: number, onSelectDay: (day: number) => void }> = ({ selectedDay, onSelectDay }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className="flex justify-center items-center gap-2 bg-gray-100 p-2 rounded-full">
            {days.map((day, index) => (
                <button
                    key={day}
                    onClick={() => onSelectDay(index)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        selectedDay === index 
                        ? 'bg-white text-green-600 shadow' 
                        : 'text-gray-500 hover:bg-white/60'
                    }`}
                >
                    {day}
                </button>
            ))}
        </div>
    );
};

const ViewModeToggle: React.FC<{ viewMode: 'daily' | 'weekly', setViewMode: (mode: 'daily' | 'weekly') => void }> = ({ viewMode, setViewMode }) => {
    return (
        <div className="flex items-center justify-center bg-gray-100 rounded-full p-1 w-64 mx-auto shadow-inner">
            <button
                onClick={() => setViewMode('daily')}
                className={`w-1/2 rounded-full py-2 px-4 text-sm font-semibold transition-colors duration-300 ${viewMode === 'daily' ? 'bg-white text-green-600 shadow' : 'text-gray-600'}`}>
                Daily View
            </button>
            <button
                onClick={() => setViewMode('weekly')}
                className={`w-1/2 rounded-full py-2 px-4 text-sm font-semibold transition-colors duration-300 ${viewMode === 'weekly' ? 'bg-white text-green-600 shadow' : 'text-gray-600'}`}>
                Weekly View
            </button>
        </div>
    );
};

interface WeeklyMealCellProps {
    mealInfo: MealInfo;
    time: Meal['time'];
    isVeg: boolean;
    onAddToCart: (item: CartItem) => void;
}

const WeeklyMealCell: React.FC<WeeklyMealCellProps> = ({ mealInfo, time, isVeg, onAddToCart }) => {
    const price = PRICING[time];
    const canBeVeg = !!mealInfo.vegDishName;
    const canBeNonVeg = !!mealInfo.nonVegDishName;

    let displayDishName = mealInfo.dishName;
    let isDisplayingVeg = mealInfo.isVeg;

    if (isVeg) {
        if (canBeVeg) {
            displayDishName = mealInfo.vegDishName!;
            isDisplayingVeg = true;
        } else {
            isDisplayingVeg = mealInfo.isVeg;
        }
    } else {
        if (canBeNonVeg) {
            displayDishName = mealInfo.nonVegDishName!;
            isDisplayingVeg = false;
        } else {
            isDisplayingVeg = mealInfo.isVeg;
        }
    }

    const isAvailable = (isVeg && isDisplayingVeg) || (!isVeg && !isDisplayingVeg);

    const handleAdd = () => {
        onAddToCart({
            id: `${time}-${displayDishName}`,
            meal: { ...mealInfo, dishName: displayDishName, time: time },
            isVeg: isDisplayingVeg,
            price: price,
        });
    };

    return (
        <div className={`p-3 rounded-lg h-full flex flex-col justify-between text-left ${isAvailable ? 'bg-white' : 'bg-gray-100 text-gray-500'}`}>
            <div>
                <p className="text-sm font-semibold">{displayDishName}</p>
                {mealInfo.specialNotes && <p className="text-xs text-gray-400 italic mt-1">"{mealInfo.specialNotes}"</p>}
            </div>
            <div className="flex items-center justify-between mt-2">
                <span className={`text-lg font-bold ${isAvailable ? 'text-green-600' : 'text-gray-400'}`}>₹{price}</span>
                <button
                    onClick={handleAdd}
                    disabled={!isAvailable}
                    className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    aria-label={`Add ${displayDishName} to cart`}
                >
                    <IconPlusCircle className="w-5 h-5"/>
                </button>
            </div>
        </div>
    );
};

const WeeklyGrid: React.FC<{ ageGroupData: AgeGroupData, isVeg: boolean, onAddToCart: (item: CartItem) => void }> = ({ ageGroupData, isVeg, onAddToCart }) => {
    const days: DailyPlan['day'][] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mealTimes: (Meal['time'])[] = ['Morning', 'Noon', 'Evening', 'Night'];

    return (
        <div className="mt-6">
            <div className="overflow-x-auto pb-4">
                <div className="grid grid-cols-[100px_repeat(7,minmax(200px,1fr))] gap-2 min-w-[800px]">
                    {/* Headers */}
                    <div className="font-bold text-gray-600 p-2 text-right sticky left-0 bg-gray-50/80 backdrop-blur-sm z-10"></div>
                    {days.map(day => <div key={day} className="font-bold text-gray-800 p-2 text-center bg-gray-100 rounded-lg">{day}</div>)}

                    {/* Meal Rows */}
                    {mealTimes.map(time => (
                        <React.Fragment key={time}>
                            <div className="font-bold text-gray-600 p-2 text-right sticky left-0 bg-gray-50/80 backdrop-blur-sm z-10 flex items-center justify-end">{time}</div>
                            {days.map(day => {
                                const dayPlan = ageGroupData.weeklyPlan.find(p => p.day === day);
                                const mealInfo = dayPlan?.meals[time as keyof typeof dayPlan.meals];
                                return (
                                    <div key={`${day}-${time}`} className="bg-gray-50 rounded-lg">
                                        {mealInfo ? (
                                            <WeeklyMealCell mealInfo={mealInfo} time={time} isVeg={isVeg} onAddToCart={onAddToCart} />
                                        ) : (
                                            <div className="p-3 text-gray-400 text-sm">Not available</div>
                                        )}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
             {/* Special Meal Section */}
            <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Special Meal for Active Days</h3>
                <div className="max-w-md mx-auto">
                    <MealCard meal={{...ageGroupData.specialMeal, time: 'Special'}} isVeg={isVeg} onAddToCart={onAddToCart} />
                </div>
            </div>
        </div>
    );
};


const MealPlan: React.FC<MealPlanProps> = ({ ageGroupData, isVeg, setIsVeg, onAddToCart }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(() => new Date().getDay());
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');

  const mealsForSelectedDay: Meal[] = useMemo(() => {
    if (viewMode === 'weekly') return []; // Don't compute if in weekly view
    const dayPlan = ageGroupData.weeklyPlan[selectedDayIndex];
    if (!dayPlan) return [];
    
    return [
      { ...dayPlan.meals.Morning, time: 'Morning' },
      { ...dayPlan.meals.Noon, time: 'Noon' },
      { ...dayPlan.meals.Evening, time: 'Evening' },
      { ...dayPlan.meals.Night, time: 'Night' },
      { ...ageGroupData.specialMeal, time: 'Special' }
    ];
  }, [selectedDayIndex, ageGroupData, viewMode]);

  const dailyQuote = DAILY_QUOTES[selectedDayIndex];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{ageGroupData.name} Plan</h2>
        <p className="text-md text-gray-500">{ageGroupData.range}</p>
      </div>
      
      <div className="mb-6 flex flex-col md:flex-row items-center justify-center flex-wrap gap-4">
          <VegNonVegToggle isVeg={isVeg} setIsVeg={setIsVeg} />
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {viewMode === 'daily' ? (
        <div className="flex flex-col items-center gap-4">
            <DaySelector selectedDay={selectedDayIndex} onSelectDay={setSelectedDayIndex} />
            <blockquote className="text-center text-gray-600 italic">
                "{dailyQuote}"
            </blockquote>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {mealsForSelectedDay.map((meal, index) => (
                <MealCard
                  key={`${ageGroupData.id}-${meal.time}-${selectedDayIndex}-${index}`}
                  meal={meal}
                  isVeg={isVeg}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
        </div>
      ) : (
        <WeeklyGrid ageGroupData={ageGroupData} isVeg={isVeg} onAddToCart={onAddToCart} />
      )}
    </div>
  );
};

export default MealPlan;
