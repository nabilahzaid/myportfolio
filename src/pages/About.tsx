import React from 'react'
import Main from '../layouts/Main'
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin, SiGithub, SiYoutube, 
    SiAngular, SiVuedotjs, SiReact,
    SiTypescript, SiJavascript, SiHtml5,  
    SiCss3, SiBootstrap, SiTailwindcss,
    SiDotnet, SiCsharp, SiLaravel,
    SiExpress, SiPhp, SiPostman,
    SiPostgresql, SiMysql, SiSqlite,
    SiMicrosoftsqlserver} from "react-icons/si";
import { PiGitlabLogo } from "react-icons/pi";

type Props = {}

export const About = (props: Props) => {
  return (
    <Main>
        <section id="about" className="">
            <div className='w-full grid grid-cols-2 gap-2 pt-32'>
                <div className='relative'>
                    <article className='absolute grid grid-rows-4 gap-10 top-12 text-2xl w-3/4 font-secondary text-left font-semibold text-primary-800 leading-6 tracking-tighter mt-10 ml-36'>
                    <p>As a passionate Application Developer, I am dedicated to exploring and mastering new technologies. My aim is to create innovative solutions that simplify and enhance people's lives. I see technology as a tool for improving everyday efficiency and enjoyment.</p>
                    <p>
                        I value interactions with diverse individuals, especially in the realm of software development. These exchanges provide rich learning opportunities and keep me connected with the latest industry trends. The fast-paced, ever-evolving tech industry excites me, offering endless opportunities for growth and innovation.
                    </p>
                    <p>
                        Life's journey, with its mix of successes and challenges, has taught me the importance of valuing small achievements and appreciating those around me. I am committed to both personal development and positively impacting the wider community through my work.
                    </p>
                    <div className="w-3/5 grid grid-cols-4 gap-0 pt-6">
                        <a href="https://www.linkedin.com/in/nabilah-zairin-md-zaid-430993158/"><SiLinkedin className='text-6xl text-primary-950 hover:text-blue-900' /></a>
                        <a href="https://github.com/nabilahzaid"><SiGithub className='text-6xl text-primary-950 hover:text-black'/></a>
                        <a href="https://twitter.com/belleyangcerdik"><FaXTwitter className='text-6xl text-primary-950 hover:text-black'/></a>
                        <a href="https://www.youtube.com/@coderbelle5858"><SiYoutube className='text-6xl text-primary-950 hover:text-red-700'/></a>
                    </div>
                    </article>
                    <div className="w-full">
                        <div className="text-primary-800 text-opacity-5 text-[218px] font-primary font-semibold z-10">About</div>
                        <div className="text-primary-800 text-opacity-5 text-[250px] font-primary font-semibold -mt-60 -z-10 ml-96">Me</div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 gap-0 -z-10 pt-20">
                    <div>
                        <div id="front-end" className="className">
                            <h1 className="text-secondary-700 font-primary text-3xl font-semibold text-left">Front End Stack</h1>
                            <div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-6 p-6 py-12">
                                <SiAngular className='text-6xl text-primary-950' />
                                <SiVuedotjs className='text-6xl text-primary-950' />
                                <SiReact className='text-6xl text-primary-950' />
                                <SiTypescript className='text-6xl text-primary-950' />
                                <SiJavascript className='text-6xl text-primary-950' />
                                <SiHtml5 className='text-6xl text-primary-950' />
                                <SiCss3 className='text-6xl text-primary-950' />
                                <SiBootstrap className='text-6xl text-primary-950' />
                                <SiTailwindcss className='text-6xl text-primary-950' />
                            </div>
                        </div>
                        <div id="back-end" className="mt-4">
                            <h1 className="text-secondary-700 font-primary text-3xl font-semibold text-left">Back End Stack</h1>
                            <div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-6 p-6 py-12">
                                <SiDotnet className='text-6xl text-primary-950' />
                                <SiCsharp className='text-6xl text-primary-950' />
                                <SiLaravel className='text-6xl text-primary-950' />
                                <SiExpress className='text-6xl text-primary-950' />
                                <SiPhp className='text-6xl text-primary-950' />
                                {/* <SiHtml5 className='text-6xl text-primary-950' />
                                <SiCss3 className='text-6xl text-primary-950' />
                                <SiBootstrap className='text-6xl text-primary-950' />
                                <SiTailwindcss className='text-6xl text-primary-950' /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='belle-pic'>
                            <img src="./IMG_6700.png" alt="" className="backdrop-blur-96 object-cover rounded-full w-80 h-80" />
                        </div>
                        <div id="others" className="mt-12">
                            <h1 className="text-secondary-700 font-primary text-3xl font-semibold text-left">Other Stack</h1>
                            <div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-6 p-6 py-12">
                                <PiGitlabLogo className='text-6xl text-primary-950' />
                                <SiGithub className='text-6xl text-primary-950' />
                                <SiPostman className='text-6xl text-primary-950' />
                                <SiPostgresql className='text-6xl text-primary-950' />
                                <SiMysql className='text-6xl text-primary-950' />
                                <SiSqlite className='text-6xl text-primary-950' />
                                <SiMicrosoftsqlserver className='text-6xl text-primary-950' />
                                {/* <SiBootstrap className='text-6xl text-primary-950' />
                                <SiTailwindcss className='text-6xl text-primary-950' /> */}
                            </div>
                        </div>
                    </div>
                    {/* <p className="text-secondary-400 absolute bottom-96 right-2 w-28 break-words mr-28 text-right leading-5">Microsoft Certified Professional</p> */}
                    {/* <img src="./hijabi-programmer.webp" alt="" className="w-full" /> */}
                </div>
            </div>
        </section>
    </Main>
  )
}