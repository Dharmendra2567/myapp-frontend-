import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api/CategoryApi'

const CategoriesCheckbox = ({ handleCategory }) => {
    const [categories, setCategories] = useState([])
    const [checked, SetChecked] = useState([])
    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    
                }
            })
            .catch(data => console.log(data.error))
    }, [])

    const handleChange = (e) => {
        // e.preventDefault()
        let item = e.target.value
        let new_checked = [...checked]
        let findItem = new_checked.findIndex(i => i === item)
        if (findItem!=-1) {
            new_checked.splice(findItem,1)
        }
        else {
            new_checked.push(item)
        }
        SetChecked(new_checked)
        handleCategory(new_checked, 'category')
    }
      return <>
        {
            categories.map(cat => {
                return <div className="form-check" key={cat._id}>
                            <input className="form-check-input" type="checkbox" onChange={handleChange} value={cat._id} id={`category${cat.category_name}`} />
                            <label className="form-check-label" htmlFor={`category${cat.category_name}`}>
                                {cat.category_name}
                            </label>
                        </div>
                    
            })
           
        }
    </>

}


export default CategoriesCheckbox