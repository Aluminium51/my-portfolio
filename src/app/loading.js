"use client";
import React from 'react';

const loading = () => {
  const animationDuration = '1.5s';

  const delay1 = `calc(0s - ${animationDuration} / 4 * 0)`; 
  const delay2 = `calc(0s - ${animationDuration} / 4 * 1)`; 
  const delay3 = `calc(0s - ${animationDuration} / 4 * 2)`;
  const delay4 = `calc(0s - ${animationDuration} / 4 * 3)`; 

  const starSize = "1.5rem"; 

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900/90 z-50">
      {/* Star Container  */}
      <div className="flex items-center justify-center w-full max-w-xl px-4 h-20">
        
        {/* Star 1 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={starSize}
          height={starSize}
          className={`fill-indigo-400`}
          style={{
            animation: `wave-bounce ${animationDuration} infinite ease-in-out, glowing ${animationDuration} infinite alternate`,
            animationDelay: delay1,
          }}
          viewBox="0 0 256 256"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>

        {/* Star 2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={starSize}
          height={starSize}
          className={`fill-indigo-400`}
          style={{
            animation: `wave-bounce ${animationDuration} infinite ease-in-out, glowing ${animationDuration} infinite alternate`,
            animationDelay: delay2,
          }}
          viewBox="0 0 256 256"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>

        {/* Star 3 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={starSize}
          height={starSize}
          className={`fill-indigo-400`}
          style={{
            animation: `wave-bounce ${animationDuration} infinite ease-in-out, glowing ${animationDuration} infinite alternate`,
            animationDelay: delay3,
          }}
          viewBox="0 0 256 256"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>

        {/* Star 4 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={starSize}
          height={starSize}
          className={`fill-indigo-400`}
          style={{
            animation: `wave-bounce ${animationDuration} infinite ease-in-out, glowing ${animationDuration} infinite alternate`,
            animationDelay: delay4,
          }}
          viewBox="0 0 256 256"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>

      </div>
      {/* Loading... */}
      <p className="mt-6 text-xl md:text-2xl font-semibold text-slate-300 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default loading;