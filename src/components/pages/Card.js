import React from 'react'

const Card = ({name,price,description,image}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={`./productsImage/${image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Rs.{price}</h5>
                        <p className="card-text text-truncate">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card