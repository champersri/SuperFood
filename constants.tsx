
import React from 'react';
import type { AgeGroupData, PriceMap, Addon, SubscriptionPlan } from './types';
import { IconBaby, IconTeen, IconAdult, IconMidlife, IconSenior, IconElderly, IconLeaf, IconDumbbell, IconJuice, IconPlusCircle } from './components/Icons';

export const MAIN_QUOTE = "Eat like your future depends on it — because it does.";

export const DAILY_QUOTES: string[] = [
  "Wellness begins at breakfast.", // Sunday
  "A healthy outside starts from a nourished inside.", // Monday
  "Your fork is your first defense against disease.", // Tuesday
  "Eat clean, think clear, live well.", // Wednesday
  "Good food choices are investments, not expenses.", // Thursday
  "Strong bodies are built one good meal at a time.", // Friday
  "Healthy eating is not a sacrifice, it’s a celebration." // Saturday
];

export const MEAL_DATA: AgeGroupData[] = [
  {
    id: '5-12',
    name: 'Growing Children',
    range: '5–12 Years',
    icon: IconBaby,
    specialMeal: { dishName: 'Oats Energy Bar + Fruit Smoothie', isVeg: true, specialNotes: 'For active kids' },
    weeklyPlan: [
      { day: 'Sunday', meals: {
        Morning: { dishName: 'Ragi Banana Pancakes + Almond Milk', isVeg: true },
        Noon: { dishName: 'Mini Chicken Veg Wrap + Orange', isVeg: false, vegDishName: 'Mini Paneer Veg Wrap + Orange', nonVegDishName: 'Mini Chicken Veg Wrap + Orange' },
        Evening: { dishName: 'Fruit Chaat + Roasted Foxnuts', isVeg: true },
        Night: { dishName: 'Lentil Khichdi + Ghee + Boiled Egg', isVeg: false, vegDishName: 'Lentil Khichdi + Ghee + Tofu', nonVegDishName: 'Lentil Khichdi + Ghee + Boiled Egg' }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Vegetable Poha + Apple Juice', isVeg: true },
        Noon: { dishName: 'Paneer Paratha + Curd + Mango', isVeg: true },
        Evening: { dishName: 'Peanut Chikki + Coconut Water', isVeg: true },
        Night: { dishName: 'Soft Moong Dal + Rice + Carrot Slaw', isVeg: true }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Whole Wheat Upma + Banana', isVeg: true },
        Noon: { dishName: 'Chicken Biryani + Raita', isVeg: false, vegDishName: 'Veg Biryani + Raita', nonVegDishName: 'Chicken Biryani + Raita' },
        Evening: { dishName: 'Boiled Sweet Corn + Dates', isVeg: true },
        Night: { dishName: 'Tofu Bhurji + Jowar Roti', isVeg: true }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Idli + Sambar + Kiwi', isVeg: true },
        Noon: { dishName: 'Rajma Rice + Cucumber Salad', isVeg: true },
        Evening: { dishName: 'Roasted Makhanas + Lassi', isVeg: true },
        Night: { dishName: 'Vegetable Dalia + Ghee', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Besan Chilla + Orange Slices', isVeg: true },
        Noon: { dishName: 'Egg Curry + Brown Rice + Veg', isVeg: false, vegDishName: 'Paneer Curry + Brown Rice + Veg', nonVegDishName: 'Egg Curry + Brown Rice + Veg' },
        Evening: { dishName: 'Guava + Herbal Tea', isVeg: true },
        Night: { dishName: 'Masoor Dal + Chapati + Beetroot Salad', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Oats Porridge + Berries', isVeg: true },
        Noon: { dishName: 'Grilled Paneer Sandwich + Buttermilk', isVeg: true },
        Evening: { dishName: 'Chickpea Chaat + Coconut Water', isVeg: true },
        Night: { dishName: 'Palak Khichdi + Ghee + Boiled Potato', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Whole Wheat Dosa + Chutney + Apple', isVeg: true },
        Noon: { dishName: 'Chicken Pulao + Carrot Raita', isVeg: false, vegDishName: 'Veg Pulao + Carrot Raita', nonVegDishName: 'Chicken Pulao + Carrot Raita' },
        Evening: { dishName: 'Dates + Dry Fruit Mix + Banana', isVeg: true },
        Night: { dishName: 'Vegetable Soup + Millet Roti + Tofu Curry', isVeg: true }
      }},
    ],
  },
  {
    id: '13-20',
    name: 'Teens & Early Growth',
    range: '13–20 Years',
    icon: IconTeen,
    specialMeal: { dishName: 'Banana Protein Smoothie + Boiled Sweet Potato', isVeg: true, specialNotes: 'For sports teens' },
    weeklyPlan: [
      { day: 'Sunday', meals: {
        Morning: { dishName: 'Multigrain Toast + Boiled Eggs + Apple', isVeg: false, vegDishName: 'Multigrain Toast + Tofu Scramble + Apple', nonVegDishName: 'Multigrain Toast + Boiled Eggs + Apple' },
        Noon: { dishName: 'Brown Rice + Chicken Curry + Veg Salad', isVeg: false, vegDishName: 'Brown Rice + Rajma/Chana Curry + Veg Salad', nonVegDishName: 'Brown Rice + Chicken Curry + Veg Salad' },
        Evening: { dishName: 'Homemade Granola + Yogurt + Berries', isVeg: true },
        Night: { dishName: 'Stuffed Paratha (Chicken) + Curd', isVeg: false, vegDishName: 'Stuffed Paratha (Paneer) + Curd', nonVegDishName: 'Stuffed Paratha (Chicken) + Curd' }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Sprouted Moong Salad + Banana', isVeg: true },
        Noon: { dishName: 'Paneer Bhurji + Chapati + Green Salad', isVeg: true },
        Evening: { dishName: 'Roasted Chana + Lemon Water', isVeg: true },
        Night: { dishName: 'Mixed Vegetable Pulao + Boiled Egg', isVeg: false, vegDishName: 'Mixed Vegetable Pulao + Tofu', nonVegDishName: 'Mixed Vegetable Pulao + Boiled Egg' }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Whole Wheat Sandwich + Milk', isVeg: true },
        Noon: { dishName: 'Grilled Fish + Couscous + Steamed Veggies', isVeg: false, vegDishName: 'Grilled Tofu + Couscous + Steamed Veggies', nonVegDishName: 'Grilled Fish + Couscous + Steamed Veggies' },
        Evening: { dishName: 'Fruit Bowl + Dry Fruits', isVeg: true },
        Night: { dishName: 'Rajma + Brown Rice + Cucumber Raita', isVeg: true }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Poha + Sprouted Beans + Orange Juice', isVeg: true },
        Noon: { dishName: 'Chicken Tikka + Quinoa + Spinach', isVeg: false, vegDishName: 'Paneer Tikka + Quinoa + Spinach', nonVegDishName: 'Chicken Tikka + Quinoa + Spinach' },
        Evening: { dishName: 'Peanut Butter Toast + Herbal Tea', isVeg: true },
        Night: { dishName: 'Masoor Dal + Lauki Sabzi + Chapati', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Vegetable Oats Upma + Papaya', isVeg: true },
        Noon: { dishName: 'Tofu Stir Fry + Millet + Curd', isVeg: true },
        Evening: { dishName: 'Guava + Handful of Almonds', isVeg: true },
        Night: { dishName: 'Vegetable Stew + Rice + Green Chutney', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Methi Paratha + Boiled Egg + Buttermilk', isVeg: false, vegDishName: 'Methi Paratha + Curd + Buttermilk', nonVegDishName: 'Methi Paratha + Boiled Egg + Buttermilk' },
        Noon: { dishName: 'Egg Biryani + Cucumber Mint Raita', isVeg: false, vegDishName: 'Veg Biryani + Cucumber Mint Raita', nonVegDishName: 'Egg Biryani + Cucumber Mint Raita' },
        Evening: { dishName: 'Chickpeas Salad + Coconut Water', isVeg: true },
        Night: { dishName: 'Moong Dal Khichdi + Ghee + Beetroot Slaw', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Smoothie Bowl (Banana, Berries, Chia)', isVeg: true },
        Noon: { dishName: 'Chicken Shawarma Bowl + Quinoa', isVeg: false, vegDishName: 'Falafel Bowl + Quinoa', nonVegDishName: 'Chicken Shawarma Bowl + Quinoa' },
        Evening: { dishName: 'Sweet Potato + Lassi', isVeg: true },
        Night: { dishName: 'Tofu Bhurji + Jowar Roti', isVeg: true }
      }},
    ],
  },
  {
    id: '21-37',
    name: 'Active Adults',
    range: '21–37 Years',
    icon: IconAdult,
    specialMeal: { dishName: 'Chicken Breast + Sweet Potato Mash + Green Beans', isVeg: false, vegDishName: 'Paneer Steak + Sweet Potato Mash + Green Beans', nonVegDishName: 'Chicken Breast + Sweet Potato Mash + Green Beans', specialNotes: 'Ideal post-gym' },
    weeklyPlan: [
       { day: 'Sunday', meals: {
        Morning: { dishName: 'Scrambled Eggs + Avocado Toast + Papaya', isVeg: false, vegDishName: 'Tofu Scramble + Avocado Toast + Papaya', nonVegDishName: 'Scrambled Eggs + Avocado Toast + Papaya' },
        Noon: { dishName: 'Grilled Fish + Quinoa + Steamed Broccoli', isVeg: false, vegDishName: 'Grilled Tofu + Quinoa + Steamed Broccoli', nonVegDishName: 'Grilled Fish + Quinoa + Steamed Broccoli' },
        Evening: { dishName: 'Roasted Chana + Coconut Water + Banana', isVeg: true },
        Night: { dishName: 'Vegetable Millet Pulao + Dal + Salad', isVeg: true }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Smoothie (Spinach + Banana + Peanut Butter)', isVeg: true },
        Noon: { dishName: 'Soya Bhurji + Brown Rice + Veggies', isVeg: true },
        Evening: { dishName: 'Almond Trail Mix + Apple', isVeg: true },
        Night: { dishName: 'Chicken Curry + Multigrain Roti + Green Salad', isVeg: false, vegDishName: 'Paneer Curry + Multigrain Roti + Green Salad', nonVegDishName: 'Chicken Curry + Multigrain Roti + Green Salad' }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Boiled Eggs + Whole Wheat Bread + Orange', isVeg: false, vegDishName: 'Besan Chilla + Whole Wheat Bread + Orange', nonVegDishName: 'Boiled Eggs + Whole Wheat Bread + Orange' },
        Noon: { dishName: 'Paneer Tikka Bowl + Couscous + Mint Chutney', isVeg: true },
        Evening: { dishName: 'Sprouted Moong + Fruit Chunks', isVeg: true },
        Night: { dishName: 'Khichdi + Veg Curry + Raita', isVeg: true }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Masala Oats + Berries', isVeg: true },
        Noon: { dishName: 'Chicken Wrap + Sweet Potato Fries', isVeg: false, vegDishName: 'Paneer Wrap + Sweet Potato Fries', nonVegDishName: 'Chicken Wrap + Sweet Potato Fries' },
        Evening: { dishName: 'Guava + Coconut Water', isVeg: true },
        Night: { dishName: 'Tofu Stir Fry + Rice + Broccoli', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Vegetable Upma + Pomegranate Seeds', isVeg: true },
        Noon: { dishName: 'Fish Curry + Brown Rice + Salad', isVeg: false, vegDishName: 'Lentil Curry + Brown Rice + Salad', nonVegDishName: 'Fish Curry + Brown Rice + Salad' },
        Evening: { dishName: 'Chickpea Salad + Green Tea', isVeg: true },
        Night: { dishName: 'Mixed Lentil Soup + Chapati', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Chia Pudding + Mixed Fruits', isVeg: true },
        Noon: { dishName: 'Egg Salad + Whole Grain Bread + Vegetable Soup', isVeg: false, vegDishName: 'Chickpea Salad + Whole Grain Bread + Vegetable Soup', nonVegDishName: 'Egg Salad + Whole Grain Bread + Vegetable Soup' },
        Evening: { dishName: 'Beetroot Tikki + Lassi', isVeg: true },
        Night: { dishName: 'Vegetable Dalia + Tofu Cutlet', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Protein Pancakes + Almond Milk', isVeg: true },
        Noon: { dishName: 'Quinoa Bowl + Grilled Chicken + Hummus', isVeg: false, vegDishName: 'Quinoa Bowl + Grilled Paneer + Hummus', nonVegDishName: 'Quinoa Bowl + Grilled Chicken + Hummus' },
        Evening: { dishName: 'Banana + Walnut Mix', isVeg: true },
        Night: { dishName: 'Dal Makhani + Jeera Rice + Green Salad', isVeg: true }
      }},
    ],
  },
  {
    id: '38-45',
    name: 'Mid-life Management',
    range: '38–45 Years',
    icon: IconMidlife,
    specialMeal: { dishName: 'Egg White Omelette + Sautéed Veggies', isVeg: false, vegDishName: 'Tofu Scramble + Sautéed Veggies', nonVegDishName: 'Egg White Omelette + Sautéed Veggies', specialNotes: 'Metabolic health' },
    weeklyPlan: [
      { day: 'Sunday', meals: {
        Morning: { dishName: 'Oats with Chia + Berries + Almonds', isVeg: true },
        Noon: { dishName: 'Grilled Chicken + Brown Rice + Leafy Salad', isVeg: false, vegDishName: 'Grilled Paneer + Brown Rice + Leafy Salad', nonVegDishName: 'Grilled Chicken + Brown Rice + Leafy Salad' },
        Evening: { dishName: 'Boiled Corn + Guava + Green Tea', isVeg: true },
        Night: { dishName: 'Barley Soup + Whole Wheat Roti + Paneer', isVeg: true }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Millet Porridge + Banana + Almonds', isVeg: true },
        Noon: { dishName: 'Rajma + Brown Rice + Cabbage Slaw', isVeg: true },
        Evening: { dishName: 'Dry Fruit Mix + Lemon Water', isVeg: true },
        Night: { dishName: 'Masoor Dal + Chapati + Veggies', isVeg: true }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Tofu Scramble + Whole Wheat Toast', isVeg: true },
        Noon: { dishName: 'Soya Curry + Millet + Veg Salad', isVeg: true },
        Evening: { dishName: 'Roasted Foxnuts + Apple', isVeg: true },
        Night: { dishName: 'Chicken Curry + Bajra Roti + Spinach Bhaji', isVeg: false, vegDishName: 'Paneer Curry + Bajra Roti + Spinach Bhaji', nonVegDishName: 'Chicken Curry + Bajra Roti + Spinach Bhaji' }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Ragi Pancakes + Dates + Walnuts', isVeg: true },
        Noon: { dishName: 'Egg Bhurji + Quinoa + Mixed Veggies', isVeg: false, vegDishName: 'Tofu Bhurji + Quinoa + Mixed Veggies', nonVegDishName: 'Egg Bhurji + Quinoa + Mixed Veggies' },
        Evening: { dishName: 'Green Smoothie + Chia Seeds', isVeg: true },
        Night: { dishName: 'Vegetable Soup + Moong Dal + Chapati', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Vegetable Upma + Buttermilk', isVeg: true },
        Noon: { dishName: 'Grilled Paneer + Couscous + Broccoli', isVeg: true },
        Evening: { dishName: 'Guava + Herbal Tea', isVeg: true },
        Night: { dishName: 'Barley Khichdi + Ghee + Beetroot Salad', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Chia Seed Pudding + Papaya', isVeg: true },
        Noon: { dishName: 'Fish Tikka + Brown Rice + Steamed Veg', isVeg: false, vegDishName: 'Paneer Tikka + Brown Rice + Steamed Veg', nonVegDishName: 'Fish Tikka + Brown Rice + Steamed Veg' },
        Evening: { dishName: 'Peanut Chikki + Banana', isVeg: true },
        Night: { dishName: 'Methi Thepla + Palak Curry', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Vegetable Smoothie + Oats Toast', isVeg: true },
        Noon: { dishName: 'Chicken Bowl + Red Rice + Veggies', isVeg: false, vegDishName: 'Tofu Bowl + Red Rice + Veggies', nonVegDishName: 'Chicken Bowl + Red Rice + Veggies' },
        Evening: { dishName: 'Roasted Almonds + Coconut Water', isVeg: true },
        Night: { dishName: 'Khichdi + Ghee + Curd', isVeg: true }
      }},
    ],
  },
  {
    id: '46-60',
    name: 'Hormonal & Bone Health',
    range: '46–60 Years',
    icon: IconSenior,
    specialMeal: { dishName: 'Protein Smoothie + 2 Brazil Nuts', isVeg: true, specialNotes: 'For active mid-agers' },
    weeklyPlan: [
      { day: 'Sunday', meals: {
        Morning: { dishName: 'Ragi Porridge + Dates + Walnuts', isVeg: true },
        Noon: { dishName: 'Grilled Salmon + Brown Rice + Spinach', isVeg: false, vegDishName: 'Soya Steak + Brown Rice + Spinach', nonVegDishName: 'Grilled Salmon + Brown Rice + Spinach' },
        Evening: { dishName: 'Chickpea Salad + Lemon Water', isVeg: true },
        Night: { dishName: 'Lauki Soup + Jowar Roti + Curd', isVeg: true }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Oats with Fruits + Almond Milk', isVeg: true },
        Noon: { dishName: 'Tofu Curry + Brown Rice + Veggies', isVeg: true },
        Evening: { dishName: 'Roasted Pumpkin Seeds + Orange', isVeg: true },
        Night: { dishName: 'Vegetable Stew + Chapati', isVeg: true }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Vegetable Poha + Papaya', isVeg: true },
        Noon: { dishName: 'Chana Dal + Quinoa + Mixed Veg', isVeg: true },
        Evening: { dishName: 'Guava + Buttermilk', isVeg: true },
        Night: { dishName: 'Barley Soup + Tofu Cutlet', isVeg: true }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Bajra Dosa + Coconut Chutney', isVeg: true },
        Noon: { dishName: 'Grilled Chicken + Leafy Salad + Couscous', isVeg: false, vegDishName: 'Grilled Tofu + Leafy Salad + Couscous', nonVegDishName: 'Grilled Chicken + Leafy Salad + Couscous' },
        Evening: { dishName: 'Roasted Chickpeas + Tea', isVeg: true },
        Night: { dishName: 'Moong Dal + Jeera Rice + Cucumber Salad', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Methi Paratha + Curd + Banana', isVeg: true },
        Noon: { dishName: 'Egg Curry + Red Rice + Beans', isVeg: false, vegDishName: 'Paneer Curry + Red Rice + Beans', nonVegDishName: 'Egg Curry + Red Rice + Beans' },
        Evening: { dishName: 'Dates + Herbal Water', isVeg: true },
        Night: { dishName: 'Vegetable Dalia + Mint Chutney', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Chia Pudding + Berries', isVeg: true },
        Noon: { dishName: 'Paneer Bhurji + Jowar Roti + Beet Salad', isVeg: true },
        Evening: { dishName: 'Carrot Sticks + Nut Dip', isVeg: true },
        Night: { dishName: 'Spinach Soup + Brown Rice + Yogurt', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Masala Oats + Nuts', isVeg: true },
        Noon: { dishName: 'Chicken Stir Fry + Millet + Veggies', isVeg: false, vegDishName: 'Tofu Stir Fry + Millet + Veggies', nonVegDishName: 'Chicken Stir Fry + Millet + Veggies' },
        Evening: { dishName: 'Sprout Chaat + Coconut Water', isVeg: true },
        Night: { dishName: 'Moong Khichdi + Bottle Gourd Curry', isVeg: true }
      }},
    ],
  },
  {
    id: '60+',
    name: 'Elderly Support',
    range: '60+ Years',
    icon: IconElderly,
    specialMeal: { dishName: 'Steamed Fish or Tofu + Spinach Soup', isVeg: false, vegDishName: 'Steamed Tofu + Spinach Soup', nonVegDishName: 'Steamed Fish + Spinach Soup', specialNotes: 'For immunity recovery' },
    weeklyPlan: [
      { day: 'Sunday', meals: {
        Morning: { dishName: 'Soft Idli + Coconut Chutney + Orange', isVeg: true },
        Noon: { dishName: 'Masoor Dal + Rice + Carrot-Beet Slaw', isVeg: true },
        Evening: { dishName: 'Banana + Boiled Sweet Potato + Herbal Tea', isVeg: true },
        Night: { dishName: 'Oats Khichdi + Ghee + Buttermilk', isVeg: true }
      }},
      { day: 'Monday', meals: {
        Morning: { dishName: 'Oats Porridge + Dates + Warm Milk', isVeg: true },
        Noon: { dishName: 'Tofu Bhurji + Soft Roti + Spinach', isVeg: true },
        Evening: { dishName: 'Steamed Apple + Chamomile Tea', isVeg: true },
        Night: { dishName: 'Vegetable Soup + Rice + Ghee', isVeg: true }
      }},
      { day: 'Tuesday', meals: {
        Morning: { dishName: 'Wheat Dalia + Milk + Fruit', isVeg: true },
        Noon: { dishName: 'Khichdi + Veg Curry + Curd', isVeg: true },
        Evening: { dishName: 'Papaya Slices + Almonds', isVeg: true },
        Night: { dishName: 'Moong Dal Soup + Jowar Roti', isVeg: true }
      }},
      { day: 'Wednesday', meals: {
        Morning: { dishName: 'Banana Pancake + Nut Paste', isVeg: true },
        Noon: { dishName: 'Grilled Fish + Soft Rice + Veg Mash', isVeg: false, vegDishName: 'Grilled Tofu + Soft Rice + Veg Mash', nonVegDishName: 'Grilled Fish + Soft Rice + Veg Mash' },
        Evening: { dishName: 'Coconut Water + Foxnuts', isVeg: true },
        Night: { dishName: 'Barley Khichdi + Spinach Soup', isVeg: true }
      }},
      { day: 'Thursday', meals: {
        Morning: { dishName: 'Vegetable Upma + Mint Chutney', isVeg: true },
        Noon: { dishName: 'Rajma + Rice + Cabbage Slaw', isVeg: true },
        Evening: { dishName: 'Orange + Cashews', isVeg: true },
        Night: { dishName: 'Dalia + Mixed Veg + Ghee', isVeg: true }
      }},
      { day: 'Friday', meals: {
        Morning: { dishName: 'Ragi Malt + Soft Fruits', isVeg: true },
        Noon: { dishName: 'Egg Curry + Soft Chapati + Greens', isVeg: false, vegDishName: 'Paneer Curry + Soft Chapati + Greens', nonVegDishName: 'Egg Curry + Soft Chapati + Greens' },
        Evening: { dishName: 'Herbal Tea + Roasted Chana', isVeg: true },
        Night: { dishName: 'Masoor Dal + Roti + Yogurt', isVeg: true }
      }},
      { day: 'Saturday', meals: {
        Morning: { dishName: 'Soft Dosa + Chutney + Apple Juice', isVeg: true },
        Noon: { dishName: 'Soya + Rice + Beetroot Salad', isVeg: true },
        Evening: { dishName: 'Boiled Sweet Potato + Herbal Tea', isVeg: true },
        Night: { dishName: 'Vegetable Stew + Ghee + Mint Raita', isVeg: true }
      }},
    ],
  },
];


export const PRICING: PriceMap = {
  Morning: 85,
  Noon: 110,
  Evening: 70,
  Night: 100,
  Special: 140,
};

export const ADDONS: Addon[] = [
    { id: 'juice', name: 'Fresh Fruit Juice', price: 35, icon: IconJuice },
    { id: 'protein', name: 'Protein Boost', price: 30, icon: IconDumbbell },
    { id: 'omega', name: 'Omega-3 Bowl', price: 35, icon: IconPlusCircle },
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
    {id: 'single', name: 'Single Meal Daily', priceRange: '₹1800–₹2500', details: 'Choose any one meal slot per day.', icon: IconLeaf, mealsIncluded: ['e.g. Noon Meal']},
    {id: 'double', name: 'Two Meals a Day', priceRange: '₹3500–₹4000', details: 'Perfect for lunch and dinner.', icon: IconLeaf, mealsIncluded: ['Noon Meal', 'Night Meal']},
    {id: 'full', name: 'Full Day Plan', priceRange: '₹5000–₹6500', details: 'All meals from morning to night covered.', icon: IconLeaf, mealsIncluded: ['Morning', 'Noon', 'Evening', 'Night']},
    {id: 'gym', name: 'Gym/Recovery Plan', priceRange: '₹6000–₹7500', details: 'High protein and targeted nutrients.', icon: IconDumbbell, mealsIncluded: ['High-Protein Meals', 'Special Meal']},
];
