import React from 'react'
import Main from '../layouts/Main';

type Props = {}

export const Home = (props: Props) => {
  return (
    <Main>
        <section className="">
            <div className='w-full flex justify-center items-center pt-32'>
                <div className=''>
                    <div className="text-primary-800 text-[218px] font-primary font-semibold z-10">Nabilah</div>
                    <div className="text-primary-800 text-opacity-40 text-[250px] font-primary font-semibold -mt-60 -z-10 ml-80">Zaid</div>

                    <article className='text-2xl w-3/5 font-secondary text-left font-medium text-primary-800 leading-7 tracking-tighter mt-10 ml-36'>
                    Experienced Web Developer with expertise in Laravel, .Net Core, and modern front-end tech, focused on building transformative web solutions.
                    </article>
                </div>
                <div className="relative w-2/3 -z-10">
                <p className="text-secondary-400 absolute bottom-96 right-2 w-28 break-words mr-28 text-right leading-5">Microsoft Certified Professional</p>
                <img src="./hijabi-programmer.webp" alt="" className="w-full" />
                </div>
            </div>
        </section>
    </Main>
  );
}