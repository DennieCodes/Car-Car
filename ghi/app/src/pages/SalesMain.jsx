import { NavLink } from 'react-router-dom';

function SalesMain() {
  return (
    <>
			<div className="container">
        <h1><b>Sales Options</b></h1>
        <div>
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/saleslist">List Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesform">Add a Sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson">Add a Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">List Salespeople</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saleshistory">View Salespeople History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">Add a Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">List Customers</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default SalesMain