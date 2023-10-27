import React from 'react';
import {useEffect, useState} from "react"


// const SearchBar = () => {
//     const[searchInput, setSearchInput] = useState('')

//     const handleSearchChange = (event) => {
//         event.preventDefault()
//         setSearchInput(event.target.value)
//     }


    function ServiceHistory() {
        const [service_appointments, setService_Appointments] = useState([]);

        useEffect(() => {
            fetch('http://localhost:8080/api/appointments/')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setService_Appointments(data.service_appointments);
                })
                .catch(e => console.error('error: ', e));
        }, [])

    // if (searchInput.length> 0) {
    //     service_appointments.filter((service) => {
    //     return service.vin.match(searchInput)
    //     })
    
    return(
        <>
        {/* <div class="input-group">
            <div class="form-outline">
                <input id="search-input" type="search" class="form-control" onChange={handleSearchChange}
                     value={searchInput}/>
                <label class="form-label" for="form1">Search</label>
            </div>
        <button id="search-button" type="button" class="btn btn-primary">Search</button>
</div> */}

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
                   <th>Status</th>
                </tr>
               </thead> 
             
               
                 
            
                 
                 {/* <tbody className='text-white'>
                {service_appointments.map(service => {
                   const {technician,} = service;
                   return (
   
                    <tr key={service.id}>
                       <td>{service.vin}</td>
                       <td>{service.customer}</td>
                       <td>{service.dealership_purchase && (<div>VIP</div>)}</td>
                        <td>{date}</td>
                       <td>{time}</td> 
                       <td>{service.reason}</td>
                       <td>{technician.first_name} {technician.last_name}</td>
                    </tr>
                      
                    
                   );
                 })}
               </tbody>  */}
           </table>
          
           </div>
           </>
      )
    }
 export default ServiceHistory
// }
// export default SearchBar