import React, {useState} from 'react'

function AddManufacturer() {
  const [ name, setName ] = useState("");
  const [message, setMessage] = useState("")
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
      setMessage("Success! you created a manufacturer")
    }
  }

  return (
    <div className="row">
    <div className="offset-3 col-6">
    <div className="shadow p-4 mt-4">
			<h1>Add a Manufacturer</h1>
      {message && <div className="alert alert-success mt-3">{message}</div>} 
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
    </div>
    </div>
  )
}

export default AddManufacturer