import React from 'react'
import NavigationHeader from './NavigationHeader';
import NavigationHeaderSm from './NavigationHeaderSm';
import { Home } from '../pages/Home';
import { Analytics } from '@vercel/analytics/react';

type Props = {
    children: React.ReactNode
}

function Main({children}: Props) {
  return (
    <div>
        <NavigationHeader />
        {children}
        <Analytics />
        <footer className='font-primary tracking-wider text-m fixed inset-x-0 bottom-4 text-primary-950'>Designed and developed with love by Nabilah Zaid</footer>
    </div>
  );
}

export default Main;

