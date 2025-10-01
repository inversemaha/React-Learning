import BookDetails from "./BookDetails";
import FeatureBooks from "./FeatureBooks";
import PropTypes from "prop-types";

function BookRow({ book, onFeatureBook }) {
  console.log(book);
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBooks book={book} onFeatureBook={onFeatureBook} />
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default BookRow;
