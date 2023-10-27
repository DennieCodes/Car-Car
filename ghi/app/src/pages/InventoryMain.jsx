import { NavLink } from 'react-router-dom';

function SalesMain() {
  return (
    <>
			<div className="container">
        <h2>Inventory Options</h2>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carmodels">List Car Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addmanufacturer">Add a manufacturer</NavLink>
            </li>

          </ul>
        </div>
			</div>
		</>
  )
}

export default SalesMain