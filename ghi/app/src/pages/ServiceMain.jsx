import { NavLink } from 'react-router-dom';
import addTechnician from './pics/servicePics/add-technician.webp';
import listTechnicians from './pics/servicePics/list-technicians.webp';
import createAppointment from './pics/servicePics/create-appointment-02.webp';
import listAppointment from './pics/servicePics/list-appointment.webp';
import serviceHistory from './pics/servicePics/service-history--photo-1605152276897-4f618f831968.avif';

import './styles/gallery.css';

function ServiceMain() {
  return (
    <>
			<div className="container">
        <h1 className='mb-3 mt-3'><b>Service Options</b></h1>
        <div className='row'>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addTechnician} className="gallery-images" alt="A technician working on a car"/>
                <NavLink NavLink className="nav-link" to="/addTechnician">Create a Technician</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={listTechnicians} className="gallery-images" alt="Two technicians near a car"/>
                <NavLink className="nav-link" to="/listTechnicians">List all Technicians</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={createAppointment} className="gallery-images" alt="Two technicians near a car"/>
                <NavLink className="nav-link" to="/CreateAppointment">Create a new Appointment</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={listAppointment} className="gallery-images" alt="Two technicians near a car"/>
                <NavLink NavLink className="nav-link" to="/ListServiceAppointments">List of new Service Appointments</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={serviceHistory} className="gallery-images" alt="Two technicians near a car"/>
                <NavLink className="nav-link" to="/ServiceHistory">Service History</NavLink>
              </div>
            </div>
        </div>
			</div>
		</>
  )
}

export default ServiceMain