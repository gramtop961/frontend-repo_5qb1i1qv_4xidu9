import React, { useMemo } from 'react';
import { User, Mail, Phone } from 'lucide-react';

const MemberRow = ({ member }) => (
  <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
        <User size={18} />
      </div>
      <div>
        <p className="font-medium text-gray-900">{member.name}</p>
        <p className="text-xs text-gray-500">ID: {member.id}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-500">
      {member.email && (
        <span className="inline-flex items-center gap-1"><Mail size={16} />{member.email}</span>
      )}
      {member.phone && (
        <span className="inline-flex items-center gap-1"><Phone size={16} />{member.phone}</span>
      )}
    </div>
  </div>
);

const MemberPanel = ({ members }) => {
  const total = members.length;
  const active = useMemo(() => members.filter(m => m.active).length, [members]);

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Members</h3>
        <p className="text-sm text-gray-500">{active} active of {total} total</p>
      </div>
      <div className="max-h-80 overflow-auto divide-y divide-gray-100">
        {members.map(m => <MemberRow key={m.id} member={m} />)}
      </div>
    </section>
  );
};

export default MemberPanel;
