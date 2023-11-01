import React, {useState} from 'react'

function SalesPersonForm() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ employeeId, setEmployeeId ] = useState("");
  const [ message, setMessage ] = useState("")
  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeLastName = (e) => setLastName(e.target.value);
  const handleChangeEmployeeId = (e) => setEmployeeId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeId;

    const url = "http://localhost:8090/api/salespeople/";
    const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);

      setFirstName("");
      setLastName("");
      setEmployeeId("");
      setMessage("Success, you just created a Sales Person")

    }
  }

  return (
    <div className="row">
    <div className="offset-3 col-6">
    <div className="shadow p-4 mt-4">
			<h3 className="mb-2">Add a Salesperson</h3>
      {message && <div className="alert alert-success mt-3">{message}</div>}
      <form id="create-salesperson-form" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            onChange={handleChangeFirstName}
            value={firstName}
            className="form-control"
            required
            type="text"
            name="firstName"
            id="firstName"
          />
          <label htmlFor="firstName">First Name</label>
        </div>

        <div className="form-floating mb-2">
          <input
            onChange={handleChangeLastName}
            value={lastName}
            className="form-control"
            required
            type="text"
            name="lastName"
            id="lastName"
          />
          <label htmlFor="lastName">Last Name</label>
        </div>

        <div className="form-floating mb-2">
          <input
            onChange={handleChangeEmployeeId}
            value={employeeId}
            className="form-control"
            required
            type="text"
            name="employeeId"
            id="employeeId"
          />
          <label htmlFor="employeeId">Employee Id</label>
        </div>

        <button className='mt-3 btn btn-primary'>Add Salesperson</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default SalesPersonForm