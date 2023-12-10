import React from 'react'
import NavigationHeader from './NavigationHeader';
import NavigationHeaderSm from './NavigationHeaderSm';
import { Home } from '../pages/Home';

type Props = {
    children: React.ReactNode
}

function Main({children}: Props) {
  return (
    <div>
        {/* <div className=""> */}
            <NavigationHeader />
        {/* </div> */}
        {/* <div className=""> */}
            {children}
        {/* </div> */}
        {/* <div className="flex justify-center items-center"> */}
            <footer className='font-primary tracking-wider text-m fixed inset-x-0 bottom-4 text-primary-950'>Designed and developed with love by Nabilah Zaid</footer>
        {/* </div> */}
    </div>
  );
}

export default Main;

