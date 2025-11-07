import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import BookList from './components/BookList';
import MemberPanel from './components/MemberPanel';
import BorrowDialog from './components/BorrowDialog';
import Hero from './components/Hero';
import LandingFeatures from './components/LandingFeatures';
import Footer from './components/Footer';

const initialBooks = [
  { id: 'B-1001', title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', isbn: '978-0201616224', available: true },
  { id: 'B-1002', title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', available: false },
  { id: 'B-1003', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', isbn: '978-1449373320', available: true },
  { id: 'B-1004', title: 'Atomic Habits', author: 'James Clear', isbn: '978-0735211292', available: true },
];

const initialMembers = [
  { id: 'M-001', name: 'Ava Martinez', email: 'ava@example.com', phone: '555-0134', active: true },
  { id: 'M-002', name: 'Liam Johnson', email: 'liam@example.com', phone: '555-0187', active: true },
  { id: 'M-003', name: 'Noah Kim', email: 'noah@example.com', phone: '555-0222', active: false },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [members] = useState(initialMembers);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [openBorrow, setOpenBorrow] = useState(false);

  const stats = useMemo(() => ({
    totalBooks: books.length,
    totalMembers: members.length,
    borrowed: books.filter(b => !b.available).length,
  }), [books, members]);

  const handleSelectBook = (book) => {
    setSelected(book);
    setOpenBorrow(true);
  };

  const handleConfirmBorrow = ({ bookId, memberId, due }) => {
    setBooks(prev => prev.map(b => b.id === bookId ? { ...b, available: false, borrowedBy: memberId, due } : b));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Landing / Hero */}
      <Hero />
      <LandingFeatures />

      {/* App Section */}
      <section id="app" className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-emerald-50 py-12 sm:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-300 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-300 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <StatsOverview totalBooks={stats.totalBooks} totalMembers={stats.totalMembers} borrowedBooks={stats.borrowed} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Books</h2>
                <p className="text-sm text-gray-500">Click a book to start a borrow</p>
              </div>
              <BookList books={books} query={query} setQuery={setQuery} onSelect={handleSelectBook} />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Community</h2>
              <MemberPanel members={members} />
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <p className="font-medium">Tip</p>
                <p className="text-sm opacity-90">Use the search to quickly locate titles by author or ISBN.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BorrowDialog
        open={openBorrow}
        onClose={() => setOpenBorrow(false)}
        book={selected}
        members={members}
        onConfirm={handleConfirmBorrow}
      />
    </div>
  );
}

export default App;
