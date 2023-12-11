import React from 'react'
import Main from '../layouts/Main'

type Props = {}

export const Interest = (props: Props) => {
  return (
    <Main>
        <section id="interests" className="">
            <div className='w-full grid grid-cols-2 gap-2 pt-32'>
                <div className='relative'>
                    <article className='absolute flex flex-col gap-y-8 top-12 text-2xl w-3/4 font-secondary text-left font-semibold text-primary-800 leading-6 tracking-tighter mt-10 ml-36'>
                    {/* <p>As a developer, my professional life is deeply rooted in technology. However, my interests extend far beyond the confines of my work.</p> */}
                    <p>One of my favorite pastimes is gardening. In my garden, I find a peaceful retreat, nurturing each plant and watching it thrive. This hobby offers me a serene escape from the digital world, allowing me to connect with nature and find tranquility.</p>
                    <p>In addition to gardening, I have a keen interest in languages, particularly Korean and Japanese. Studying these languages challenges my mind in new and exciting ways, enhancing my cultural understanding and providing a fulfilling intellectual pursuit.</p>
                    <p>
                    Beyond these personal hobbies, I am actively engaged with the Malaysian Tech Twitter community and various Discord channels. These platforms allow me to stay connected with the latest trends and developments in the tech industry. Through these interactions, I learn from others, share my insights, and stay at the forefront of technological advancements.
                    </p>
                    <p>
                    Lastly, I regularly visit StackOverflow. This site is a treasure trove of technical knowledge, where I can delve into a wide range of questions and answers. This not only keeps me updated on new technologies and methodologies but also sharpens my problem-solving skills and broadens my technical expertise.
                    </p>
                    </article>
                    <div className="w-full">
                        <div className="text-primary-800 text-opacity-5 text-[218px] font-primary font-semibold mt-96 ml-32">Interests</div>
                    </div>
                </div>
                <div className="w-full pt-36">
                    <img src="./undraw_reading_time_re_phf7.svg" alt="" className="w-full transform -scale-x-100" />
                </div>
            </div>
        </section>
    </Main>
  )
}