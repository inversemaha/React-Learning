import CarTitle from "./CarTitle";
import CarDetails from "./CarDetails";
import PropsType from "prop-types";

function CarRow({ carData }) {
  return (
    <>
      <CarTitle title={carData.title} />
      <CarDetails carData={carData} />
    </>
  );
}
CarRow.propTypes = {
  carData: PropsType.shape({
    title: PropsType.string.isRequired,
    brand: PropsType.string.isRequired,
    year: PropsType.number.isRequired,
    price: PropsType.number.isRequired,
    isPremium: PropsType.bool.isRequired,
  }).isRequired,
};

export default CarRow;
