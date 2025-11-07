import React from 'react';
import { BookOpenCheck, Users, BookMarked } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
    <div className={`p-3 rounded-lg ${accent} text-white`}> 
      <Icon size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const StatsOverview = ({ totalBooks, totalMembers, borrowedBooks }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard icon={BookOpenCheck} label="Total Books" value={totalBooks} accent="bg-indigo-600" />
      <StatCard icon={Users} label="Members" value={totalMembers} accent="bg-emerald-600" />
      <StatCard icon={BookMarked} label="Borrowed" value={borrowedBooks} accent="bg-amber-600" />
    </section>
  );
};

export default StatsOverview;
