import PropTypes from "prop-types";

function CarDetails({ car }) {
  return (
    <div>
      <p>Brand: {car.brand}</p>
      <p>Year: {car.year}</p>
      <p>Price: {car.price}</p>
      <p>Premium: {car.isPremium ? "Yes" : "No"}</p>
    </div>
  );
}
CarDetails.propTypes = {
  car: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CarDetails;
