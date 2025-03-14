import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ShoppingBasket = () => {
  return (
    <div>


<header>
              <div className="flex w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center justify-between">
              <Link href="/" className="2xl:text-2xl">Avion</Link>
                  <div className="flex gap-6">
                        <Link href="/About">About Us</Link>
                        <a>Contact</a>
                        <Link href="/Product">Blog</Link>
                      <div className="flex gap-4">
                      <div><Link href="/Shopping"><IoCartOutline /></Link></div>
                      <div><Link href="/Sign"><MdOutlineAccountCircle/></Link></div>
                        <div><CiSearch /></div>
                      </div>
                   </div>
              </div>
              <div className="2xl:w-[1500px] w-[90%] border-b-2 mx-auto" />

              <div className="flex mx-auto items-center h-11">
                  <div className="flex gap-5 font-sans text-gray-500 mx-auto">
                      <Link href="/AllProducts">All Products</Link>
                      <Link href="/PlantsPots" className="hover:text-primary transition duration-200">Plants Pots</Link>
                      <a>Ceramics</a>
                      <a>Tables</a>
                      <a>Chairs</a>
                      <a>Crockery</a>
                      <a>Tableware</a>
                      <a>Cutlery</a>
                  </div> 
              </div>
        </header>



    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="overflow-x-auto">
        {/* Basket Table */}
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold">Product</th>
              <th className="py-2 px-4 text-center font-semibold">Quantity</th>
              <th className="py-2 px-4 text-right font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr className="border-b">
              <td className="py-4 px-4 flex items-center">
                <Image
                  src="/hero.png"
                  alt="Graystone Vase"
                  width={64}
                  height={64}
                  className="object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Graystone Vase</p>
                  <p className="text-gray-600">£85</p>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-16 border border-gray-300 rounded p-1 text-center"
                />
              </td>
              <td className="py-4 px-4 text-right font-semibold">£85</td>
            </tr>

            {/* Product 2 */}
            <tr className="border-b">
              <td className="py-4 px-4 flex items-center">
                <Image
                  src="/hero2.png"
                  alt="Basic White Vase"
                  width={64}
                  height={64}
                  className="object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Basic White Vase</p>
                  <p className="text-gray-600">£125</p>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-16 border border-gray-300 rounded p-1 text-center"
                />
              </td>
              <td className="py-4 px-4 text-right font-semibold">£125</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basket Summary */}
      <div className="mt-8 flex flex-col items-end">
        <div className="text-right">
          <p className="text-lg font-semibold">Subtotal: £210</p>
          <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout.</p>
        </div>
        <button className="mt-4 bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">
          Go to Checkout
        </button>
      </div>


         {/* footer */}
                    
     <footer className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-auto bg-primary text-white flex-wrap xl:text-sm text-sm mx-auto flex justify-center mt-10">
    <div className="w-[89%] h-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-0 py-8">
        
        {/* Menu Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Menu</h1>
            <div><a>New Arrivals</a></div>
            <div><a>Best Sellers</a></div>
            <div><a>Recently Viewed</a></div>
            <div><a>Popular This Week</a></div>
            <div><Link href="/AllProducts">All Products</Link></div>
        </div>

 {/* Categories Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Categories</h1>
             <div><a>Crockery</a></div>
            <div><a>Furniture</a></div>
            <div><a>Homeware</a></div>
             <div><a>Plant pots</a></div>
            <div><a>Chair</a></div>
            <div><a>Crockery</a></div>
        </div>

        {/* Our Company Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Our Company</h1>
             <div><Link href="/About">About Us</Link></div>
            <div><a>Vacancies</a></div>
            <div><a>Contact Us</a></div>
             <div><a>Privacy</a></div>
            <div><a>Returns Policy</a></div>
            <div><Link href="/Product">Products List </Link></div>
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-lg sm:text-xl">Join Our mailing list</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <input 
                    className="w-full sm:w-[380px] h-[7vh] bg-white opacity-[0.4] text-black px-3 py-2" 
                    placeholder="your@gmail.com" 
                    type="text" 
                />
                <button className="h-[7vh] w-full sm:w-[160px] bg-white text-primary"><Link href="/Sign">Sign Up</Link></button>
            </div>
        </div>

        {/* Footer Bottom Section */}
      <div className="border-t-[1px] 2xl:w-[1500px] flex flex-col sm:flex-row justify-between items-center mx-auto py-4">
        <div className="h-[8vh] flex items-center text-sm sm:text-base mb-4 sm:mb-0">Copyright 2022 Avion LTD</div>
          <div className="flex items-center gap-4 flex-wrap">
           <FaLinkedin className="text-2xl sm:text-3xl" />
           <FaSquareFacebook className="text-2xl sm:text-3xl" />
           <FaInstagram className="text-2xl sm:text-3xl" />
           <FaSkype className="text-2xl sm:text-3xl" />
           <FaTwitter className="text-2xl sm:text-3xl" />
           <FaPinterestP className="text-2xl sm:text-3xl" />
        </div>
     </div>


    </div>
    </footer>




    </div>

</div>
  );
};

export default ShoppingBasket;
