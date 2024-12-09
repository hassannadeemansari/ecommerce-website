"use client"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";



export default function AllProducts(){
    return(
        <div>


         <header>
              <div className="flex justify-between w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center">
                  <div><CiSearch /></div>
                  <h1 className="2xl:text-2xl"><Link href="/">Avion</Link></h1>
                     <div className="flex gap-5">
                     <div><Link href="/Shopping"><IoCartOutline /></Link></div>
                     <div><Link href="/Sign"><MdOutlineAccountCircle/></Link></div>
                     </div>
              </div>
              <div className="2xl:w-[1600px] w-[90%] border-b-2 mx-auto" />

              <div className="flex mx-auto items-center h-11">
                  <div className="flex gap-5 font-sans text-gray-500 mx-auto">
                      <a href="Product">Products List</a>
                      <a>plant pots</a>
                      <a>Ceramics</a>
                      <a>Tables</a>
                      <a>Chairs</a>
                      <a>Crockery</a>
                      <a>Tableware</a>
                      <a>Cutlery</a>
                  </div> 
              </div>
         </header>


         <main className="w-[99%] 2xl:w-[1600px] 2xl:h-[35vh] bg-black mx-auto">
               <Image className="w-full h-full object-cover object-fill" src="AllProducts1.png" alt="back" />
         </main>
         <div className="h-12 w-[100%] mx-auto"></div>

         <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto p-4">
                 {[
                   { img: "hero.png", name: "The Dandy Chair", price: "£250" },
                   { img: "hero4.png", name: "Rustic Vase Set", price: "£155" },
                    { img: "hero2.png", name: "The Silky Vase", price: "£125" },
                   { img: "hero3.png", name: "The Lucy Lamp", price: "£399" },
                   { img: "a1.png", name: "The Dandy Chair", price: "£250" },
                   { img: "a4.png", name: "Rustic Vase Set", price: "£155" },
                    { img: "a2.png", name: "The Silky Vase", price: "£125" },
                   { img: "a3.png", name: "The Lucy Lamp", price: "£399" },
                   { img: "hero.png", name: "The Dandy Chair", price: "£250" },
                   { img: "hero2.png", name:"The Silky Vase", price: "£125" },
                    { img: "hero4.png", name: "Rustic Vase Set", price: "£155" },
                   { img: "hero3.png", name: "The Lucy Lamp", price: "£399" },
                 ].map((product, index) => (
                   <div key={index} className="flex flex-col items-center text-center">
                     <Image
                        className="w-full h-[200px] object-cover mb-2 rounded-md"
                       src={product.img}
                         alt={product.name}
                     />
                      <p className="text-lg font-semibold">{product.name}</p>
                     <p className="text-gray-600">{product.price}</p>
                   </div>
                   ))}
        </div>


       
               <div className="flex mx-auto justify-center items-center h-[180px]"><button className="bg-gray-300 h-12 w-[14%]">View Collection</button></div>



     {/* footer */}
                    
     <footer className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-auto bg-primary text-white flex-wrap xl:text-sm text-sm mx-auto flex justify-center">
    <div className="w-[89%] h-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-0 py-8">
        
        {/* Menu Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Menu</h1>
            <div><a>New Arrivals</a></div>
            <div><a>Best Sellers</a></div>
            <div><a>Recently Viewed</a></div>
            <div><a>Popular This Week</a></div>
            <div><a href="/Product">All Products</a></div>
        </div>

        {/* Categories Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Categories</h1>
            <div><a>Crockery</a></div>
            <div><a>Furniture</a></div>
            <div><a>Homeware</a></div>
            <div><a>Plant pots</a></div>
            <div><a>Chairs</a></div>
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
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-lg sm:text-xl">Join our mailing list</p>
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


         {/* <div className="2xl:w-[1600px] w-[99%] h-[50vh] bg-orange-400 mx-auto flex justify-center items-center">
              <div className="w-[85%] h-[98%] bg-white flex justify-center gap-4">
                   <div className="w-[24%] h-full bg-blue-300">
                      <img className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero.png" alt="cart1" />
                      <p></p>
                   </div>
              </div>
         </div> */}



        </div>
    );
}