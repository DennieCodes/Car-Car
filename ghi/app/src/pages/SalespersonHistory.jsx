import React, {useEffect, useState} from 'react'

function SalespersonHistory() {
  const [ salesPeople, setSalespeople] = useState("");
  const [ sales, setSales] = useState("");
  const [ salesPerson, setSalesPerson ] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  const handleChangeSalesPerson = (e) => {setSalesPerson(e.target.value)}

  const fetchData = async() => {
    const salesPersonResponse = await fetch("http://localhost:8090/api/salespeople/");
    const salesResponse = await fetch("http://localhost:8090/api/sales/");

    if (salesPersonResponse.ok) {
      const data = await salesPersonResponse.json();
      setSalespeople(data.salespeople);
    }

    if (salesResponse.ok) {
      const data = await salesResponse.json();
      setSales(data.sales);
    }
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Salesperson History</h1>

      <form id="create-sale-form" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <select
            value={salesPerson}
            required
            id="salesPerson"
            name="salesPerson"
            className="form-select"
            onChange={handleChangeSalesPerson}
          >
            <option value="">Choose a salesperson to view their history</option>
            {salesPeople &&
              salesPeople.map((person) => {
                return (
                  <option key={person.id} value={person.id}>
                    {person.first_name} {person.last_name}
                  </option>
                );
              })
            }
          </select>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales && sales.filter(sale => sale.salesperson.id === parseInt(salesPerson))
          .map((sale) => {
            const { salesperson, customer } = sale;

            return (
              <tr key={sale.id}>
                <td>{salesperson.first_name} {salesperson.last_name}</td>
                <td>{customer.first_name} {customer.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            );
          })}
					</tbody>
				</table>
    </div>
  )
}

export default SalespersonHistory