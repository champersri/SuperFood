
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="container mx-auto py-6 px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Super Food. All Rights Reserved. Eat Healthy, Live Fully.</p>
      </div>
    </footer>
  );
};

export default Footer;