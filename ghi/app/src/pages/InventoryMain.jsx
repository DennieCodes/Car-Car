import { NavLink } from 'react-router-dom';

function InventoryMain() {
  return (
    <>
			<div className="container">
        <h1><b>Inventory Options</b></h1>
        <div className= "text-white">
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carmodels">List Car Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addmanufacturer">Add a manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addmodel">Add a Car Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">List Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addautomobiles">Add an Automobile</NavLink>
            </li>

          </ul>
        </div>
			</div>
		</>
  )
}

export default InventoryMain