import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListServiceAppointments = () => {
	const [appointments, setAppointments] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/api/appointments/')
			.then((response) => response.json())
			.then((data) => {
				setAppointments(data.appointments);
			})
			.catch((e) => console.error('error: ', e));
	}, []);

	const handleSubmitCancel = async (e) => {
		const id = e.target.value;
		const url = `http://localhost:8080/api/appointments/${id}/cancel/`;
		const fetchConfig = {
			method: 'PUT',
		};

		const response = await fetch(url, fetchConfig);
		if (response.ok) {
			updateService(id, 'canceled');
		}
	};

	const updateService = (id, status) => {
		const updatedAppointments = appointments.map((ele) => {
			if (String(ele.id) === id) {
				ele.status = status;
			}

			return ele;
		});

		setAppointments(updatedAppointments);
	};

	const handleSubmitFinish = async (e) => {
		const id = e.target.value;
		const url = `http://localhost:8080/api/appointments/${id}/finish/`;
		const fetchConfig = {
			method: 'PUT',
		};

		const response = await fetch(url, fetchConfig);
		if (response.ok) {
			updateService(id, 'finished');
		}
	};

	return (
		<div>
			<h1 className="large-heading-dark mb-20">
				List of Upcoming Service Appointments
			</h1>
			<br></br>
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
				<tbody>
					{appointments
						.filter((ele) => ele.status === '')
						.map((service) => {
							const { technician, date_time } = service;
							const dateTime = new Date(date_time);
							const date = dateTime.toISOString().split('T')[0];
							const time = dateTime.toTimeString().split(' ')[0];

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
									<td>
										<button
											className=" btn-danger buttons"
											value={service.id}
											onClick={handleSubmitCancel}
										>
											Canceled
										</button>
										<button
											className=" btn-primary buttons"
											value={service.id}
											onClick={handleSubmitFinish}
										>
											Finished
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>

			<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
				<Link
					to="/CreateAppointment/"
					className="btn btn-primary buttons btn-med px-4 gap-3"
				>
					Create Service Appointment
				</Link>
			</div>
		</div>
	);
};

export default ListServiceAppointments;
