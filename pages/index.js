// import { useState } from "react";
// import Error from "next/error";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import Image from 'next/image'
// import Products from '../components/Products';


// function Home(props) {
//   const { products } = props;
//   const router = useRouter();

//   if (!router.isFallback && !products) {
//     return <Error statusCode={404} />;
//   }

//   return (
//     <div className="my-8 bg-primary">
//       <Head>
//         <title>GIU SE Marketplace Example</title>
//         <meta
//           name="GIU SE"
//           content="Rabbit Mart Marketplace"
//         />
//       </Head>
//       <div className="mt-4">
//         <Products products={products} />
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps({ params = {} }) {
//   const response = await fetch('https://se-lecture-8-node-vercel-h814dy0vt-desoukya-gmailcom.vercel.app/api/products');
//   const data = await response.text()
//   const products = JSON.parse(data);
//   return {
//     props: {
//       products,
//     },
//   };
// }

// export default Home;


import { useEffect, useState } from "react";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Products from '../components/Products';
import axios from "axios";

function Home() {
  const [ products, setProducts ] = useState([]);
  const [ viewedProducts, setViewedProducts ] = useState([])
  const router = useRouter();

  useEffect(() => {
    const response = fetch('https://se-lecture-8-node-vercel-h814dy0vt-desoukya-gmailcom.vercel.app/api/products')
    //const data = await response.text()
    //const products = JSON.parse(data);
    .then((res) => res.json()
    
    )
    .then((data) => {
      setProducts(data);
      setViewedProducts(data);
    });
  }, []);

  function searchProducts(event){
    event.preventDefault();
    const searchName = event.target.name.value;
    setViewedProducts(products.filter((product, i, a) => {
      return product.name.toLowerCase().includes(searchName.toLowerCase());
    }));
   }

  if (!router.isFallback && !products) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="my-8 bg-primary">
      <Head>
        <title>Rabbit Mart 22</title>
        <meta
          name="GIU SE"
          content="Rabbit Mart "
        />
        
      </Head>
      <link className="border p-2 mb-8 border-black w-1/8 font-bold"rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <form className="example" onSubmit={searchProducts} >
        <input className="border p-2 mb-8 border-black w-1/8 font-bold " id = "name" type="text" placeholder="Search here..." name="search"/>
        <button className="border p-2 mb-8 border-black shadow-offset-lime w-1/8 font-bold" type="submit">Search  <i className="fa fa-search"></i></button>
      </form>
      

      <div className="mt-4">
        <Products products={viewedProducts} />
      </div>
    </div>
  );
}


export default Home;