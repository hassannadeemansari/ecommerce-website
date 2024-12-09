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
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* header */}
      <header>
        <div className="flex justify-between w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center">
          <div><a href='AllProducts'><CiSearch /></a></div>
          <h1><Link href="/">Avion</Link></h1>
          <div className="flex gap-5">
            <div><Link href="/Shopping"><IoCartOutline /></Link></div>
            <div><Link href="/Sign"><MdOutlineAccountCircle /></Link></div>
          </div>
        </div>
        <div className="2xl:w-[1500px] w-[90%] border-b-2 mx-auto" />
        <div className="flex mx-auto items-center h-11">
          <div className="flex gap-5 font-sans text-gray-500 mx-auto">
            <a>plants pots</a>
            <a>Ceramics</a>
            <a>Tables</a>
            <a>Chairs</a>
            <a>Crockery</a>
            <a>Tableware</a>
            <a>Cutlery</a>
          </div>
        </div>
      </header>

      {/* hero section */}
      <div className="h-[100vh] 2xl:h-[75vh] 2xl:w-[1600px] mx-auto flex items-center">
        <div className="w-[80%] h-[60vh] bg-red-400 mx-auto">
          <div className="w-full h-full bg-primary flex">
            <div className="w-[55%] text-white pt-10 pl-10 flex flex-col 2xl:gap-[160px]">
              <div>
                <div className="w-[60%] font-sans text-2xl ">
                  <p>The furniture brand for the future, with timeless designs</p>
                </div><br />
                <div>
                  <button className="bg-gray-500 h-12 w-[21%]"><a href="/AllProducts">View Collection</a></button>
                </div>
              </div>
              <div>
                <div className="w-[80%] font-sans font-extralight">
                  <p>A new era in eco-friendly furniture with Avelon, the French luxury retail brand
                    with nice fonts, tasteful colors, and a beautiful way to display things digitally 
                    using modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[45%] h-auto ">
              <Image src="hero.png" alt="Description" className="w-[100%] h-[100%] object-cover object-fill " />
            </div>
          </div>
        </div>
      </div>

      {/* What makes our brand different */}
      <main>
        <div className="w-[28%] font-sans text-2xl text-gray-500 mx-auto p-10 ">
          <p>What makes our brand different</p>
        </div>
      </main>

      <div className="w-[90%] 2xl:w-[1600px] h-[23vh] mx-auto flex mx-auto justify-center gap-16 sm:gap-2 ">
        <div className="w-[13%] h-[30%]">
          <div>
            <FaTruckFast />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm text-[10px] font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>

        <div className="w-[15%] h-[30%] ">
          <div>
            <FaRegCheckCircle />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm text-[10px] font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
        <div className="w-[15%] h-[30%] ">
          <div>
            <MdOutlineInbox />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm text-[10px] font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
        <div className="w-[15%] h-[50%] ">
          <div>
            <PiPlantDuotone />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm text-[10px] font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
      </div>

      {/* New ceramics */}
      <div className="h-[10vh] w-[99%] 2xl:w-[1600px] flex items-end mx-auto text-3xl font-sans 2xl:ml-[180px] " >
        <p> <div>New ceramics</div></p>
      </div>

      <div>
        <div className="w-[90%] 2xl:w-[1600px] h-[50vh] mx-auto flex items-center justify-center">
          <div className="w-[85%] h-[85%] flex justify-center items-center gap-5 flex-wrap ">
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero.png" alt="cart1" /><br />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero2.png" alt="cart2" /><br />
              <p>Rustic Vase Set</p>
              <p>£155</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%]  overflow-hidden">
              <Image className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero3.png" alt="cart3" /><br />
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero4.png" alt="cart4" /><br />
              <p>The Lucy Lamp</p>
              <p>£399</p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto justify-center 2xl:mt-[10px] mt-[450px]"><button className="bg-gray-300 h-12 w-[14%]"><Link href="/AllProducts">View Collection</Link></button></div>
      </div>

      {/* cards */}
      <div>
        <div className="h-[10vh] w-[99%] 2xl:w-[1600px] flex items-end mx-auto text-3xl font-sans 2xl:ml-[100px] 2xl:mt-2 mt-[60px]">
          <p> <div>Our popular products</div></p>
        </div>

        <div className="w-[98%] 2xl:w-[1600px] h-[83vh]  mx-auto flex items-center">
          <div className="w-[87%] h-[86%] mx-auto flex items-center gap-5">
            <div className="w-[47%] h-[90%]">
              <Image className="w-[100%] h-[80%] object-cover object-center object-fill" src="card1.jpg" alt="c1" /><br />
              <p>The Poplar suede sofa</p>
              <p>£250</p>
            </div>
            <div className="w-[47%] h-[90%]">
              <Image className="w-[100%] h-[80%] object-cover object-center object-fill" src="hero.png" alt="c2" /><br />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="w-[47%] h-[90%]">
              <Image className="w-[100%] h-[80%] object-cover object-center object-fill" src="card3.png" alt="c3" /><br />
              <p>The Dandy chair</p>
              <p>£980</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-center 2xl:mt-[-80px]"><button className="bg-gray-300 h-12 w-[14%]"><Link href="/AllProducts">View Collection</Link></button></div>
      </div>
      <br />
      <br />



      {/* From a studio in London to a global brand with */}


      <div className="w-[99%] 2xl:w-[1600px] 2xl:h-[75vh] h-[550px] bg-white mx-auto flex">
               <div></div>
                  <div className="w-[48%] h-[90%] flex justify-center items-center ">
                       <div className="w-[85%] h-[76%] -300 flex flex-col justify-between">
                           <div>
                                <h1 className="2xl:text-3xl text-gray-600">From a studio in London to a global brand withover 400 outlets</h1><br/>

                                <p className="2xl:text-sm text-sm text-gray-500">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p><br/>
                                <p className="2xl:text-sm text-sm text-gray-500" >Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p><br/>
                           </div>

                           <div>     <button className="h-[6vh] 2xl:w-[18%] w-[30%] bg-gray-400 text-white">Get In Touch</button>   </div>

                       </div>
                       
                  </div>

                  <div className="w-[52%] h-full">
                     <Image className="w-[100%] h-[100%] object-cover object-center object-fill"  src="last.png" alt="menu" />
                  </div>
                  
           </div>



   {/* Join the club and get the benefits */}




           <div className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-[400px] mx-auto flex justify-center items-center">
                  <div className="w-[100%] h-[80%] bg-gray-100 flex justify-center items-center">
                      <div className="w-[55%] h-[80%] bg-white flex flex-col justify-around">
                           <div className="flex justify-center flex-col items-center">
                                <h1 className="2xl:text-3xl font-sans">Join the club and get the benefits</h1><br/>
                                <p className="w-[50%] 2xl:text-lg text-[10px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                           </div>
                           <div className="flex gap-2 justify-center">
                                <input className="h-[6vh] w-[30%] bg-gray-200" type="text" placeholder="your@gmail.com" />  
                                <button className="h-[6vh] w-[18%] bg-primary text-white"><Link href="/Sign">Sign Up</Link></button>
                           </div>
                      </div>
                  </div>
            </div>



      {/* Footer */}
      <footer className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-auto bg-primary text-white flex-wrap xl:text-sm text-sm mx-auto flex justify-center">
        <div className="w-[89%] h-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-0 py-8">

          {/* Menu Section */}
          <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Menu</h1>
            <div><a>New Arrivals</a></div>
            <div><a>Best Sellers</a></div>
            <div><a>Recently Viewed</a></div>
            <div><a>Popular This Week</a></div>
            <div><a href="/AllProducts">All Products</a></div>
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
            <div><a>Our Story</a></div>
            <div><a>Terms & Conditions</a></div>
            <div><a>Privacy Policy</a></div>
            <div><a>Returns & Refunds</a></div>
          </div>

          {/* Social Media Section */}
          <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Follow Us</h1>
            <div><FaLinkedin /></div>
            <div><FaSquareFacebook /></div>
            <div><FaInstagram /></div>
            <div><FaSkype /></div>
            <div><FaTwitter /></div>
            <div><FaPinterestP /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
