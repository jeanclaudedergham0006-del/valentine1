
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-rose-100">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-rose-500 p-1.5 rounded-md">
            <Heart className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="text-lg font-romantic font-bold text-rose-600">Valentine Sweet</span>
        </div>
        
        <p className="text-sm text-rose-400 font-light">
          Crafted with love for the most special people. &copy; {new Date().getFullYear()} Valentine Heartbeat.
        </p>
        
        <div className="flex gap-6 text-rose-300">
          <a href="#" className="hover:text-rose-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
