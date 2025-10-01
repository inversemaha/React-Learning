import PropTypes from "prop-types";
import { Star } from "lucide-react";

function FeatureBooks({ book, onFeatureBook }) {
  return (
    <button onClick={() => onFeatureBook(book.id)}>
      <Star color={book.featured ? "gold" : "gray"} />
    </button>
  );
}
FeatureBooks.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default FeatureBooks;
