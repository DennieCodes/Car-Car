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
              <NavLink className="nav-link" to="/salesform">Salesform</NavLink>
            </li>
          </ul>
        </div>
			</div>
		</>
  )
}

export default SalesMain