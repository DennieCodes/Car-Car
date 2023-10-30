import nlogo from "../src/pages/pics/nlogo.png"
import shop from "./pages/pics/shop.jpeg"
import happy from "./pages/pics/happy.jpeg"
import inventory from "./pages/pics/inventory.jpeg"
import service from "./pages/pics/service.jpeg"
import "./index.css"
function MainPage() {
  return (
    <div className="px-5 py-1 my-1 text-center">
      {/* <h1 className="display-5 fw-bold">CarCar</h1> */}
      <img src={nlogo} class="mx-auto d-block w-50 text-center" id="mainpic"></img> 
      <div className="col-lg-6 mx-auto">
        <br></br>
     
        <h1 className="lead mb-4"><i><b>The premiere solution for automobile dealership
          management!</b> </i>
         
        </h1>
      </div>


 <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-interval="2000">
  <div class="carousel-inner col-4 text-lg">

    <div class="carousel-item active text-lg">
      <div class="font-weight-bold font-italic text-primary"><h3>Amazing service Department</h3>
        <img src={shop}class="mx-auto d-block w-75" alt="..."></img>
      </div>
      </div>  
  
    <div class="carousel-item">
    <div class="font-weight-bold font-italic text-primary text-lg"><h3>You will love our Inventory!</h3>
      <img src={happy} class="mx-auto d-block w-75" alt="..."></img>
    </div>
    </div>

    <div class="carousel-item">
    <div class="font-weight-bold font-italic text-primary"><h3>You'll love our Sales People!</h3>
      <img src={service}class="mx-auto d-block w-75" alt="..."></img>
    </div>
    </div>

    <div class="carousel-item">
    <div class="font-weight-bold font-italic text-primary text-lg"><h3>Come look at our Selection</h3>
      <img src={inventory} class="mx-auto d-block w-75" alt="..."></img>
    </div>
    </div>

    </div>
  </div> 
</div>
    
    
  );
}

export default MainPage;
