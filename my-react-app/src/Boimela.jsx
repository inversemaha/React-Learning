import Header from "./header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { useState } from "react";

const BooksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: true,
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    featured: true,
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    featured: false,
  },
  {
    id: 5,
    title: "The lost world",
    author: "Arthur Conan Doyle",
    featured: false,
  },
];

function Boimela() {
  const [books, setBooks] = useState(BooksData);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFeatured = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, featured: !book.featured } : book
      )
    );
  };

  return (
    <div className="mx-auto p-4">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList
        searchTerm={searchTerm}
        books={books}
        onFeatureBook={toggleFeatured}
      />
    </div>
  );
}

export default Boimela;
