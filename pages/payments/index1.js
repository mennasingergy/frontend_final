/*
import React from 'react';
// import Head from 'next/head'
// import Image from 'next/image'

//import { products } from './Products.js'
import Link from 'next/link'

const index = () => {
    return (
      <>
      {products.map(prod => (
        <div className="product" key={prod.id}>
          <section>
            <h2>{prod.name}</h2>
            <p>{prod.desc}</p>
            <h3>{'$' + prod.price}</h3>
            <Link
                href={{
                  pathname: '/checkout',
                  // query: prod, // the data
                }}
            >
               //{ onClick={handlePurchase(prod)} }
              <button type="button" onClick={ () => localStorage.setItem('selectedProduct', JSON.stringify(prod))}>
                PURCHASE
              </button>
            </Link>
          </section>
          <img src={prod.img} alt={prod.name} />
        </div>
      ))}
      </>
    )
  }
  
// export const handlePurchase = prod => () => {
//     // setSelectedProduct(prod)  
//     //selectProduct(prod)
//     // history.push('/checkout')
//   }

export default index 

*/
