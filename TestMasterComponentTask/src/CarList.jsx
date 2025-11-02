import PropTypes from "prop-types";
import CarRow from "./CarRow";

function CarList({ searchTerm, cars, showPremiumOnly }) {
  const rows = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    if (showPremiumOnly && !car.isPremium) {
      return;
    }
    rows.push(
      <div
        key={car.id}
        className="bg-white shadow rounded-lg p-4 border hover:shadow-lg transition-shadow"
      >
        <CarRow car={car} />
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-4">{rows}</div>;
}
CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
  showPremiumOnly: PropTypes.bool.isRequired,
};

export default CarList;
