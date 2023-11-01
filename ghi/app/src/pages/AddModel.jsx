import React, {useState, useEffect} from 'react'

function AddModel() {
  const [ manufacturers, setManufacturers ] = useState("");
  const [ message, setMessage ] = useState("")
  const [ name, setName ] = useState("");
  const [ pictureUrl, setPictureUrl ] = useState("");
  const [ manufacturer, setManufacturer ] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePictureUrl = (e) => setPictureUrl(e.target.value);
  const handleChangeManufacturer = (e) => setManufacturer(e.target.value);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
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
    data.name = name;
    data.picture_url = pictureUrl;
    data.manufacturer_id = manufacturer;

    const url = "http://localhost:8100/api/models/";
    const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel);

      setName("");
      setPictureUrl("");
      setManufacturer("");
      setMessage("Success, you just created a car model")
      
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h3>Create a Vehicle Model</h3>
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
        <div className="form-floating mb-2">
          <input
            onChange={handleChangePictureUrl}
            value={pictureUrl}
            className="form-control"
            required
            type="text"
            pictureUrl="pictureUrl"
            id="pictureUrl"
          />
          <label htmlFor="name">Picture Url</label>
        </div>

        <div className='mb-3'>
          <select
            value={manufacturer}
            required
            id="manufacturer"
            name="manufacturer"
            className="form-select"
            onChange={handleChangeManufacturer}
          >
            <option value="">Choose an manufacturer</option>
          
            {manufacturers &&
              manufacturers.map((company) => {
                return (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                );
              })
            }
          </select>
        </div>

        <button className='mt-3 btn btn-primary'>Add Car Model</button>
      </form>
    </div>
  )
}

export default AddModel