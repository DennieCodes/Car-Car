import React, {useEffect, useState } from 'react'
import ListTechnicians  from './ListTehnichians'

const CreateAppointment = () => {
    const [vin, setVin] = useState('')
    const [customer, setCustomer] = useState('')
    const [date_time, setDate_Time] = useState('')
    const [reason, setReason] = useState('')
    const [tech, setTech] = useState('')
    const [technicians, setTechnicians] = useState([])
  
    useEffect(() => {
        const technicianUrl = 'http://localhost:8080/api/technicians/'
        fetch(technicianUrl)
            .then(response => response.json())

            .then(data => {
              setTechnicians(data.technicians)

            })
            .catch(e => console.error('error: ', e))
    }, [])

      const handleSubmit = async (event) => {
          event.preventDefault()
          const newServiceAppointment = {
            "vin": vin,
            "customer":customer,
            "date_time" : date_time,
            "reason" : reason,
            "technician": tech,
          }
  
        console.log(newServiceAppointment)
 
      const ServiceAppointmentUrl = "http://localhost:8080/api/appointments/"
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(newServiceAppointment),
          headers: {
              'Content-Type': 'application/json',
          },
      };



 await fetch(ServiceAppointmentUrl, fetchConfig)
      .then(response => response.json())
      .then(() => {
          setVin('')
          setCustomer('')
          setDate_Time('')
          setReason('')
          setTech('')
      })
      .catch(e => console.log('error: ', e));
}

const handleVinChange = (event) => {
    const value = event.target.value
    setVin(value)
}
const handleCustomerChange = (event) => {
    const value = event.target.value
    setCustomer(value)
}
const handleDate_TimeChange = (event) => {
    const value = event.target.value
    setDate_Time(value)
}

const handleReasonChange = (event) => {
    const value = event.target.value
    setReason(value)
}
const handleTechChange = (event) => {
    const value = event.target.value
    setTech(value)
}
      return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4 forms">
                <h1 className='large-heading-dark'>Create Service Appointment</h1>
                <form onSubmit={handleSubmit} id="create-Appointment-form">
  
  
                  <div className="form-floating mb-3">
                    <input
                    value={vin}
                    onChange={handleVinChange} placeholder="Vin"
                    required type="text"
                    name="Vin" id="Vin" className="form-control" />
                    <label htmlFor="Vin">Vin</label>
                  </div>
  
                  <div className="form-floating mb-3">
                    <input
                    value={customer}
                    onChange={handleCustomerChange} placeholder="customer"
                    required type="text"
                    name="customer" id="customer" className="form-control" />
                    <label htmlFor="customer">Customer Name</label>
                  </div>
  
                  <div className="form-floating mb-3">
                    <input
                    required type="datetime-local"
                    value={date_time}
                    onChange={handleDate_TimeChange} placeholder="date_time"
                    name="date_time" id="date_time" className="form-control" />
                    <label htmlFor='date_time'>Date and Time</label>
                  </div>
  
                  <div className="form-floating mb-3">
                    <input
                    value={reason}
                    onChange={handleReasonChange} placeholder="reason"
                    required type="text"
                    name="reason" id="reason" className="form-control" />
                    <label htmlFor="reason">Service reason</label>
                  </div>
                  <div className="mb-3">
                  <select value={tech} onChange={handleTechChange} required name="technician" className="form-select">         
                    <option value="">Choose a technician</option>
                    {technicians && technicians.map((item) => {
                      return (
                        <option key={item.employee_id} value={item.employee_id}>
                              {item.first_name}
                        </option>
                        )
                    })}
                  </select>
                  </div>
                <button className="btn btn-primary buttons">Create</button>
            </form> 
          </div>
        </div>
      </div>
    );
  





}

export default CreateAppointment