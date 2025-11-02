import PropTypes from "prop-types";
import CarRow from "./CarRow";

function CarList({ searchTerm, cars }) {
  const rows = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<CarRow key={car.id} car={car} />);
  });
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4 border hover:shadow-lg transition-shadow">
        {rows}
      </div>
    </div>
  );
}
CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};

export default CarList;
