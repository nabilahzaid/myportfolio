import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const NavigationHeader = (props: Props) => {
  return (
    <nav className='fixed flex w-full justify-center items-center py-4'>
        <ul className='py-8'>
            <li className='flex w-full justify-center items-center gap-12 font-primary font-bold text-primary-900 text-3xl'>
                <NavLink to="/home"
                className={({ isActive}) =>
                    [
                    isActive ? "bg-secondary-600 bg-opacity-80 px-6 py-4 text-gray-100" : "",
                    ].join(" ")
                }>Home</NavLink>
                <NavLink to="/about-me"
                className={({ isActive}) =>
                    [
                    isActive ? "bg-secondary-600 bg-opacity-80 px-6 py-4 text-gray-100" : "",
                    ].join(" ")
                }>About Me</NavLink>
                <NavLink to="/projects"
                className={({ isActive}) =>
                    [
                    isActive ? "bg-secondary-600 bg-opacity-80 px-6 py-4 text-gray-100" : "",
                    ].join(" ")
                }>Projects</NavLink>
                <NavLink to="/interest"
                className={({ isPending, isActive, isTransitioning}) =>
                    [
                        isPending ? "over:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" : "",
                        isActive ? "bg-secondary-600 bg-opacity-80 px-6 py-4 text-gray-100" : "",
                        isTransitioning ? "hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" : "",
                    ].join(" ")
                }>Interests</NavLink>
                {/* <Link className=" hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/home'>Home</Link> */}
                {/* <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/about-me'>About Me</Link>
                <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/projects'>Projects</Link>
                <Link className="hover:bg-secondary-600 hover:bg-opacity-80 hover:px-6 hover:py-4 hover:text-gray-100 transition-all duration-1000" to='/interest'>Interests</Link> */}
            </li>
        </ul>
    </nav>
  )
}

export default NavigationHeader