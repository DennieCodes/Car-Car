import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesMain from './pages/SalesMain';
import SalesForm from './pages/SalesForm';
import SalesPersonForm from './pages/SalesPersonForm';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import SalesPeople from './pages/SalesPeople';
import Sales from './pages/Sales';
import SalespersonHistory from './pages/SalespersonHistory';
import InventoryMain from './pages/InventoryMain';
import ManufacturerList from './pages/ManufacturerList';
import AddManufacturer from './pages/AddManufacturer';
import CarModels from './pages/CarModels';
import AddModel from './pages/AddModel';
import Automobiles from './pages/Automobiles';
import AddAutomobile from './pages/AddAutomobile';
import ServiceMain from './pages/ServiceMain';
import AddTechnicianForm from "./AddTechnicianForm"
import ListTechnicians  from './ListTehnichians';
import CreateAppointment from './CreateAppointment'
import ListServiceAppointments from './ListServiceAppointments'
import ServiceHistory from './ServiceHistory'
import"./index.css"
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/sales" element={<SalesMain />} />
					<Route path="/saleslist" element={<Sales />} />
					<Route path="/salesform" element={<SalesForm />} />
					<Route path="/salesperson" element={<SalesPersonForm />} />
					<Route path="/saleshistory" element={<SalespersonHistory />} />
					<Route path="/salespeople" element={<SalesPeople />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/customers" element={<Customers />} />

					<Route path="/inventory" element={<InventoryMain />} />
					<Route path="/manufacturers" element={<ManufacturerList />} />
					<Route path="/addmanufacturer" element={<AddManufacturer />} />
					<Route path="/carmodels" element={<CarModels />} />
					<Route path="/addmodel" element={<AddModel />} />
					<Route path="/automobiles" element={<Automobiles />} />
					<Route path="/addautomobiles" element={<AddAutomobile />} />

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
