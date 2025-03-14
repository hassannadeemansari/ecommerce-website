"use client"
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineInbox } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";




export default function About(){
    return(
        <div>

          <div className="flex w-[90%] 2xl:w-[1580px]  mx-auto h-[6vh] items-center bg-primary text-white justify-center">
               <p>Free delivery on all orders over £50 with code easter checkout</p>
               <div className="flex justify-end"><ImCross /></div>
          </div>

             <header>
              <div className="flex sm:flex-row flex-col w-[90%] 2xl:w-[1580px]  mx-auto h-[7vh] items-center justify-between">
              <Link href="/" className="sm:text-2xl text-3xl sm:mt-0 mt-5 sm:mb-0 mb-3">Avion</Link>
              <div className="flex gap-6">
                        <a href="/About">About Us</a>
                        <a href="/Product">Product List</a>
                        <a>Contact</a>
                        <a>Blog</a>
                      <div className="flex gap-4">
                      <div><Link href="/Shopping"><IoCartOutline /></Link></div>
                      <div><Link href="/Sign"><MdOutlineAccountCircle/></Link></div>
                        <div><CiSearch /></div>
                      </div>
                   </div>
              </div>
              <div className="2xl:w-[1500px] w-[90%] border-b-2 mx-auto" />

              {/* <div className="flex mx-auto items-center h-11">
                  <div className="flex justify-center gap-5 font-sans text-gray-500 mx-auto">
                      <Link href="/AllProducts">All Products</Link>
                      <Link href="/Plantspots" className="hover:text-primary transition duration-200">Plants Pots</Link>
                      <a>Ceramics</a>
                      <a>Tables</a>
                      <a>Chairs</a>
                      <a>Crockery</a>
                      <a>Tableware</a>
                      <a>Cutlery</a>
                  </div> 
              </div> */}
        </header>

         
         <main className="2xl:w-[1600px] w-[95%] h-[350px] mx-auto flex items-center justify-center">
              <div className="w-[80%] sm:h-[76%] h-[60%] bg-white flex sm:flex-row flex-col justify-around sm:justify-between items-center">
                      <p className="lg:w-[44%] w-[320px] 2xl:text-3xl text-2xl text-gray-700 font-sans flex ">
                      A brand built on the love of craftmanship,
                      quality and outstanding customer service
                      </p>
                  
                  <div>
                      <button className="bg-gray-300 2xl:w-[200px] w-[150px] h-[7vh]"><a href="/AllProducts">ViewOurProducts</a></button>
                  </div>
              </div>
         </main>



    {/* hero section */}

               <div className="h-[100vh] 2xl:h-[55vh] h-[60vh] 2xl:w-[1600px] mx-auto flex items-center ">
                    <div className="sm:w-[80%] w-[95%] h-[60vh]  mx-auto flex sm:gap-3">
                         <div className="sm:w-[700px] w-[300px] h-full bg-primary flex ">
       
                               <div className="w-full text-white pt-10 pl-10 flex flex-col 2xl:gap-[160px]">
                                  <div> 
                                       <div className="sm:w-[60%] w-[80%]  font-sans text-2xl ">
                                          <p className="2xl:text-3xl text:sm">The furniture brand for the future, with timeless designs</p>
                                        </div><br/>
                                        <div>
                                           <button className="bg-gray-500 h-12 w-[120px]"><Link href="/AllProducts">View Collection</Link></button>
                                        </div>
                                   </div>
                                   <div>       
                                        <div className="sm:w-[80%] w-[90%] sm:mt-0 mt-8 font-sans font-extralight sm:text-lg ">
                                           <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                              with nice fonts, tasteful colors and a beautiful way to display things digitally 
                                              using modern web technologies.
                                           </p>
                                        </div>
                                   </div>
                              </div>
                    
       
                         </div>

                                                       <div className="w-[45%] h-auto ">
              
              <Image width={500} height={500}  src="/About1.png" alt="Description" className="w-[100%] h-[100%]  object-cover object-fill " />
                              </div>

                    </div>
               </div> 



  {/* Our service isn’t just personal, it’s actually */}


           <div className="w-[99%] 2xl:w-[1600px] 2xl:h-[75vh] h-[550px] bg-white mx-auto flex mt-11">


                  <div className="sm:w-[52%] sm:h-[70vh]  w-[55%] h-[52vh] mt-12">
                     <Image width={500} height={500} className="w-[100%] h-[100%] object-cover object-center object-fill"  src="/About2.png" alt="menu" />
                  </div>


                  <div className="w-[48%] h-[90%] flex justify-center items-center mt-10 ">
                       <div className="w-[85%] h-[76%] -300 flex flex-col justify-between">
                           <div>
                                <h1 className="2xl:text-3xl text-gray-600">From a studio in London to a global brand withover 400 outlets</h1><br/>

                                <p className="2xl:text-sm text-sm text-gray-500">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p><br/>
                                <p className="2xl:text-sm text-sm text-gray-500" >Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p><br/>
                           </div>

                           <div>     <button className="h-[6vh] 2xl:w-[18%] w-[120px] bg-gray-200 text-white">Get In Touch</button>   </div>

                       </div>
                       
                  </div>
                  
           </div>



              {/* What makes our brand different */}



              <main>
        <div className="sm:w-[28%]  font-sans text-2xl text-gray-500 mx-auto p-10 hover:text-primary mx-auto sm:mt-0 mt-[100px]">
          <p>What makes our brand different</p>
        </div>
      </main>

      <div className="w-[74%] h-[65%] hover:text-blue-800 grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-10 mx-auto">
        <div className="sm:w-[35%] h-[30%] ">
          <div>
            <FaTruckFast />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>

        <div className="sm:w-[35%] h-[30%] ">
           <span>
            <FaRegCheckCircle />
           </span><br />
           <h1>
            Next day as standard
           </h1><br />
           <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
           </p>
        </div>
        <div className="sm:w-[35%] h-[30%] ">
          <div>
            <MdOutlineInbox />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
        <div className="sm:w-[35%] h-[50%] ">
          <div>
            <PiPlantDuotone />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
      </div>




              {/* Join the club and get the benefits */}




              <div className="w-[99%] 2xl:w-[1600px] h-[440px] mx-auto flex justify-center items-center">
                  <div className="w-[100%] h-[80%] bg-gray-100 flex justify-center items-center">
                      <div className="sm:w-[55%] w-[85%] sm:h-[80%] h-[80%] bg-white flex flex-col justify-around">
                           <div className="flex justify-center flex-col items-center">
                                <h1 className="2xl:text-3xl font-sans">Join the club and get the benefits</h1><br/>
                                <p className="w-[50%] 2xl:text-lg text-[10px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                           </div>
                           <div className="flex gap-2 justify-center">
                                <input className="h-[46px] w-[30%] bg-gray-200" type="text" placeholder="your@gmail.com" />  
                                <button className="h-[46px] w-[18%] bg-primary text-white"><Link href="/Sign">Sign Up</Link></button>
                           </div>
                      </div>
                  </div>
            </div>




                           {/* footer */}
                    
               <footer className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-auto bg-primary text-white flex-wrap xl:text-sm text-sm mx-auto flex justify-center">
              <div className="w-[89%] h-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-0 py-8">


   {/*  company */}
                  <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-3xl">Avion</h1>
            <div><a>21 New York Street</a></div>
            <div><a>New York City</a></div>
            <div><a>United States of America</a></div>
            <div><a>432 34</a></div>
                  </div>

{/* social media */}
              <div className="flex items-center gap-4 flex-wrap flex-col sm:ml-0 ml-16">
                 <h1 className="text-xl sm:text-2xl">Social Links</h1><br/>
                <div className="flex flex-row gap-3">
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                  <FaSquareFacebook className="text-2xl sm:text-3xl" />
                  <FaInstagram className="text-2xl sm:text-3xl" />
                  <FaSkype className="text-2xl sm:text-3xl" />
                  <FaTwitter className="text-2xl sm:text-3xl" />
                  <FaPinterestP className="text-2xl sm:text-3xl" />
                </div>
              </div>
        
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

                  {/* Mailing List Section
                  <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-lg sm:text-xl">Join our mailing list</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <input 
                    className="w-full sm:w-[380px] h-[7vh] bg-white opacity-[0.4] text-black px-3 py-2" 
                    placeholder="your@gmail.com" 
                    type="text" 
                />
                <button className="h-[7vh] w-full sm:w-[160px] bg-white text-primary">Sign Up</button>
            </div>
                  </div> */}

                  {/* Footer Bottom Section */}
          <div className="border-t-[1px] 2xl:w-[1500px] flex flex-col sm:flex-row justify-between items-center mx-auto mt-6 ">
          <div className="h-[8vh] flex items-center text-sm sm:text-base mb-4 sm:mb-0">Copyright 2022 Avion LTD</div>
          </div>

          
              </div>
              </footer>


          
        </div>
    );
}