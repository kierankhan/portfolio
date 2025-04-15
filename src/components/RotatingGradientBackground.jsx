import React from 'react';

const RotatingGradientBackground = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
          {/* The animated gradient background */}
          <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(-45deg, #1e293b, #0f172a, #0c1836, #2d0a42)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              zIndex: -1
            }}
          />
          
          {/* Content container */}
          <div className="relative z-10 flex-grow">
            {children}
          </div>
          
          {/* Inline styles for the animation - WITHOUT rotation */}
          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% 0%;
              }
              25% {
                background-position: 0% 100%;
              }
              50% {
                background-position: 100% 100%;
              }
              75% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 0% 0%;
              }
            }
          `}</style>
        </div>
      );
};

export default RotatingGradientBackground;