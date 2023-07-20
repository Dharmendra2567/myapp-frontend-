import React from 'react'
import { prices } from './prices'

const PriceRadio = ({handlePrice}) => {
    const handleChange = (e) => {
        let price_id = Number(e.target.value)
        let price = prices.find(pri=>pri.id === price_id)
        let price_value = price.value
        handlePrice(price_value, 'product_price')
      }
  return <>
     {
        prices.map(pri=>{
            return  <div className="form-check" key={pri.id}>
            <input className="form-check-input" type="radio" name="prices" id={pri.id} value={pri.id} onChange={handleChange} />
            <label className="form-check-label" htmlFor={pri.id}>
                {pri.text}
            </label>
        </div>
        })
     }
    </>
  
}

export default PriceRadio