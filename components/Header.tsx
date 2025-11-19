
import React from 'react';
import { IconLeaf } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconLeaf className="w-8 h-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Super Food</span>
        </div>
       <a 
  href="#cart"
  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold shadow-sm"
>
  Order Now
</a>

      </div>
    </header>
  );
};

export default Header;
