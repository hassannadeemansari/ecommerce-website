import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Image from 'next/image';

const products = [
  { id: 1, name: 'Modern Chair', price: '$120', image: '/hero.png' },
  { id: 2, name: 'Classic Table', price: '$250', image: '/a3.png' },
  { id: 3, name: 'Stylish Sofa', price: '$450', image: '/About1.png' },
  { id: 4, name: 'Wooden Desk', price: '$300', image: '/a2.png' },
  { id: 5, name: 'Elegant Lamp', price: '$80', image: '/a1.png' },
  { id: 6, name: 'Plant Stand', price: '$60', image: '/last.png' },
];

export default function Product() {
  return (
    <div>


    
    {/* Header */}


      <header>
        <div className="flex w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center justify-between">
          <Link href="/" className="2xl:text-2xl">Avion</Link>
          <div className="flex gap-6">
            <Link href="/About">About Us</Link>
            <a>Contact</a>
            <a>Blog</a>
            <div className="flex gap-4">
              <div><Link href="/Shopping"><IoCartOutline /></Link></div>
              <div><Link href="/Sign"><MdOutlineAccountCircle /></Link></div>
              <div><Link href="/Product"><CiSearch /></Link></div>
            </div>
          </div>
        </div>
        <div className="2xl:w-[1500px] w-[90%] border-b-2 mx-auto" />

        <div className="flex mx-auto items-center h-11">
          <div className="flex gap-5 font-sans text-gray-500 mx-auto">
            <Link href="/AllProducts">All Products</Link>
            <Link href="/Product">Product List</Link>
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



   {/* Product Listings */}


      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Product Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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



   {/* Mailing List Section */}




          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-lg sm:text-xl">Join our mailing list</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                className="w-full sm:w-[380px] h-[7vh] bg-white opacity-[0.4] text-black px-3 py-2"
                placeholder="your@gmail.com"
                type="text"
              />
              <button className="h-[7vh] w-full sm:w-[160px] bg-white text-primary">
                <Link href="/Sign">Sign Up</Link>
              </button>
            </div>
          </div>

    {/* Footer Bottom Section */}


          <div className="border-t-[1px] 2xl:w-[1500px] flex flex-col sm:flex-row justify-between items-center mx-auto py-4">
            <div className="h-[8vh] flex items-center text-sm sm:text-base mb-4 sm:mb-0">
              Copyright 2022 Avion LTD
            </div>
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
  );
}
