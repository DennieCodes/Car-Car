import { NavLink } from 'react-router-dom';
import manufacturers from './pics/inventory/list-manufacturers.avif';
import carmodels from './pics/inventory/car-models.jpg';
import addManufacturer from './pics/inventory/add-manufacturer--baron-FcrABOM-6bE-unsplash.jpg';
import addModel from './pics/inventory/add-model--pexels-pixabay-358070.jpg';
import automobileList from './pics/inventory/list-automobiles--pexels-pixabay-63294.jpg';
import addAutomobile from './pics/inventory/add-automobile--lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg';

import './styles/gallery.css';

function InventoryMain() {
  return (
    <>
			<div className="container">
        <h1 className='mb-3 mt-3'>Inventory Options</h1>

        <div className= "text-white row">
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={manufacturers} className="gallery-images" alt="A board of car manufacturers"/>
                <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={carmodels} className="gallery-images" alt="A row of classic cars lined up"/>
                <NavLink className="nav-link" to="/carmodels">List Car Models</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addManufacturer} className="gallery-images" alt="Two cars in an assembly area"/>
                <NavLink className="nav-link" to="/addmanufacturer">Add a manufacturer</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addModel} className="gallery-images" alt="A grey sports car"/>
                <NavLink className="nav-link" to="/addmodel">Add a Car Model</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={automobileList} className="gallery-images" alt="A vertical parking garage full of cars"/>
                <NavLink className="nav-link" to="/automobiles">List Automobiles</NavLink>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addAutomobile} className="gallery-images" alt="A car being assembled"/>
                <NavLink className="nav-link" to="/addautomobiles">Add an Automobile</NavLink>
              </div>
            </div>
        </div>
			</div>
		</>
  )
}

export default InventoryMain