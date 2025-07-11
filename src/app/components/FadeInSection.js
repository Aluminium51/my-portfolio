"use client";

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,    // trigger when see 10% element
  });

  return (
    <div
      ref={ref}
      // ถ้า inView เป็น true: opacity-100 (มองเห็น) และ translate-y-0 (กลับสู่ตำแหน่งปกติ)
      // ถ้า inView เป็น false: opacity-0 (โปร่งใส) และ translate-y-10 (เลื่อนลงเล็กน้อย)
      className={`transition-all duration-700 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;