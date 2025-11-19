import React from 'react';
import { MEAL_DATA } from '../constants';

interface AgeSelectorProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const AgeSelector: React.FC<AgeSelectorProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Choose Your Age Group</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {MEAL_DATA.map(group => {
          const Icon = group.icon;
          return (
            <button
              key={group.id}
              onClick={() => onSelect(group.id)}
              className={`flex flex-col items-center justify-center p-3 text-center rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                ${selectedId === group.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-green-100 text-gray-700'
                }`}
            >
              <div className="mb-1 text-2xl">
                <Icon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm">{group.name}</span>
              <span className="text-xs opacity-80">{group.range}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AgeSelector;
