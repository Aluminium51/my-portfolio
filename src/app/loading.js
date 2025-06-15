"use client";
import React from 'react';

const LoadingSpinner = () => {
  const stars = [
    { className: "star star1", width: "2rem", height: "2rem" }, // 32px = 2rem (ถ้า base font-size คือ 16px)
    { className: "star star2", width: "1.25rem", height: "1.25rem", style: { marginLeft: "-0.625rem", animationDelay: "0.25s" } }, // 20px = 1.25rem, -10px = -0.625rem
    { className: "star star3", width: "1rem", height: "1rem", style: { marginLeft: "-0.9375rem", animationDelay: "0.5s" } } // 16px = 1rem, -15px = -0.9375rem
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/90 z-50">
      <div className="flex items-end justify-center"> {/* แทน .loader */}
        {stars.map((star, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width={star.width}
            height={star.height}
            className={`opacity-0 fill-indigo-400 animate-[loader_2s_infinite_alternate]`}
            style={star.style}
            viewBox="0 0 256 256"
          >
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;