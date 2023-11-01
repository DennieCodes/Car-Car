import nlogo from '../src/pages/pics/nlogo.png';
import shop from './pages/pics/shop.jpeg';
import happy from './pages/pics/happy.jpeg';
import inventory from './pages/pics/inventory.jpeg';
import service from './pages/pics/service.jpeg';
import './index.css';
function MainPage() {
	return (
		<div className="px-5 py-1 my-1 text-center">
			<h1 className="display-5 fw-bold">CarCar</h1>
			 <div className="col-lg-6 mx-auto w-100">
				<h3>The premiere solution for automobile dealership management!</h3>
			</div>
			<br></br>
	 <div id="carouselExampleCaptions" class="carousel slide">
 	<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active"  data-bs-interval="2000">
      <img src={shop} class=" d-block w-75 mx-auto" alt="..." />
      <div class="carousel-caption d-none d-md-block text-shadow-dark">
        <h2 class="ccaption">State-of-the-art Service shop</h2>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
      <img src={happy} class="d-block w-75 mx-auto" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2  class="ccaption">You'll love our Sales people!</h2>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
      <img src={service} class="d-block  w-75 mx-auto" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 class="ccaption">And you will love our Technicians!</h2>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
      <img src={inventory}class="d-block w-75 mx-auto" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2 class="ccaption">Come look at our selection!</h2>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
		</div>
	);
}

export default MainPage;
