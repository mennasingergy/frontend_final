import { useRef,useState, useEffect } from "react";
import Link from "next/link";
import UserIcon from "./ui/user";
import ShoppingCartIcon from "./ui/shoppingcart";
import FavoriteIcon from "./ui/favorite";
import { useRouter } from "next/router";


function Layout({ children }) {
  const [session, setSession] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  const [haveProducts, setHaveProducts] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();
  return (
    <div className="">
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <SearchBar></SearchBar>
            <div className="w-full text-green-700 md:text-center text-3xl font-bold">
              RABBIT MART 
            </div>
            <div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around">
              <button className="text-blue-600">
                <UserIcon />
              </button>
              <button
                className="text-red-600 ml-4 lg:ml-0"
                // onClick={getFavoriteListHandler}
                onClick={(e) => e.preventDefault()}
              >
                <FavoriteIcon />
              </button>
              {/* shopping cart icon */}
              <button
                // onClick={getShoppingCartHandler}
                onClick={(e) => e.preventDefault()}
                className="text-black-600 focus:outline-none mx-4 sm:mx-0"
              >
                <ShoppingCartIcon />
              </button>
            </div>
          </div>
          <nav
            className={`${menuOpen ? "" : "hidden"
              } sm:flex sm:justify-center sm:items-center mt-4 `}
          >
            <div className="flex flex-col sm:flex-row">
              <Link href="/">
                <button className="border font-mono p-2 w-1/3 bg-lime-300 border-green shadow-offset-black lg:w-24 lg:mr-8">
                  Home
                </button>
              </Link>
              <Link href="/shipments">
                <button className="border font-mono p-2 w-1/3 bg-lime-300 border-green shadow-offset-black lg:w-24 lg:mr-8">
                  Your Shipments
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="my-8">{children}</main>
    </div>
  );

}
const SearchBar = () => {
  const [search,setSearch]=useState('')
   const clickPoint = useRef();
   const handleFocus = () => {
       clickPoint.current.style.display = "none";
   };

   const handleBlur = () => {
       clickPoint.current.style.display = "block";
   };

   return (
       <div className="items-center px-4 flex justify-center" >
           <div className="relative mr-3">
               <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                   <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
               </div>
               <input
                   type="text"
                   className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                   placeholder="Search Here..."
                   onFocus={handleFocus}
                   onBlur={handleBlur}
               />
           </div>
       </div>
   );
}

export default Layout;
