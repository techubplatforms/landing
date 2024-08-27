"use client"

import Image from "next/image"
import image1 from '../images/people-practicing-social-integration-workspace 1.png'
import image2 from '../images/content.png'
import image3 from '../images/image content.png'
import image4 from '../images/programming-background-with-person-working-with-codes-computer 1.png'
import image5 from '../images/html-css-collage-concept-with-person 1.png'
import image6 from '../images/overlay.png'
import Footer from "../footer/page"

export default function Body() {
    
    return(
        <div className="text-black bg-white font-urbanist ">
            <div className="relative border-box">
             <div className="relative inset-0 z-10">
            <Image src={image1} alt="image" width={7000}  className="h-[450px] xl:h-[700px] xl:w-screen xl:max-h-[100rem] object-cover"/>
            </div>
            <div className="absolute z-10 inset-0">
                <Image src={image6} alt="yam" className="z-10 inset-0 absolute xl:h-[700px] h-[450px]"/>
                <div className="xl:w-[60%] mx-5 xl:ml-[10rem] xl:my-[5rem] py-[5rem] onset-0 absolute z-20">
                <div className="z-40 ">
                <p className="text-[1.9rem] text-center xl:text-left xl:text-[3.5rem] xl:w-[70%] font-bold text-white opacity-100">Design the Future with Product Design</p>
                <p className="text-white text-[0.9rem] xl:w-[80%] font-medium opacity-100 text-center xl:text-left">Transform your ideas into impactful digital products with our product design courses. Learn user-centered design principles, wireframing, prototyping, and usability testing to create intuitive and visually stunning products that delight users and drive business success.</p>
                </div>
                <div className="mt-3 flex flex-col xl:flex-row xl:space-y-0 space-y-3 gap-5">
                    <button className="bg-[#2F7D39] text-white px-4 py-4 rounded-lg xl:mx-0 mx-auto xl:w-auto w-3/4">Register Now</button>
                    <button className="text-white bg-transparent px-4 py-3 rounded-lg xl:mx-0 mx-auto xl:w-auto w-3/4 outline-white outline">Read More</button>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-[#ECF6ED] flex flex-col xl:flex-row space-x-4 xl:px-40 pt-20">
                <div className="flex flex-col w-[90%] xl:w-[95%] mx-auto">
                    <p className="text-black text-center xl:text-left mt-4 text-[1.3rem] xl:text-[2.5rem] font-medium pb-3">About Us</p>
                    <p className="text-black text-center xl:text-left text-[1.3rem] xl:text-[1.7rem] pb-3 xl:w-[80%] font-urbanist">Welcome to <span className="font-bold italic">Techub Academy</span>, where innovation meets education. We're more than just an academy; we're a vibrant community of passionate learners, dedicated instructors, and industry professionals, all driven by a shared mission to empower individuals with the skills they need to thrive in the ever-evolving world of technology.</p>
                    <button className="bg-[#2F7D39] px-8 py-2 mx-auto xl:mx-0 rounded-lg w-[20rem] text-black mb-10">Read More</button>
                </div>
                <div className="w-[95%] mx-auto">
                    <Image src={image2} alt="black" width={500} className="rounded-lg w-[500px] xl:h-[700px] pb-10 opacity-75"/>
                </div>
            </div>

            <div className="bg-white w-[82%] mx-auto py-5">
                <p className="text-black font-medium text-[2.5rem] pb-10">Our Courses</p>
                <div className="flex flex-col xl:flex-row slide-in-left">
                    <Image src={image3} alt="image" width={500} className="xl:flex hidden"/>
                    <div className="xl:w-[50%] mx-auto flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Product Design</p>
                        <p className="text-[1rem] font-medium flex items-center">Transform your ideas into impactful digital products with our product design courses. Learn the principles of user-centered design, wireframing, prototyping, and usability testing as you explore the entire product development lifecycle. Whether you're designing web applications, mobile apps, or software interfaces, our courses will equip you with the skills and knowledge to create intuitive, visually stunning, and user-friendly products that delight users and drive business results.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-4">Start Course</button>
                    </div>
                    <Image src={image3} alt="image" width={700} className="xl:hidden pt-10"/>
                </div>

                <div className="flex flex-col xl:flex-row pt-20 slide-in-right">
                    <div className="xl:w-[50%] mr-4 flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Front-End Development</p>
                        <p className="text-[1rem] font-medium flex items-center w-[100%]">Bring your designs to life and create seamless user experiences with our frontend engineering courses. From HTML and CSS fundamentals to advanced JavaScript frameworks like React and Vue.js, our courses cover the latest tools and techniques used by top frontend developers. Dive deep into responsive design, accessibility, and performance optimization as you build dynamic and interactive web applications that captivate users and drive engagement.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-2">Start Course</button>
                    </div>
                    <Image src={image4} alt="image" width={500} className="rounded-3xl py-5"/>
                </div>

                <div className="flex flex-col xl:flex-row pt-20 slide-in-left">
                <Image src={image5} alt="image" width={500} className="rounded-3xl xl:flex hidden"/>
                    <div className="xl:w-[50%] mx-auto flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Back-End Design</p>
                        <p className="text-[1rem] font-medium flex items-center">Unlock the power of server-side programming with our comprehensive backend development courses. Whether you're a beginner looking to build a strong foundation or an experienced developer seeking to expand your skill set, our courses cover everything from database management and API design to server deployment and optimization. With hands-on projects and real-world scenarios, you'll gain the expertise you need to create robust, scalable, and secure backend systems.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-2">Start Course</button>
                    </div>
                    <Image src={image5} alt="image" width={700} className="rounded-3xl xl:hidden py-5"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}