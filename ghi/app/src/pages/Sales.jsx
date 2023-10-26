import React, { useState, useEffect } from 'react';

function Sales() {
  const [ salesPersons, setSalesPersons ] = useState("");

  const fetchData = async () => {
    const response = await fetch("http://localhost:8090/api/sales/");

    if (response.ok) {
      const data = await response.json();

      setSalesPersons(data.sales)
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {salesPersons && salesPersons.map((sale) => {
            const { salesperson, customer } = sale;
            return (
              <tr key={sale.id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name} {salesperson.last_name}</td>
                <td>{customer.first_name} {customer.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default Sales