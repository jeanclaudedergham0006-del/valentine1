
import React from 'react';
import { Heart, MessageSquare, Gift, Home } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'message' | 'gift';
  setActiveTab: (tab: 'home' | 'message' | 'gift') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="bg-rose-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Heart className="w-6 h-6 text-white fill-current" />
          </div>
          <span className="text-2xl font-romantic font-bold tracking-tight text-rose-600">Valentine Sweet</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavItem 
            icon={<Home className="w-4 h-4" />} 
            label="Welcome" 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <NavItem 
            icon={<MessageSquare className="w-4 h-4" />} 
            label="Sweet Message" 
            active={activeTab === 'message'} 
            onClick={() => setActiveTab('message')} 
          />
          <NavItem 
            icon={<Gift className="w-4 h-4" />} 
            label="The Gift" 
            active={activeTab === 'gift'} 
            onClick={() => setActiveTab('gift')} 
          />
        </nav>

        <button className="md:hidden p-2 text-rose-500">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
      active 
        ? 'bg-rose-100 text-rose-600 shadow-sm' 
        : 'hover:bg-rose-50 text-rose-400'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Header;
