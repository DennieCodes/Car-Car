import React, {useState, useEffect} from 'react'

function AddModel() {
  const [ manufacturers, setManufacturers ] = useState("");

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

    try {
      const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel);

      setName("");
      setPictureUrl("");
      setManufacturer("");
    }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h1 className="mb-3">Create a Vehicle Model</h1>
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
            name="pictureUrl"
            id="pictureUrl"
          />
          <label htmlFor="pictureUrl">Picture URL</label>
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
            <option value="">Choose an automobile</option>
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