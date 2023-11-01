import { NavLink } from 'react-router-dom';
import "./index.css"
import aaaaa from "./pages/pics/aaaaa.PNG"
function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
				<img src={aaaaa} alt="CarCar Logo" width="50" height="auto"/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="/sales">
								Sales
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="/service">
								Service
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="/inventory">
								Inventory
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
