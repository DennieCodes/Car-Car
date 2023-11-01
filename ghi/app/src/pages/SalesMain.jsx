import { NavLink } from 'react-router-dom';

function SalesMain() {
  return (
    <>
			<div className="container">
        <h1><b>Sales Options</b></h1>
        <div className="row">
            <div className="col-md-4">
              <div className="card">
                {/* <img src="image1.jpg" class="card-img-top" alt="Image 1">
                <div class="card-body">
                  <h5 class="card-title">Title 1</h5>
                </div> */}
                <NavLink className="nav-link" to="/saleslist">List Sales</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/salesform">Add a Sale</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/salesperson">Add a Salesperson</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/salespeople">List Salespeople</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/saleshistory">View Salesperson History</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/customer">Add a Customer</NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <NavLink className="nav-link" to="/customers">List Customers</NavLink>
              </div>
            </div>
        </div>
			</div>
		</>
  )
}

export default SalesMain