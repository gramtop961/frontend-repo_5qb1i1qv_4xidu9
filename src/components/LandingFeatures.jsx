import React from 'react';
import { Rocket, Star, Shield, Sparkles } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur hover:shadow-xl transition">
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  </div>
);

const LandingFeatures = () => {
  return (
    <section id="features" className="relative z-10 -mt-12 sm:-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Feature icon={Rocket} title="Fast Management" desc="Search, filter, and manage your collection at lightning speed." />
          <Feature icon={Sparkles} title="Vibrant UI" desc="Aesthetic gradients and motion that feel alive and modern." />
          <Feature icon={Shield} title="Reliable" desc="Thoughtful UX patterns that make everyday tasks effortless." />
          <Feature icon={Star} title="Loved by Teams" desc="Built to scale from small clubs to busy libraries." />
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
