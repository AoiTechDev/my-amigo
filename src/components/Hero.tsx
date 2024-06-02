import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen  max-w-6xl w-full mx-auto px-4 flex items-center lg:flex-row flex-col pt-36 lg:pt-0">
      <div className="space-y-10 lg:flex-1 flex-center lg:items-start  flex-col">
        <h1 className="flex flex-col text-3xl md:text-5xl gap-2 lg:gap-5 font-bold">
          <span>Create your Amigo,</span>
          <span className="text-nowrap">
            share it <span className="px-2 hero_text">everywhere</span>
          </span>
        </h1>
        <p className="text-balance text-center text-sm sm:text-md lg:text-start">
          Combine favorite frameworks with fun accessories to craft a unique,
          funny avatar. Perfect for showing off on social media and profiles!
        </p>
        <button className="bg-orange px-12 py-3 rounded-lg">
          <span className="font-medium">Create Amigo</span>
        </button>
      </div>
      <div className="lg:flex-1 bg-black">sd</div>
    </div>
  );
};

export default Hero;
