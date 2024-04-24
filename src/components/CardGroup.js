import React from 'react'
import { Link } from 'react-router-dom'

const CardGroup = () => {
  return (
    <><div className='containner-fluid'>
    <div className='row pt-2 '><h5>Most Purchased Items</h5><hr></hr></div>
    <div className="card-group my-1">
      
  <div className="card g-4">
    <img src="productsImage/1.jpg" className="card-img-top"
       alt="..."/>
    <div className="card-body">
      <h5 className="card-title p-0 m-0">Akway PD 3.1 A Mobile Charger with Detachable Cable</h5>
      <p className='text-muted p-0 m-0'><small>white calbe included</small></p>
        <p className="card-text mb-0"> Rs. 563</p>
        <p className="card-text "><small><del className='text-danger me-3'>Rs. 999</del>43% off</small></p>
        <p className=' mt-0'>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
           (503) </p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card g-4">
    <img src="productsImage/5.jpg" className="card-img-top"
       alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-truncate">Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)</h5>
        <p className='text-muted p-0 m-0'>13.3 inch, Space Grey, 1.29 kg</p>
        <p className="card-text mb-0"> Rs.73,990</p>
        <p className="card-text "><small><del className='text-danger me-3'>Rs.99,990</del>25% off</small></p>
        <p className=' mt-0'>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-half text-warning'></i>
           (503) </p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card g-4">
  <img src="productsImage/3.jpg" className="card-img-top"
       alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-truncate">Razer Death Adder Essential / Lightweight(96gms) ,Chrom</h5>
        <p className="card-text mb-0">11,944</p>
        <p className='text-muted p-0 m-0'>USB 3.0, white</p>
        <p className="card-text "><small><del className='text-danger me-3'>Rs. 4,499</del>-71%</small></p>
        <p className=' mt-0'>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
           (503) </p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card g-4">
  <img src="productsImage/4.jpg" className="card-img-top"
       alt="..."/>
    <div className="card-body">
      <h5 className="card-title">iPhone 15</h5>
        <p className="card-text mb-0"> Rs. 90,000</p>
        <p className='text-muted p-0 m-0'>13.3 inch, Space Grey, 1.29 kg</p>
        <p className="card-text "><small><del className='text-danger me-3'>Rs. 90,000</del>-20%</small></p>
        <p className=' mt-0'>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
          <i className='bi bi-star-fill text-warning'></i>
           (503) </p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default CardGroup