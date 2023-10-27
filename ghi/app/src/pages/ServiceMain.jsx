// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function ServiceMain() {
  return (
    <>
			<div className="container">
        <h2>Service Options</h2>
        <div>
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addTechnician">AddTechnicianForm</NavLink>
              <NavLink className="nav-link" to="/listTechnicians">ListTechnicians</NavLink>
              <NavLink className="nav-link" to="/CreateAppointment">CreateAppointment</NavLink>
              <NavLink className="nav-link" to="/ListServiceAppointments">ListServiceAppointment</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default ServiceMain