import React from 'react'
import Main from '../layouts/Main'

type Props = {}

export const Interest = (props: Props) => {
  return (
    <Main>
        <section className="h-screen">
            <div className="w-full flex justify-center items-center">
                <img src="./undraw_reading_time_re_phf7.svg" alt="" className="h-96"/>
            </div>
            <article className="mt-20">
                <p className="font-semibold">Apart from being a developer, I enjoy most of my time gardening or learning Korean and Japanese. Additionally, I like going through StackOverflow to look at the questions and learn from the questions and answers given.</p>
            </article>
        </section>
    </Main>
  )
}