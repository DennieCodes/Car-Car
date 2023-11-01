import React, { useState, useEffect } from 'react';



function ListTechnicians() {

    const [technicians, setTechnicians] = useState('')

    const handleDeleteTechnician = async (e) => {
		const deleteTechnicianUrl = `http://localhost:8080/api/technicians/${e.target.value}/`
        const fetchConfig = {
			method: 'delete',
		};
        const response = await fetch(deleteTechnicianUrl, fetchConfig);

		if (response.ok) {
			fetchData();
		}
	};

    const fetchData = async () => {
		const response = await fetch('http://localhost:8080/api/technicians');

		if (response.ok) {
			const data = await response.json();
    
			setTechnicians(data.technicians);
  
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

    return (
		<div>
            <h1 className= "mb-3">List all Technicians</h1>
        
            <table className="table table-striped">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Employee ID</th>
						</tr>
					</thead>

                <tbody>
                    {
                        technicians && technicians.map((tech) => {
                            return (
                                <tr key={tech.id}>
                                    <td>{tech.first_name}</td>
                                    <td>{tech.last_name}</td>
                                    <td>{tech.employee_id}</td>
                                    <td>
                                        <button
                                            value={tech.id}
                                            className="btn btn-danger"
                                            onClick={handleDeleteTechnician}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody> 
            </table>

        </div>
	);
}










export default ListTechnicians