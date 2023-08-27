import React from 'react'
import { Link } from 'react-router-dom'

const CardGroup = () => {
  return (
    <>
    <div className="card-group my-3">
  <div className="card g-4">
    <img src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=76" className="card-img-top"
       alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://phirenamenca.eu/wp-content/uploads/2019/09/Digital-Technologies.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://phirenamenca.eu/wp-content/uploads/2019/09/Digital-Technologies.jpg" 
    className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <p className="card-text"><small className="text-muted"><Link to="#">View More</Link></small></p>
    </div>
  </div>
</div>
    </>
  )
}

export default CardGroup