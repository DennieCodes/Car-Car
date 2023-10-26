import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesMain from './pages/SalesMain';
import SalesForm from './pages/SalesForm';
import SalesPersonForm from './pages/SalesPersonForm';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import SalesPeople from './pages/Salespeople';
import ServiceMain from './pages/ServiceMain';
import Sales from './pages/Sales';
import SalespersonHistory from './pages/SalespersonHistory';

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

					<Route path="/service" element={<ServiceMain />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
