import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'next/link'
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

  const [charged, setCharged] = useState('')
  const [receipt_url, setReceipt_url] = useState('')
  const [email, setEmail] = useState('')
  const [stripeEmail, setStripeEmail] = useState('')
  const [email_n, setEmailN] = useState('');
  const [orderId, setOrderId] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (selectedProduct === null) history.push('/')
   //const { token } = await stripe.createToken()
   try {
      setCharged('')
      setReceipt_url('')
      setStripeEmail('')

      // const order = await axios.post('http://localhost:7000/stripe/charge', {
      const order = await axios.post('https://payment-ms-noorabouelhoda.vercel.app/api/stripe/charge', {
        amount: selectedProduct.price.toString().replace('.', ''),
        source: "tok_visa",
        receipt_email: email //'customer@example.com'
      })
      setCharged(order.data.message)
      setReceipt_url(order.data.charge.receipt_url)
      setStripeEmail(order.data.charge.receipt_email)
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
 const handleSubmit_n= async (e) => {
  const { data } = await axios.default.post('https://anonynomous-notification-microservice.vercel.app/api/notifications')
  //should post in the notifications too
  
}

    return (
     <div className="checkout-form">
           <p>Amount: ${selectedProduct.price}</p>
           <p>{charged}</p>
           <p>{stripeEmail}</p>
           {stripeEmail && <a href={receipt_url}>View Receipt</a>}
          <form name="card" onSubmit={handleSubmit}  >
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
            {/* onClick={()=>handleSubmit()}> */}
              submit

            </button>
            
         </form>
      
         <div className="mt-12 flex flex-row justify-between ">
         
            <div>
            
          </div>
  
          </div>
         </div>
    )
  }
export default checkout