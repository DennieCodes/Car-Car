// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function ServiceMain() {
  return (
    <>
			<div className="container">
        <h1><b>Service Options</b></h1>
        <div>
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/addTechnician">Create a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/listTechnicians">List all Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/CreateAppointment">Create a new Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ListServiceAppointments">List of new Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ServiceHistory">Service History</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default ServiceMain