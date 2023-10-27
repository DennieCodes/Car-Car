import React, {useState} from 'react'

function AddManufacturer() {
  const [ name, setName ] = useState("");

  const handleChangeName = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = name;

    const url = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newManufacturer = await response.json();
      console.log(newManufacturer);

      setName("");
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h3>Add a Manufacturer</h3>
      <form id="create-salesperson-form" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            onChange={handleChangeName}
            value={name}
            className="form-control"
            required
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="name">Name</label>
        </div>

        <button className='mt-3 btn btn-primary'>Add Manufacturer</button>
      </form>
    </div>
  )
}

export default AddManufacturer