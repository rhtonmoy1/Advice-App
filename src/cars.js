import React, { useState, useEffect } from "react";

export default function Cars() {
  const [carData, setCarData] = useState(null);
  const [carId, setCarId] = useState(1);

  async function fetchCars() {
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/cars/${carId}`);
      const data = await response.json();
      setCarData(data);
    } catch (error) {
      console.error("Failed to fetch car details: ", error);
    }
  }

  useEffect(() => {
    fetchCars();
  },); 
  
  const handleNextCar = () => {
    setCarId(carId + 1); 
  };

  const handlePreviousCar = () => {
    setCarId(carId - 1); 
  };

  return (
    <div>
        <button onClick={handlePreviousCar}>Get Previous Car</button>
      <button onClick={handleNextCar}>Get Next Car</button>
      <h1>Car Details</h1>
      {carData && (
        <div>
          <h2>Make: {carData.make}</h2>
          <p>Model: {carData.model}</p>
          <p>Year: {carData.year}</p>
          <img
            src={carData.image}
            alt={`${carData.make} ${carData.model}`}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      )}
    </div>
  );
}
