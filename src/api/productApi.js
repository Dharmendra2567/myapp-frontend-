import { API } from "../config"

//get all users
export const getAllUsers = () => {
    return fetch(`${API}/allusers`, {
        method: "GET"
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getAllProducts = () => {
    return fetch(`${API}/products`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
export const addProduct = (product, token) => {
    return fetch(`${API}/addproduct`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
export const productDetails = (id) => {
    return fetch(`${API}/productdetails/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}
export const updateProduct = (id, product, token) => {
    return fetch(`${API}/updateproduct/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
//get filtered products
export const getFilteredProducts = (filters,sortBy,order,limit,skip) => {
    
    return fetch(`${API}/filteredproduct?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
