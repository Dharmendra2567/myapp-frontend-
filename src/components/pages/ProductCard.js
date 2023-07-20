import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config'

const ProductCard = ({ item }) => {
    return (
        <>
            <div className="col" >
                <div className="card">
                    <img src={`${API}/${item.product_image}`} className="card-img-top" alt={item.product_name}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.product_name}</h5>
                        <h5 className="card-title">&#8377; {item.product_price}</h5>
                        {/* <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        <Link to={`/product/${item._id}`} className='btn btn-warning w-100'>View More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard