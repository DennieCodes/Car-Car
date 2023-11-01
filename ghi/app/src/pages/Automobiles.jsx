import React, { useState, useEffect } from 'react';

function Automobiles() {
  const [ automobiles, setAutomobiles ] = useState("");
  const fetchData = async() => {
    const response = await fetch("http://localhost:8100/api/automobiles/");

    if (response.ok) {
      const data = await response.json();

      setAutomobiles(data.autos);
  
    }
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div className="shadow p-4 mt-4">
      <h1 className="mb-3">Automobile List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {automobiles && automobiles.map((car) => {
            const { model } = car;
            const { manufacturer } = model;

            return (
              <tr key={car.id}>
                <td>{car.vin}</td>
                <td>{car.color}</td>
                <td>{car.year}</td>
                <td>{model.name}</td>
                <td>{manufacturer.name}</td>
                <td>{car.sold === true ? ("Yes") : ("No")}</td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default Automobiles