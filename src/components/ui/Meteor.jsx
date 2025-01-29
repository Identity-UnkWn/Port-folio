// ContainedMeteors.jsx
import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const ContainedMeteors = ({ number = 10 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>
        {`
          @keyframes containedMeteor {
            0% { 
              transform: rotate(215deg) translateX(0);
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: rotate(215deg) translateX(-200px);
              opacity: 0;
            }
          }
          .contained-meteor-effect {
            animation: containedMeteor 5s linear infinite;
          }
        `}
      </style>
      {[...Array(number)].map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute",
            "h-0.5 w-0.5",
            "pointer-events-none",
            "contained-meteor-effect"
          )}
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.random() * (10 - 2) + 2 + "s"
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-[50px] h-[1px] -translate-y-1/2 bg-purple-500/50 rotate-[215deg] transform-origin-[left]" />
        </div>
      ))}
    </div>
  );
};

export default ContainedMeteors;