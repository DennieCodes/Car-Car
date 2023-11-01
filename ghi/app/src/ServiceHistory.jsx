import React from 'react';
import { useEffect, useState } from 'react';

function ServiceHistory() {
	const [service_appointments, setService_Appointments] = useState([]);
	const [fullAppointments, setFullAppointments] = useState('');
	const [vin, setVin] = useState('');

	const handleVinChange = (e) => setVin(e.target.value);
	const [vinList, setVinList] = useState();

	const handleSubmit = (e) => e.preventDefault();

	const fetchData = async () => {
		const url = 'http://localhost:8100/api/automobiles/';
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				const vins = data.autos.map((car) => car.vin);
				setVinList(vins);
			}
		} catch (e) {
			console.error(e);
		}
	};

	const fetchAppointments = async () => {
		const url = 'http://localhost:8080/api/appointments/';
		try {
			const response = await fetch(url);

			if (response.ok) {
				const data = await response.json();
				let { appointments } = data;

				if (!fullAppointments) {
					setFullAppointments(appointments);
				}

				if (vin) {
					appointments = appointments.filter((ele) => ele.vin === vin);
				}
				setService_Appointments(appointments);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmitClear = () => {
		setVin('');
		setService_Appointments(fullAppointments);
	};

	const handleSubmitSearch = () => {
		fetchAppointments();
	};

	useEffect(() => {
		fetchData();
		fetchAppointments();
	}, []);

	return (
		<div>
			 <h1 className= "mb-3">Search for Appointment by VIN</h1>
			<form onSubmit={handleSubmit}>
				<select
					value={vin}
					id="vin"
					name="vin"
					className="form-select w-50"
					onChange={handleVinChange}
				>
					<option value="">Search by Vin</option>
					{vinList &&
						vinList.map((item) => {
							return (
								<option key={item} value={item}>
									{item}
								</option>
							);
						})}
				</select>
				<div>
				<button
					onClick={handleSubmitSearch}
					className="btn btn-primary buttons mx-3 my-3"
				>
					Search
				</button>
				<button onClick={handleSubmitClear} className="btn btn-primary buttons">
					Clear Search
				</button>
			</div>
			</form>
			<h1 className='mb-3'>Service History</h1>
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
					{service_appointments &&
						service_appointments
							// .filter(service => service.vin === vin)
							.map((service) => {
								const { technician, date_time } = service;

								const dateTime = new Date(date_time);

								const date = dateTime.toISOString().split('T')[0]; // Extracts '2023-11-02'
								const time = dateTime.toTimeString().split(' ')[0]; // Extracts '10:40:00'
								return (
									<tr key={service.id}>
										<td>{service.vin}</td>
										<td>{service.customer}</td>
										<td>{service.dealership_purchase ? 'Yes' : 'No'}</td>
										<td>{date}</td>
										<td>{time}</td>
										<td>{service.reason}</td>
										<td>
											{technician.first_name} {technician.last_name}
										</td>
										<td>{service.status}</td>
									</tr>
								);
							})}
				</tbody>
			</table>
		</div>
	);
}
export default ServiceHistory;
