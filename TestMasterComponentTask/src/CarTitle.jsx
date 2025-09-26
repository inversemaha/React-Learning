import PropTypes from "prop-types";

function CarTitle({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
CarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CarTitle;
