import React, { useState, useEffect } from 'react';

function Customers() {
  const [customers, setCustomers] = useState("");

  const handleDeleteCustomer = async (e) => {
    const deleteUrl = `http://localhost:8090/api/customers/${e.target.value}/`;

    const fetchConfig = {
			method: 'delete',
		};

    const response = await fetch(deleteUrl, fetchConfig);

    if (response.ok) {
			fetchData();
		}

  }

  const fetchData = async() => {
    const response = await fetch("http://localhost:8090/api/customers/");

    if (response.ok) {
      const data = await response.json();

      setCustomers(data.customers);
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.phone_number}</td>
                <td>{person.address}</td>
                <td>
                  <button
                    value={person.id}
                    className="btn btn-danger"
                    onClick={handleDeleteCustomer}>
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

export default Customers