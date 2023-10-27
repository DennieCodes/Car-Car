import React from 'react';
import {useEffect, useState} from "react"





    function ServiceHistory() {
        const [service_appointments, setService_Appointments] = useState([]);
        const [vin, setVin] = useState("")

        const handleVinChange = (e) => setVin(e.target.value)
        const [vinList, setVinList] = useState()
        
        const fetchData = async() => {
            const url = 'http://localhost:8100/api/automobiles/'
            try{
                const response = await fetch(url)
                if(response.ok){
                    const data = await response.json()
                    const vins = data.autos.map((car)=> car.vin)
                    setVinList(vins)
            console.log(vins)
                }
            } catch(e){
                console.error(e)
            }

        }
        useEffect(() => {
            fetchData()
            fetch('http://localhost:8080/api/appointments/')
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    setService_Appointments(data.appointments);
                })
                .catch(e => console.error('error: ', e));
        }, [])
    
    return(
        <div>
        <form>
            <select value = {vin} id = "vin" name = "vin" className = "form-select" required onChange = {handleVinChange}>
                <option value = "">Search by Vin</option>
                {vinList && vinList.map((item) => {
                        return (
                          <option key={item} value={item}>
                               {item}
                          </option>
                       
         
                        )
                      })}
            </select>
            <button>Search</button>
        </form>
        <table className="table table-striped">
             <thead>
                 <tr>
                 <th>Vin</th>
                 <th>is VIP? </th>
                 <th>Customer Name</th>
                 <th>Date</th>
                 <th>Time</th>
                 <th>Service Reason</th>
                 <th>Technician</th>
                 <th>Status</th>
                 </tr>   
            </thead> 
            <tbody>
                {service_appointments && service_appointments
                .filter(service => service.vin === vin)
                .map(service => {
                   const {technician,date_time} = service;

                   const dateTime = new Date(date_time);

                   const date = dateTime.toISOString().split('T')[0]; // Extracts '2023-11-02'
                   const time = dateTime.toTimeString().split(' ')[0]; // Extracts '10:40:00'
                   return (
   
                    <tr key={service.id}>
                       <td>{service.vin}</td>
                       <td>{service.customer}</td>
                        <td>{service.dealership_purchase ? "Yes" : "No"}</td>
                        <td>{date}</td>
                       <td>{time}</td> 
                       <td>{service.reason}</td>
                       <td>{technician.first_name} {technician.last_name}</td>
                       <td>{service.status}</td>
                    </tr>
                        );
                    })}
            </tbody> 
        </table>

          
          
    </div>
          
      )
    }
 export default ServiceHistory
