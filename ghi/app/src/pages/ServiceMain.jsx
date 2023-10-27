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
              <NavLink className="nav-link" to="/addTechnician">CREATE A NEW TECHNICIAN</NavLink>
              <NavLink className="nav-link" to="/listTechnicians">LIST ALL TECHNICIANS</NavLink>
              <NavLink className="nav-link" to="/CreateAppointment">CREATE A NEW APPOINTMENT</NavLink>
              <NavLink className="nav-link" to="/ListServiceAppointments">LIST OF NEW SERVICE APPOINTMENTS</NavLink>
              <NavLink className="nav-link" to="/ServiceHistory">SERVICE HISTORY</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default ServiceMain