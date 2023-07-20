import { API } from "../config"

export const getStripeKey = ()=>{
    return fetch(`${API}/getstripekey`)
    .then(res=>res.json())
    .catch(err=>console.log(err))

}
export const processPayment= (amount)=>{
    return fetch(`${API}/processpayment`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({amount})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const placeOrders =(order)=>{
    return fetch(`${API}/placeorder`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}