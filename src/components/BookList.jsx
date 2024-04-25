import React, { useState } from 'react';

const BookList = ({ books, onDelete, onEdit }) => {
  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  const handleEditClick = (book) => {
    setEditingBookId(book.id);
    setEditedBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBookId(null);
    setEditedBook({});
  };

  const handleUpdateClick = () => {
    onEdit(editedBook); // Pass the edited book data to the parent component
    setEditingBookId(null);
    setEditedBook({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {editingBookId === book.id ? (
            <span>
              <input type="text" name="title" value={editedBook.title} onChange={handleChange} />
              <input type="text" name="author" value={editedBook.author} onChange={handleChange} />
              <input type="text" name="isbn" value={editedBook.isbn} onChange={handleChange} />
              <input type="text" name="publicationDate" value={editedBook.publicationDate} onChange={handleChange} />
              <button onClick={handleCancelEdit}>Cancel</button>
              <button onClick={handleUpdateClick}>Update</button>
            </span>
          ) : (
            <span>
              {book.title} by {book.author} - {book.isbn} - {book.publicationDate}
              <button onClick={() => handleEditClick(book)}>Edit</button>
              <button onClick={() => onDelete(book.id)}>Delete</button>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BookList;