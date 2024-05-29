import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen  max-w-6xl w-full mx-auto flex items-center">
      <div className="space-y-10 flex-1">
        <h1 className="flex flex-col text-5xl gap-5 font-bold">
          <span>Create your Amigo,</span>
          <span>
            share it <span className="px-2 hero_text">everywhere</span>
          </span>
        </h1>
        <p className="text-balance">
          Combine favorite frameworks with fun accessories to craft a unique,
          funny avatar. Perfect for showing off on social media and profiles!
        </p>
        <button className="bg-yellow px-12 py-3 rounded-lg">
          Create Amigo
        </button>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Hero;
