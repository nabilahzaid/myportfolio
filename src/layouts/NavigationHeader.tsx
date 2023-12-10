import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NavigationHeader = (props: Props) => {
  return (
    <nav className='fixed flex w-full justify-center items-center py-4'>
        <ul className='py-8'>
            <li className='flex w-full justify-center items-center gap-12 font-primary font-bold text-primary-900 text-3xl'>
                <Link className=" hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/home'>Home</Link>
                <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/about-me'>About Me</Link>
                <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/projects'>Projects</Link>
                <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/interest'>Interests</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationHeader