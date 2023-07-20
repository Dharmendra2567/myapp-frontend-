import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { getStripeKey } from '../../api/paymentApi'
import Payment from './Payment'

const PaymentElement = () => {
    const [stripeKey, setStripeKey] = useState('')

    useEffect(()=>{
        getStripeKey()
        .then(data=>setStripeKey(data.stripeApiKey))
        .catch(err=>console.log(err))

    },[])
    console.log(stripeKey)
  return (
    <>
    { 
        stripeKey && <Elements stripe={loadStripe(stripeKey)}>
            <Payment/>
        </Elements>
    }
     </>
  )
}

export default PaymentElement