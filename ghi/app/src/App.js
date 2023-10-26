import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesForm from './pages/SalesForm';
import AddTechnicianForm from "./AddTechnicianForm"
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/salesform" element={<SalesForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
