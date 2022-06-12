import { useState, useRef } from "react";
import * as axios from 'axios';
import Link from "next/link";
//import { useRouter } from "next/router";
import Router from 'next/router';
//var data2;
function Product(props) {
  const [orderId, setOrderId] = useState('');
  const[message,setMessage]=useState('')
  const [orderIds, setOrderIds] = useState('');
  //const [shipmentStatus, setShipmentStatus] = useState('');
  const {
    order_id,
    name,
    size,
    image,
    slug,
    price,
    stock,
    category,
    measurement,
    weight,

  } = props;

  const handleNewOrder = async (e) => {
    const { data } = await axios.default.post('https://anonymous-orders-microservice-opal.vercel.app/api/orders', {
      name,
      price,
      order_id
    });
    const { data2 } = await axios.default.post('http://localhost:3000/api/shipments', {
  
    });
    //should post in the notifications too
    if (data) {
      setOrderId(data.order_id);
      setOrderIds(data.order_id);
      setMessage(`Success! Your order number is: ${data.order_id}`)
       //await axios.default.post('http://localhost:3000/api/shipments')
       
        
       
      //setOrderIds(data2.order_id)
      
    }
  
  };

  

  return (
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96 ">
          <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={image} alt="" />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
          <h3 className="text-3xl leading-7 mb-2 font-bold uppercase lg:text-5xl">
            {name}
          </h3>
          <span className="text-2xl leading-7 font-bold mt-3">
            {price}LE
          </span>
          <div className="mt-12 flex flex-row justify-between ">
            
            <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              //onClick={(e) => handleNewOrder(e)}
              onClick={(e) => handleNewOrder(e)}
              //{() => Router.push('/payments')} 
            >
             
              Order This Product
            </button>
            <div>
            <span className="text-red-600 leading-7 font-bold mt-3">
              {message}
            </span>
          </div>
  
          </div>
          <div>
            <span className="text-red-600 leading-7 font-bold mt-3">
            <div className="mt-12 flex flex-row justify-between ">
            <Link href="/payments">
            <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              //onClick={(e) => handleNewOrder(e)}
              onClick={(e) => handleNewOrder(e)}
              //{() => Router.push('/payments')}
            >
              proceed to payment
            </button>
            </Link>
          </div>
              
              

            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 md:w-2/3">
        <h3 className="text-gray-600 text-2xl font-medium">Category</h3>
        {category}
      </div>
    </div>
  );
}

export default Product;
