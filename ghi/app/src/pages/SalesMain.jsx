// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function SalesMain() {
  return (
    <>
			<div className="container">
        <h2>Sales Options</h2>
        <div>
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saleslist">List Sales</NavLink>
              <NavLink className="nav-link" to="/salesform">Add a Sale</NavLink>
              <NavLink className="nav-link" to="/salesperson">Add a Salesperson</NavLink>
              <NavLink className="nav-link" to="/salespeople">List Salespeople</NavLink>
              <NavLink className="nav-link" to="/customer">Add a Customer</NavLink>
              <NavLink className="nav-link" to="/customers">List Customers</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default SalesMain