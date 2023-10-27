import React, {useEffect, useState} from 'react'

function SalesForm() {
  const [automobiles, setAutomobiles] = useState("");
  const [salesPersons, setSalesPersons] = useState("");
  const [customers, setCustomers] = useState("");

  const [price, setPrice] = useState(0);
  const [automobile, setAutomobile] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [customer, setCustomer] = useState("");

  const handleChangePrice = (e) => setPrice(e.target.value);
  const handleChangeAutomobile = (e) => setAutomobile(e.target.value);
  const handleChangeSalesperson = (e) => setSalesperson(e.target.value);
  const handleChangeCustomer = (e) => setCustomer(e.target.value);

  // Fetchdata loads foreign field data into the form's select boxes
  const fetchData = async () => {
    const autoUrl = "http://localhost:8100/api/automobiles/";
    const salespersonUrl = "http://localhost:8090/api/salespeople/";
    const customerUrl = "http://localhost:8090/api/customers/";

    try {
      const autoResponse = await fetch(autoUrl);
      const salespersonResponse = await fetch(salespersonUrl);
      const customerResponse = await fetch(customerUrl);

      if (autoResponse.ok) {
        const data = await autoResponse.json();
        setAutomobiles(data.autos);
      }

      if (salespersonResponse.ok) {
        const data = await salespersonResponse.json();
        setSalesPersons(data.salespeople);
      }

      if (customerResponse.ok) {
        const data = await customerResponse.json();
        setCustomers(data.customers);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.price = price;
    data.automobile = automobile;
    data.salesperson = salesperson;
    data.customer = customer;

    const saleUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(saleUrl, fetchConfig);

    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);

      const url = `http://localhost:8100/api/automobiles/${automobile}/`;
      const data = {};
      data.sold = true;

      const fetchConfig = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
		  };

      const updateAutoResponse = await fetch(url, fetchConfig);

      if (updateAutoResponse.ok) {
        const autoResponse = await updateAutoResponse.json();
        console.log(autoResponse);
      }

      setPrice(0);
      setAutomobile("");
      setSalesperson("");
      setCustomer("");
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h3>Add a Sale</h3>
      <form id="create-sale-form" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            onChange={handleChangePrice}
            value={price}
            className="form-control"
            required
            type="number"
            name="price"
            id="price"
          />
          <label htmlFor="price">Price</label>
        </div>

        <div className='mb-3'>
          <select
            value={automobile}
            required
            id="automobile"
            name="automobile"
            className="form-select"
            onChange={handleChangeAutomobile}
          >
            <option value="">Choose an automobile</option>
            {automobiles &&
              automobiles.map((auto) => {
                return (
                  <option key={auto.vin} value={auto.vin}>
                    {auto.model.manufacturer.name} {auto.model.name}
                  </option>
                );
              })
            }
          </select>
        </div>

        <div className='mb-3'>
          <select
            value={salesperson}
            required
            id="salesperson"
            name="salesperson"
            className="form-select"
            onChange={handleChangeSalesperson}
          >
            <option value="">Choose a salesperson</option>
            {salesPersons &&
              salesPersons.map((person) => {
                return (
                  <option key={person.employee_id} value={person.employee_id}>
                    {person.first_name} {person.last_name}
                  </option>
                );
              })
            }
          </select>
        </div>

        <div className='mb-3'>
          <select
            value={customer}
            required
            id="customer"
            name="customer"
            className="form-select"
            onChange={handleChangeCustomer}
          >
            <option value="">Choose a customer</option>
            {customers &&
              customers.map((customer) => {
                return (
                  <option key={customer.id} value={customer.id}>
                    {customer.first_name} {customer.last_name}
                  </option>
                );
              })
            }
          </select>
        </div>
        <button className='btn btn-primary'>Add Sale</button>
      </form>
    </div>
  )
}

export default SalesForm