import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesMain from './pages/SalesMain';
import SalesForm from './pages/SalesForm';
import ServiceMain from './pages/ServiceMain';

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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
