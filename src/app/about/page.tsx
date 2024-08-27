import Footer from "../footer/page";
import Navbar from "../navbar/page";
import {FaPenNib, FaCode, FaBriefcase, FaSmile, FaChartPie} from 'react-icons/fa'

export default function() {

    

    return(
        <div className="bg-white text-black">
            <Navbar />
            <p className="text-[1.4rem] text-[#3EA64C] text-center py-10">About us</p>
            <p className="text-[2.2rem] text-black font-bold text-center">About Tech-Hub Academy</p>
            <p className="text-center w-[95%] xl:w-[60%] font-medium mx-auto xl:text-[1.3rem] py-10">Welcome to <span className="font-bold">Tech Hub Academy</span>, where innovation meets education. We're more than just an academy; we're a vibrant community of passionate learners, dedicated instructors, and industry professionals, all driven by a shared mission to empower individuals with the skills they need to thrive in the ever-evolving world of technology.</p>

           

            <div className="w-[90%] mx-auto justify-items-center pt-10 bg-[#F9FAFB] py-20">

            <p className="text-[#1C4B22] text-center px-2 py-2 font-bold my-2 bg-[#E2F2E4] rounded-3xl w-[7rem] mx-auto">what we do</p>


            <div>
                <p className="text-center text-[1.8rem] font-semibold pt-20">What we do at Tech-Hub Academy</p>
                <p className="text-[#475467] text-center xl:w-[65%] mx-auto text-[0.8rem] xl:text-[1.5rem] py-3">At Tech-Hub Academy, our mission is to provide comprehensive and practical training in technology and related fields. Our programs are designed to equip students with the skills and knowledge they need to succeed in today's rapidly evolving tech industry. Here's an overview of the courses we take:</p>
            </div>
                
                    <div className="xl:grid xl:grid-cols-3 xl:gap-20 flex flex-col py-20 space-y-20 xl:space-y-0">

                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto ">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><FaPenNib /></p>
                            <p className="text-[1rem] font-semibold">Product Design Courses</p>
                            <p className="text-center text-sm text-[#191919] px-4"> Learn the principles of user-centered design, wireframing, prototyping, and usability testing as you explore the entire product development lifecycle. </p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto ">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><FaCode /></p>
                            <p className="text-[1rem] font-semibold">Front-End Development Courses</p>
                            <p className="text-center text-sm text-[#191919] px-4">From HTML and CSS fundamentals to advanced JavaScript frameworks like React and Vue.js, our courses cover the latest tools and techniques used by top frontend developers. </p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1V13M4 13C2.34315 13 1 14.3431 1 16C1 17.6569 2.34315 19 4 19C5.65685 19 7 17.6569 7 16M4 13C5.65685 13 7 14.3431 7 16M16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 5.65685 14.3431 7 16 7ZM16 7C16 9.38695 15.0518 11.6761 13.364 13.364C11.6761 15.0518 9.38695 16 7 16" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </p>
                            <p className="text-[1rem] font-semibold">Back-End Design Courses</p>
                            <p className="text-center text-sm text-[#191919] px-4">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><FaBriefcase /></p>
                            <p className="text-[1rem] font-semibold">Project & Product Management Courses</p>
                            <p className="text-center text-sm text-[#191919] px-4">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><FaSmile /></p>
                            <p className="text-[1rem] font-semibold">Customer Success</p>
                            <p className="text-center text-sm text-[#191919] px-4">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
                            <p className="rounded-lg bg-[#EAECF0] py-3 px-3 text-xl"><FaChartPie /></p>
                            <p className="text-[1rem] font-semibold">Data Analysis</p>
                            <p className="text-center text-sm text-[#191919] px-4">We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                        </div>
                    </div>
                
            </div>

            <div className="">
                <p className="text-[#1C4B22] text-center px-2 py-2 font-bold my-2 bg-[#E2F2E4] rounded-3xl w-[7rem] mx-auto">Careers</p>
                <p className="font-medium text-[2.5rem] text-center py-5">We do not have a placement for now</p>
            </div>
            <Footer />
        </div>
    )
}