import React, { useEffect, useState } from 'react'
import Main from '../layouts/Main'
import data from '../json/projectlist.json'
import { SiLinkedin, SiGithub, SiYoutube, 
  SiAngular, SiVuedotjs, SiReact,
  SiTypescript, SiJavascript, SiHtml5,  
  SiCss3, SiBootstrap, SiTailwindcss,
  SiDotnet, SiCsharp, SiLaravel,
  SiExpress, SiPhp, SiPostman,
  SiPostgresql, SiMysql, SiSqlite,
  SiMicrosoftsqlserver, SiJquery, SiOracle,
  SiFlutter, SiDart, SiIonic} from "react-icons/si";
import { PiGitlabLogo } from "react-icons/pi";

type Props = {}
const projects = data.projects;
type StackKey = 'dotnet' | 'csharp' | 'laravel' | 'php' | 'javascript' | 'bootstrap' | 'github' |
                  'angular' | 'vue' | 'react' | 'typescript' | 'html' | 'css' | 'tailwind' | 'express' |
                  'postman' | 'postgres' | 'mysql' | 'sqlite' | 'sqlserver' | 'jquery' | 'oracle' | 'flutter' | 
                  'dart' | 'ionic';
const componentMap: {[key in StackKey]?: React.ComponentType<any>} = {
  dotnet: SiDotnet,
  csharp: SiCsharp,
  laravel: SiLaravel,
  php: SiPhp,
  javascript: SiJavascript,
  bootstrap: SiBootstrap,
  github: SiGithub,
  angular: SiAngular,
  vue: SiVuedotjs,
  react: SiReact,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  tailwind: SiTailwindcss,
  express: SiExpress,
  postman: SiPostman,
  postgres: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  sqlserver: SiMicrosoftsqlserver,
  jquery: SiJquery,
  oracle: SiOracle,
  flutter: SiFlutter,
  dart: SiDart,
  ionic: SiIonic
}

export const Project = (props: Props) => {
  // useState is use to initialize clickedProject
  const [clickedProject, setClickProject] = useState({ "project": {
      "id": "1",
      "title": "Application Development for Government Agencies",
      "details": "As the leader of a software engineering team, I specialized in developing and maintaining web applications for various government agencies. A key part of my role was to redesign the application architecture, focusing on quality, scalability, and enhanced usability to meet the specific needs of government clients.\n\n I provided mentorship to junior team members, ensuring adherence to best practices and coding standards, and organized development documentation and standard operating procedures to improve our workflow. My efforts in optimizing application performance and reliability through bug fixes and testing were crucial. In working closely with government clients, I gathered their requirements to deliver tailored technical solutions and conducted training sessions on the developed applications to ensure their effective use. This role required a blend of technical expertise and a deep understanding of government agency needs, contributing to the creation of efficient and high-quality web applications.",
      "status": "LAUNCHED",
      "year": 2022,
      "role": "Application Developer",
      "stack_use": [
        "dotnet",
        "csharp",
        "laravel",
        "jquery",
        "php",
        "javascript",
        "bootstrap",
        "postgresql",
        "mysql",
        "oracle",
        "sqlserver"
      ]
    }
  })
  
  // console.log(projects);
  const arrListItems = projects.map((project) => 
    <li id={project.id} 
      onClick={()=> setClickProject({project})}
      onMouseOver={()=> setClickProject({project})}
      className="uppercase hover:text-4xl hover:font-semibold transition-all duration-500 hover:cursor-pointer">{project.title}</li>);

  const arrStackUsed = clickedProject.project.stack_use.map((stack) => {
        const key = stack as StackKey; // Cast the string to StackKey type
        const Component = componentMap[key];
        return Component ? <Component className='text-6xl text-primary-950' /> : null;
      });
      
  return (
    <Main>
      <section id="interests" className="">
            <div className='w-full h-screen grid grid-cols-2 gap-2 pt-32'>
                <div className='relative'>
                  <ul className="absolute font-secondary text-left font-medium text-primary-800 leading-9 tracking-wider text-xl mt-20 ml-36 w-3/5">
                    {arrListItems}
                  </ul>
                  <div className="w-full">
                      <div className="text-primary-800 text-opacity-5 text-[218px] font-primary font-semibold mt-64 ml-32">Projects</div>
                  </div>
                </div>
                <div className="rounded-3xl overflow-auto w-5/6 mt-12 py-14 px-16 text-justify font-primary h-5/6 bg-secondary-700 bg-opacity-20 ">
                  <p className="whitespace-pre-line">{clickedProject?.project?.details}</p>
                  <div className="flex justify-between mt-10">
                    <div id="stack_use" className='flex flex-row flex-wrap gap-y-4 gap-x-4 w-3/5'>
                      {arrStackUsed}
                    </div>
                    <div className='font-secondary text-right'>
                      {/* <p>STATUS : {clickedProject?.project?.status}</p> */}
                      <p className=''>YEAR : {clickedProject?.project?.year}</p>
                      <p className='mt-6 uppercase'>ROLE : {clickedProject?.project?.role}</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </Main>
  )
}