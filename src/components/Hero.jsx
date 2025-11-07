import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('app');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-[80vh] sm:h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do not block 3D interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="pointer-events-none max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
            Your Library, Reimagined
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700/90">
            A modern, vibrant dashboard to manage books, members, and borrows — with an immersive, interactive vibe.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={handleScroll} className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:brightness-110 transition">
              Get Started
            </button>
            <a href="#features" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/60 text-gray-800 font-medium hover:bg-white/90 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
