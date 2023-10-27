import React, {useEffect, useState} from 'react'


const ListServiceAppointments =() =>{
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/appointments/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
                <th>VIP treatment </th>
                <th>Date</th>
                <th>Time</th>
                <th>Service Reason</th>
                <th>Technician</th>
                <th>Status</th>
             </tr>
            </thead> 
             <tbody className='text-white'>
              { appointments.map(service => {
                const {technician, date_time} = service;
                console.log(date_time)
                let date =
                let time =
                return (

                  <tr key={service.id}>
                    <td>{service.vin}</td>
                    <td>{service.customer}</td>
                    <td>{service.dealership_purchase && (<div>Yes</div>)}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{service.reason}</td>
                    <td>{technician.first_name} {technician.last_name}</td>
                  
                   
                  </tr>
                );
              })}
            </tbody> 
        </table>
   
    </div>
)
}
export default ListServiceAppointments