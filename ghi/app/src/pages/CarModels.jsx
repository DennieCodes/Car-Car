import React, { useState, useEffect } from 'react';

function CarModels() {
  const [ carModels, setCarModels ] = useState("")

  const fetchData = async() => {
    const response = await fetch("http://localhost:8100/api/manufacturers/");

    if (response.ok) {
      const data = await response.json();

      setCarModels(data.manufacturers);
    }
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mt-4">Manufacturers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {carModels && carModels.map((company) => {
            return (
              <tr key={company.id}>
                <td>{company.name}</td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default CarModels