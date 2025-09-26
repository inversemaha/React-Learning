import PropTypes from "prop-types";

function CarDetails({ carData }) {
  return (
    <div>
      <p>Brand: {carData.brand}</p>
      <p>Year: {carData.year}</p>
      <p>Price: {carData.price}</p>
      <p>Premium: {carData.isPremium ? "Yes" : "No"}</p>
    </div>
  );
}
CarDetails.proptypes = {
  carData: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CarDetails;
