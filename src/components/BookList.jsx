import React, { useMemo } from 'react';
import { Search, Book, ChevronRight } from 'lucide-react';

const BookRow = ({ book, onSelect }) => (
  <button
    onClick={() => onSelect(book)}
    className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition border-b border-gray-100"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-md bg-indigo-50 text-indigo-700">
        <Book size={18} />
      </div>
      <div>
        <p className="font-medium text-gray-900">{book.title}</p>
        <p className="text-sm text-gray-500">by {book.author}</p>
      </div>
    </div>
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${book.available ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
        {book.available ? 'Available' : 'Borrowed'}
      </span>
      <ChevronRight size={18} />
    </div>
  </button>
);

const BookList = ({ books, query, setQuery, onSelect }) => {
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      (b.isbn && b.isbn.toLowerCase().includes(q))
    );
  }, [books, query]);

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by title, author, or ISBN"
            className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="divide-y divide-gray-100 max-h-80 overflow-auto">
        {filtered.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No books match your search.</p>
        ) : (
          filtered.map(b => <BookRow key={b.id} book={b} onSelect={onSelect} />)
        )}
      </div>
    </section>
  );
};

export default BookList;
