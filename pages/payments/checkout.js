/*// import Head from 'next/head'
// import Image from 'next/image'
//import styles from '../styles/Home.module.css'

// import React, { Component } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'next/link'
// import { useRouter } from "next/router"
import axios from 'axios'

const checkout = () => {
  const initialize = () => {
    const key = "selectedProduct"
    const initialValue = {price: 'not defined'}
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        return JSON.parse(item);
      }
      
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(() => initialize())
// useEffect(() => {
//   setSelectedProduct(initialize())
//     // JSON.parse(localStorage.getItem("selectedProduct")))
// }, []);
  
  //var selectedProduct = localStorage.getItem('selectedProduct')
  
  const [charged, setCharged] = useState('')
  const [receipt_url, setReceipt_url] = useState('')
  const [email, setEmail] = useState('')
  const [stripeEmail, setStripeEmail] = useState('')
  
  // const router = useRouter();
  // const query = router.query;
  // const [selectedProduct, setSelectedProduct] = useState(query) 

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (selectedProduct === null) history.push('/')
   //const { token } = await stripe.createToken()
   try {
      const order = await axios.post('http://localhost:7000/stripe/charge', {
        amount: selectedProduct.price.toString().replace('.', ''),
        source: "tok_visa",
        receipt_email: email //'customer@example.com'
      })
      setCharged("")
      setReceipt_url("")
      setStripeEmail("")
    }
    catch(error) {
        if (error.response) {
          // Request made and server responded
          setCharged(error.response.data.message) // + " / " + error.response.status + " / " + error.response.headers);
          setReceipt_url('')
          setStripeEmail('')
        } else if (error.request) {
          // The request was made but no response was received
          setCharged(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setCharged('Error', error.message);
        }
      }

      // setCharged(order.data.message)
      // setReceipt_url(order.data.charge.receipt_url)
      // setStripeEmail(order.data.charge.receipt_email)

    if (receipt_url) {
     return (
       <div className="success">
         <h2>Payment Successful!</h2>
         <a href={receipt_url}>View Receipt</a>
         <Link href={'/'}>Home</Link>
       </div>
     )
   }
 }

    return (
     <div className="checkout-form">
           <p>Amount: ${selectedProduct.price}</p>
           <p>{charged}</p>
           <p>{stripeEmail}</p>
           {stripeEmail && <a href={receipt_url}>View Receipt</a>}
          <form name="card" onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" value={email} size="30" placeholder="Email"
                 required
                 onChange={(e) => setEmail(e.target.value)}
                 className="form-control" />
            </label>
            <label>
              Card details
              <input type="text" required/>
            </label>
            <label>
             Expiration date
             <input type="date" required />
            </label>
            <label>
              CVC
              <input type="number" required maxLength={3} placeholder="123"/>
            </label>
            <button type="submit" className="order-button">
              Pay
            </button>
         </form>
         </div>
    )
  }
export default checkout;*/