import React, { useState } from 'react';
import { X, CalendarCheck, User, BookMarked } from 'lucide-react';

const Overlay = ({ children, onClose }) => (
  <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center">
    <div className="absolute inset-0 bg-black/40" onClick={onClose} />
    <div className="relative w-full sm:w-[520px] bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6">
      {children}
    </div>
  </div>
);

const BorrowDialog = ({ open, onClose, book, members, onConfirm }) => {
  const [memberId, setMemberId] = useState('');
  const [due, setDue] = useState('');

  if (!open || !book) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!memberId || !due) return;
    onConfirm({ bookId: book.id, memberId, due });
    setMemberId('');
    setDue('');
    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Borrow Book</h3>
          <p className="text-sm text-gray-500">{book.title} by {book.author}</p>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
          <X size={18} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Member</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select member</option>
              {members.map(m => (
                <option key={m.id} value={m.id}>{m.name} (ID: {m.id})</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due date</label>
          <div className="relative">
            <CalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
          <BookMarked size={18} />
          Confirm Borrow
        </button>
      </form>
    </Overlay>
  );
};

export default BorrowDialog;
