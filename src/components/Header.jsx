import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (

        <header>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Code Book" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div className="flex items-center">
                      <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5'><i class="bi bi-gear-wide-connected"></i></span>
                      <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5'><i class="bi bi-search"></i></span>
                      <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5'><i class="bi bi-cart-fill"></i></span>
                      <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5'><i class="bi bi-person-circle"></i></span>
                    </div>
                </div>
            </nav>
        </header>


    )
}
