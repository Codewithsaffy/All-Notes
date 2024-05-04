import React from 'react'


function Navebar() {

  return (
<>
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-2xl">Logo</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
            </div>
            </div>
            </div>
            </nav>
    </>
  )
}

export default Navebar
