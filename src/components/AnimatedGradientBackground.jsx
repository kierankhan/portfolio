
import { useEffect } from 'react';

const AnimatedGradientBackground = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* The animated gradient background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          zIndex: -1
        }}
      />
      
      {/* This is where your content will go */}
      <div className="relative z-10 flex-grow">
        {children}
      </div>
      
      {/* Inline styles for the animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedGradientBackground;