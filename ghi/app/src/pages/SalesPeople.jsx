import React, { useState, useEffect } from 'react';


function SalesPeople() {
  const [salesPeople, setSalesPeople] = useState("");

  const handleDeleteSalesperson = async (e) => {
    const deleteUrl = `http://localhost:8090/api/salespeople/${e.target.value}/`;

    const fetchConfig = {
			method: 'delete',
		};

    const response = await fetch(deleteUrl, fetchConfig);

    if (response.ok) {
			fetchData();
		}

  }

  const fetchData = async() => {
    const response = await fetch("http://localhost:8090/api/salespeople/");

    if (response.ok) {
      const data = await response.json();

      setSalesPeople(data.salespeople);
    }
  }

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {salesPeople && salesPeople.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.employee_id}</td>
                <td>
                  <button
                    value={person.id}
                    className="btn btn-danger"
                    onClick={handleDeleteSalesperson}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default SalesPeople