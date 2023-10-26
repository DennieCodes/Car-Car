import React, { useState, useEffect } from 'react';

function ManufacturerList() {
  const [ manufacturers, setManufacturer ] = useState("")

  const fetchData = async() => {
    const response = await fetch("http://localhost:8100/api/manufacturers/");

    if (response.ok) {
      const data = await response.json();

      setManufacturer(data.manufacturers);
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
          {manufacturers && manufacturers.map((company) => {
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

export default ManufacturerList