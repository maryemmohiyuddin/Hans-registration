'use client';

import { useState, useEffect } from "react";
import Design1 from "@/components/design1";
import App from "@/components/navbar";

export default function About() {
  const images = [
    "./therpy3.jpg",
    "./therapy6.jpg",
    "./therapy5.png",
    // "./therapy4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <div className="h-[100vh] relative about">
        <App />
        <div className="flex justify-between h-full w-full pl-32">
          <div className="flex gap-10 w-[70%] h-full items-center justify-center pt-20">
            <Design1 />
          </div>
          <div className="circle-mask relative overflow-hidden w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Therapy Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
