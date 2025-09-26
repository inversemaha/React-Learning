import BookRow from "./BookRow";

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

function BookList() {
  return (
    <ul className="space-y-4">
      {
        BooksData.map ((book) => (
          <li key = {book.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <BookRow book={book}/>
          </li>
        ))
      }
    </ul>
  );
}

export default BookList;
