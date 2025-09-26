import BookDetails from "./BookDetails";
import FeatureBooks from "./FeatureBooks";
import PropTypes from "prop-types";

function BookRow({ book }) {
  return (
    <>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBooks />
    </>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired
};


export default BookRow;
