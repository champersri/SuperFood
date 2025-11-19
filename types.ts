
import { ReactNode, ReactElement, ComponentType } from 'react';

// This represents the core information about a meal.
export interface MealInfo {
  dishName: string;      // The default display name.
  isVeg: boolean;        // Is the default meal vegetarian?
  nonVegDishName?: string; // Optional non-veg alternative.
  vegDishName?: string;    // Optional veg alternative if the default is non-veg.
  nutrients?: string;      // Optional nutritional info.
  specialNotes?: string;   // Optional special notes.
}

// This is the full meal object passed to components like MealCard, including its time slot.
export interface Meal extends MealInfo {
  time: 'Morning' | 'Noon' | 'Evening' | 'Night' | 'Special';
}

// A plan for a single day, containing meals for each time slot.
export interface DailyPlan {
    day: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    meals: {
        Morning: MealInfo;
        Noon: MealInfo;
        Evening: MealInfo; // "Evening Snack" from the source maps to this.
        Night: MealInfo;
    };
}

// The main data structure for an age group, now containing a full weekly plan.
export interface AgeGroupData {
  id: string;
  name: string;
  range: string;
  icon: ComponentType<{ className?: string }>;
  weeklyPlan: DailyPlan[];
  specialMeal: MealInfo; // The special meal is kept separate for distinct display.
}

export interface PriceMap {
  Morning: number;
  Noon: number;
  Evening: number;
  Night: number;
  Special: number;
}

export interface CartItem {
  id: string;
  meal: Meal;
  isVeg: boolean;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  icon: ComponentType<{ className?: string }>;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  priceRange: string;
  details: string;
  icon: ComponentType<{ className?: string }>;
  mealsIncluded?: string[];
}
