import React, { useEffect, useState } from 'react'
import { getAllProducts, getFilteredProducts } from '../../api/productApi'
import CategoriesCheckbox from '../CategoriesCheckbox'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import PriceRadio from '../PriceRadio'
import ProductCard from './ProductCard'

const Product = () => {
    let [products, setProducts] = useState([])
    let [sortBy, setSortBy] = useState('product_name')
    let [order, setOrder] = useState('DESC')
    let [limit, setLimit] =useState(3)
    let [skip , setSkip]  = useState(0)
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], product_price: [] }
    })

    const handleFilters = (filter, filterBy) => {
        let new_filters = {...myFilters }
        new_filters.filters[filterBy] = filter
        setMyFilters(new_filters)
        console.log(new_filters)

    }
    useEffect(() => {

        getFilteredProducts(myFilters,sortBy, order,limit,skip)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    // new_products.push(data)
                    setProducts([...products, ...data])
                    // setProducts(data)
                    console.log(data)
                }
            })
    }, [myFilters,skip])
    return (
        <>
            <Navbar />
            <div className='container-fluid customMargin'>
                <div className='row'>
                    <div className='col-md-3 ps-5'>
                        <h3 className='text-decoration-underline text-success mt-3 '>Department</h3>
                        <CategoriesCheckbox handleCategory={handleFilters} />
                        <h3 className='text-decoration-underline text-success mt-3 '>Prices</h3>
                        <PriceRadio handlePrice={handleFilters} />
                    </div>
                    <div className='col-md-9' >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                            {
                                products.map(item => {
                                    return <ProductCard item={item} key={item._id} />
                                })
                            }
                        </div>
                        <button className='btn btn-primary' onClick={()=>{
                            return setSkip(skip+limit)
                        }}>Load More</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product