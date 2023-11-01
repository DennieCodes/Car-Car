import React, {useState, useEffect} from 'react'

function AddAutomobile() {
  const [ models, setModels ] = useState("");
  const [ color, setColor ] = useState("");
  const [ year, setYear ] = useState("");
  const [ vin, setVin ] = useState("");
  const [ model, setModel ] = useState("");

  const handleChangeColor = (e) => setColor(e.target.value);
  const handleChangeYear = (e) => setYear(e.target.value);
  const handleChangeVin = (e) => setVin(e.target.value);
  const handleChangeModel = (e) => setModel(e.target.value);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model;

    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);

      setColor("");
      setYear("");
      setVin("");
      setModel("");
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h1 className="mb-3">Add an automobile to inventory</h1>
      <form id="create-salesperson-form" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            onChange={handleChangeColor}
            value={color}
            className="form-control"
            required
            type="text"
            name="color"
            id="color"
          />
          <label htmlFor="color">Color</label>
        </div>

        <div className="form-floating mb-2">
          <input
            onChange={handleChangeYear}
            value={year}
            className="form-control"
            required
            type="number"
            name="year"
            id="year"
          />
          <label htmlFor="year">Year</label>
        </div>

        <div className="form-floating mb-2">
          <input
            onChange={handleChangeVin}
            value={vin}
            className="form-control"
            required
            type="text"
            name="vin"
            id="vin"
          />
          <label htmlFor="vin">Vin</label>
        </div>

        <div className='mb-3'>
          <select
            value={model}
            required
            id="model"
            name="model"
            className="form-select"
            onChange={handleChangeModel}
          >
            <option value="">Choose a model</option>
            {models &&
              models.map((car) => {
                return (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                );
              })
            }
          </select>
        </div>



        <button className='mt-3 btn btn-primary'>Create car model</button>
      </form>
    </div>
  )
}

export default AddAutomobile