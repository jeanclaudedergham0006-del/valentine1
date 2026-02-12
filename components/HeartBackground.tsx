
import React from 'react';

const HeartBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden overflow-y-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-rose-200/40 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 5}s`
          }}
        >
          ❤
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,241,242,0.5)_0%,rgba(255,255,255,1)_100%)]"></div>
    </div>
  );
};

export default HeartBackground;
