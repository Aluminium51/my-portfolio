"use client";
import React, { useEffect, useState } from 'react';

const StarryBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numStars = 150; // จำนวนดาว
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                // สุ่มตำแหน่งและขนาด
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 2 + 1}px`, // ขนาดดาวระหว่าง 1px ถึง 3px
                // สุ่ม delay ของ animation
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s` // สุ่มความเร็วในการกระพริบระหว่าง 3s ถึง 8s
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-[2000px] h-full z-5 pointer-events-none overflow-hidden">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: 0,
                        animation: `twinkle ${star.animationDuration} infinite`,
                        animationDelay: star.animationDelay,
                        animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)'
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StarryBackground;