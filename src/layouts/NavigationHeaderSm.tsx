import React from 'react'

type Props = {}

const NavigationHeaderSm = (props: Props) => {
  return (
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-primary-800-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-primary-800 border-r overflow-y-auto">
        <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
            <img
                className="h-6"
                src="vendia-assets/logos/vendia-dark.svg"
                alt=""
                width="auto"
            />
            </a>
            <button className="navbar-close">
            <svg
                className="h-6 w-6 text-primary-800-500 cursor-pointer hover:text-primary-800-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
        </div>
        <div>
            <ul>
            <li className="mb-1">
                <a
                className="block p-4 font-medium text-black hover:bg-primary-800-50"
                href="#"
                >
                Home
                </a>
            </li>
            <li className="mb-1">
                <a
                className="block p-4 font-medium text-black hover:bg-primary-800-50"
                href="#"
                >
                About Me
                </a>
            </li>
            <li className="mb-1">
                <a
                className="block p-4 font-medium text-black hover:bg-primary-800-50"
                href="#"
                >
                Projects
                </a>
            </li>
            <li className="mb-1">
                <a
                className="block p-4 font-medium text-black hover:bg-primary-800-50"
                href="#"
                >
                Interests
                </a>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default NavigationHeaderSm