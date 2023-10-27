import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesMain from './pages/SalesMain';
import SalesForm from './pages/SalesForm';
import SalesPersonForm from './pages/SalesPersonForm';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import SalesPeople from './pages/Salespeople';
import Sales from './pages/Sales';
import SalespersonHistory from './pages/SalespersonHistory';

import InventoryMain from './pages/InventoryMain';
import ManufacturerList from './pages/ManufacturerList';
import AddManufacturer from './pages/AddManufacturer';
import CarModels from './pages/CarModels';
import AddModel from './pages/AddModel';
import Automobiles from './pages/Automobiles';

import ServiceMain from './pages/ServiceMain';

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

					<Route path="/service" element={<ServiceMain />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
