import React, { useState, useEffect } from 'react';
import "../../src/index.css"
function CarModels() {
  const [ carModels, setCarModels ] = useState("")
  
  const fetchData = async() => {
    const response = await fetch("http://localhost:8100/api/models/");

    if (response.ok) {
      const data = await response.json();

      setCarModels(data.models);
   
    }
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div className="shadow p-4 mt-4">
      <h1 className="mt-4 mb-3">Car Models List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {carModels && carModels.map((car) => {
            const { manufacturer } = car
            return (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{manufacturer.name}</td>
                <td><img className="img-fluid img-100" src={car.picture_url} alt={`${manufacturer.name} ${car.name}`}/></td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default CarModels