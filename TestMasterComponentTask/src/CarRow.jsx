import CarTitle from "./CarTitle";
import CarDetails from "./CarDetails";
import PropsType from "prop-types";

function CarRow({ car }) {
  return (
    <>
      <CarTitle title={car.title} />
      <CarDetails car={car} />
    </>
  );
}
CarRow.propTypes = {
  car: PropsType.shape({
    title: PropsType.string.isRequired,
    brand: PropsType.string.isRequired,
    year: PropsType.number.isRequired,
    price: PropsType.number.isRequired,
    isPremium: PropsType.bool.isRequired,
  }).isRequired,
};

export default CarRow;
