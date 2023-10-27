import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesMain from './pages/SalesMain';
import SalesForm from './pages/SalesForm';
import ServiceMain from './pages/ServiceMain';
import AddTechnicianForm from "./AddTechnicianForm"
import ListTechnicians  from './ListTehnichians';
import CreateAppointment from './CreateAppointment'
import ListServiceAppointments from './ListServiceAppointments'
import ServiceHistory from './ServiceHistory'
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/sales" element={<SalesMain />} />
					<Route path="/salesform" element={<SalesForm />} />

					<Route path="/service" element={<ServiceMain />} />
					<Route path="/addTechnician" element={<AddTechnicianForm />} />
					<Route path="/listTechnicians" element={<ListTechnicians />} />
					<Route path="/CreateAppointment" element={<CreateAppointment />} />
					<Route path="/ListServiceAppointments" element={<ListServiceAppointments />} />
					<Route path="/ServiceHistory" element={<ServiceHistory />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
