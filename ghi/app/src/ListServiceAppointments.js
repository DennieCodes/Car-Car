import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const ListServiceAppointments =() =>{
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/appointments/')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setAppointments(data.appointments)
           
            })
            .catch(e => console.error('error: ', e));
    }, [])


return(
     <div>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Vin</th>
                <th>Customer Name</th>
                <th>is VIP? </th>
                <th>Date</th>
                <th>Time</th>
                <th>Service Reason</th>
                <th>Technician</th>
                <th></th>
             </tr>
            </thead> 
             <tbody className='text-white'>
              { appointments.map(service => {
                const {technician, date_time} = service;
                console.log(date_time)
                let date = ""
                let time = ""
              

                return (

                  <tr key={service.id}>
                    <td>{service.vin}</td>
                    <td>{service.customer}</td>
                    <td>{service.dealership_purchase && (<div>VIP</div>)}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{service.reason}</td>
                    <td>{technician.first_name} {technician.last_name}</td>
                    <td><button className=" btn-danger buttons ">Canceled</button><button  className=" btn-success buttons">Finished</button></td>
                  
                   
                  </tr>
                );
              })}
            </tbody> 
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/CreateAppointment/" className="btn btn-dark buttons btn-med px-4 gap-3">Create Service Appointment</Link>
        </div>

    </div>
)
}
export default ListServiceAppointments