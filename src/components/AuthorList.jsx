import React, { useState } from 'react';

const AuthorList = ({ authors, onDelete, onEdit }) => {
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleEditClick = (author) => {
    setEditingAuthor(author);
    onEdit(author);
  };

  return (
    <ul>
      {authors.map(author => (
        <li key={author.id}>
          {editingAuthor === author ? (
            <span>
              <input type="text" value={author.name} />
              <input type="text" value={author.birthDate} />
              <input type="text" value={author.biography} />
              <button onClick={() => setEditingAuthor(null)}>Cancel</button>
              <button>Save</button>
            </span>
          ) : (
            <span>
              {author.name} - {author.birthDate} - {author.biography}
              <button onClick={() => handleEditClick(author)}>Edit</button>
              <button onClick={() => onDelete(author.id)}>Delete</button>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;