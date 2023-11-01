import { NavLink } from 'react-router-dom';

import './styles/gallery.css';

function InventoryMain() {
  return (
    <>
			<div className="container">
        <h1 className='mb-3 mt-3'>Inventory Options</h1>

        <div className= "text-white row">
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/carmodels">List Car Models</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/addmanufacturer">Add a manufacturer</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/addmodel">Add a Car Model</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/automobiles">List Automobiles</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <NavLink className="nav-link" to="/addautomobiles">Add an Automobile</NavLink>
              </div>
            </div>
        </div>
			</div>
		</>
  )
}

export default InventoryMain