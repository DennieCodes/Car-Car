import { NavLink } from 'react-router-dom';
import carsales from './pics/sales/car-sales--pexels-antoni-shkraba-7144199.jpg'
import addsale from './pics/sales/add-sale--pexels-antoni-shkraba-7144174.jpg';
import salespeople from './pics/sales/salespeople--pexels-yan-krukau-8866809.jpg';
import salesman from './pics/sales/salesman--jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg';
import saleshistory from './pics/sales/sales-history--pexels-pixabay-265087.jpg'
import customers from './pics/sales/customers--pexels-gustavo-fring-4173193.jpg';
import addCustomer from './pics/sales/add-customer--pexels-gustavo-fring-4895413.jpg';

import './styles/gallery.css';

function SalesMain() {
  return (
    <>
			<div className="container">
        <h1 className="mb-3 mt-3">Sales Options</h1>
        <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={carsales} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/saleslist">List Sales</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addsale} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/salesform">Add a Sale</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={salesman} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/salesperson">Add a Salesperson</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={salespeople} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/salespeople">List Salespeople</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={saleshistory} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/saleshistory">View Salesperson History</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={customers} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/customer">Add a Customer</NavLink>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card p-2 shadow">
                <img src={addCustomer} className="gallery-images" alt="Two people shakings hands in front of a car"/>
                <NavLink className="nav-link" to="/customers">List Customers</NavLink>
              </div>
            </div>
        </div>
			</div>
		</>
  )
}

export default SalesMain