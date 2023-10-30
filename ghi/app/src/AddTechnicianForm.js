import React, { useState} from 'react'
import './index.css'

function AddTechnicianForm() {

const [values, setValues] = useState({
    first_name: '',
    lastName: '',
    employee_id: "",
})


const [submitted, setSubmitted] = useState(false)
const [valid, setValid] = useState(false)

const handlefirstNameChange = (event) => {
    setValues({...values, first_name: event.target.value})
}
const handleLastNameChange = (event) => {
  setValues({...values, last_name: event.target.value})
}
const handleEmployeeChange = (event) => {
    setValues({...values, employee_id: event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    if(values.first_name && values.last_name && values.employee_id) {
    setValid(true)
    }
    const Technician = {
        'first_name': values.first_name,
        'last_name':values.last_name,
        'employee_id': values.employee_id,
        
    }

    const TechnicianUrl = 'http://localhost:8080/api/technicians/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(Technician),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetch(TechnicianUrl, fetchConfig)
        .then(response => response.json())
        .then(() => {
          setValues({
            first_name: '',
            last_name: '',
            employee_id: '',
        });
        })
        .catch(e => console.log('error:', e))
}

return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4 forms">
          <h1>Create a new Auto Technician</h1>
          <form onSubmit={handleSubmit} id="Add-Technician-form">
            {submitted && valid? <div className="dark-message">Success! Thank you for creating an Auto Technician</div> : null}

            <div className="form-floating mb-3">
              <input
              value={values.firstName}
              onChange={handlefirstNameChange} placeholder="firstName"
              required type="text"
              name="firstName" id="firstName" className="form-control" />
              <label htmlFor="firstName">First Name</label>
              {submitted && !values.first_name ? <span>Please enter your first name</span> : null}
            </div>
            <div className="form-floating mb-3">
              <input
              value={values.last_name}
              onChange={handleLastNameChange} placeholder="lastName"
              required type="text"
              name="LastName" id="lastName" className="form-control" />
              <label htmlFor="lastName">Last Name</label>
              {submitted && !values.lastName ? <span>Please enter your last name</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.employee_id}
              onChange={handleEmployeeChange} placeholder="employee_number"
              required type="number" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">employee number</label>
              {submitted && !values.employee_number ? <span>Please enter an employee number</span> : null}
            </div>
            <button className="btn btn-primary buttons">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
        }
        export default AddTechnicianForm
