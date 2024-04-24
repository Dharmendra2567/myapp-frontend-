import React from 'react'


const Carousel = () => {
  return (
   <>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://icms-image.slatic.net/images/ims-web/8a182606-dbc7-46b3-a8a7-ee71a720f1a5.jpg"
       className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/e5e5831e-5fef-496e-8ca0-95508958a383.jpg" 
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/1bff34c4-065d-4a6c-ba33-c5744e50a7a5.jpg" 
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/71207337-7f57-467c-bcd5-46d2987300b6.jpg_1200x1200.jpg" 
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/8e0229f5-7a56-454b-b3fc-ad526f974294.jpg" 
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