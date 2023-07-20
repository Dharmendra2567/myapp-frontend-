import React from 'react'


const Carousel = () => {
  return (
   <>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761"
       className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://phirenamenca.eu/wp-content/uploads/2019/09/Digital-Technologies.jpg" 
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="logo192.png" 
      className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Carousel