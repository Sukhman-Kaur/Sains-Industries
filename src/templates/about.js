import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'

const About = () => (
    <>
        <Breadcrumbs>
            <Link to="/">Home</Link>
            About
        </Breadcrumbs>
        <section id="about" className="py-16">
            <div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                <img
                    style={{height: '450px'}}
                    alt="dining room"
                    className="object-cover rounded w-full bg-gray-100"
                    src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
                />
                <article>
                    <div>
                        <h2 className="font-bold">About Us</h2>
                        <div className="w-24 h-1 mt-3 bg-blue-600"/>
                    </div>
                    <p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
Incepted in the year 1966, we are proud to introduce ourselves 
as a well established name in the manufacturer and suppliers of an 
extensive range of Lathe Machines & Lathe Chucks.
Quality is our trademark and we make sure that it is maintained at 
each level of production process. We undertake rigorous measures while fabricating our range of machines, so as to assure that it corresponds to international standards. Further, we have facilitated our manufacturing unit with technically sound machines & equipment that enables us to manufacture machines with utmost precision. Client satisfaction is the sole aim of our organization and our efficient team work round the clock to meet their requirements. We make sure that our range is offered to our clients within the committed time frame</p>
                </article>
            </div>
        </section>
    </>
)

export default About