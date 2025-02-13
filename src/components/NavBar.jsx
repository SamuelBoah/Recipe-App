import React from 'react';
import { NavbarMenu } from '../mockdata.js/data';
import { SquareMenu } from 'lucide-react';

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <nav>
      <div className="container mx-auto flex justify-between items-center py-8">
  {/* Logo Section */}
  <div className="flex items-center space-x-2">
    <img src="/mobile-logo.jpg" alt="Logo" className="w-12" />
    <p className="text-2xl font-bold text-green-300">SG RECIPE</p>
  </div>

  {/* Menu Section */}
  <div className="hidden md:block absolute left-1/2 ">
    <ul className="flex items-start gap-10 text-gray-600">
      {NavbarMenu.map((item) => (
        <li key={item.id}>
          <a
            href={item.link}
            className="py-2 px-4 flex items-center hover:text-primary"
          >
            {item.title}
          </a>
        </li>
      ))}
      {/* Login Buttons */}
  <div className="flex justify-end gap-12 px-20">
    <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
      Login
    </button>
    <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
      Sign Up
    </button>
  </div>
    </ul>
    
    
  </div>
      
      {/* Mobile Hamburger section */}
    <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
      <SquareMenu className='text-4xl size-8 ml-14' />
    </div>
  </div>
      
       
      </nav>
      {/* Mobile Sidebar section */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
          <ul className="flex flex-col gap-4 text-gray-600">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block py-2 px-4 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Login Buttons */}
          <div className="flex flex-col gap-4 mt-4">
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Login
            </button>
            <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
              Sign Up
            </button>
          </div> 
        </div>
      )}
      
    </>
  )
}

export default NavBar;