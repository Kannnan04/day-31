import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    const newBook = { ...book, id: books.length + 1 };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleEditBook = (editedBook) => {
    setBooks(books.map(book => (book.id === editedBook.id ? editedBook : book)));
    setEditingBook(null); // Reset the editingBook state
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <h2>Books</h2>
      <BookForm onSubmit={handleAddBook} initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} />
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
    </div>
  );
};

export default AdminDashboard;