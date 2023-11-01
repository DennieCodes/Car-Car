import React, {useState} from 'react'

function Customer() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");

  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeLastName = (e) => setLastName(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.phone_number = phoneNumber;
    data.address = address;

    const url = "http://localhost:8090/api/customers/";
    const fetchConfig = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setAddress("");
    }
  }

  return (
    <div className="shadow p-4 mt-4">
			<h1 className="mb-3">Add a Customer</h1>
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
            onChange={handleChangeAddress}
            value={address}
            className="form-control"
            required
            type="text"
            name="address"
            id="address"
          />
          <label htmlFor="address">Address</label>
        </div>

        <div className="form-floating mb-2">
          <input
            onChange={handleChangePhoneNumber}
            value={phoneNumber}
            className="form-control"
            required
            type="text"
            name="phoneNumber"
            id="phoneNumber"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        <button className='mt-3 btn btn-primary'>Add a Customer</button>
      </form>
    </div>
  )
}

export default Customer