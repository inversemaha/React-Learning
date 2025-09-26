import CarList from "./CarList";
import Header from "./Header";
import Search from "./Search";

function ScriptCar() {
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search />
      <CarList />
    </div>
  );
}

export default ScriptCar;
