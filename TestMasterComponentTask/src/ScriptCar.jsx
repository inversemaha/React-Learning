import CarList from "./CarList";
import Header from "./Header";
import Search from "./Search";

import { useState } from "react";

function ScriptCar() {
  const CarsData = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search
        searchTerm={searchTerm}
        onSearchCar={setSearchTerm}
        showPremiumOnly={showPremiumOnly}
        onShowPremiumOnly={setShowPremiumOnly}
      />
      <CarList
        searchTerm={searchTerm}
        cars={CarsData}
        showPremiumOnly={showPremiumOnly}
      />
    </div>
  );
}

export default ScriptCar;
