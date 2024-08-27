import { FaLocationCrosshairs, FaLocationPin } from "react-icons/fa6";
import Navbar from "../navbar/page";
import { FaLinkedin, FaInstagram, FaLocationArrow, FaPhone } from 'react-icons/fa'
import Footer from "../footer/page";

export default function Contact() {
    return(
        <div className="bg-white text-black font-urbanist">
            <Navbar />
            <p className="text-[#3EA64C] text-center text-[1.3rem] pt-20">Contact us</p>
            <p className="text-center font-bold text-[2.9rem] pt-10 pb-10">We'd love to hear from you</p>

            <div className="w-[85%] mx-auto flex flex-col xl:flex-row justify-around">
                <div className="bg-[#ECF6ED] rounded-lg flex flex-col py-4 w-[80%] mx-auto mb-10 xl:w-1/5">
                    <p className="bg-[#389544] px-3 py-3 text-[1.2rem] text-white mx-4 my-4 w-[3rem]"><FaLinkedin /></p>
                    <p className="pt-8 mx-4 font-medium">Chat to Linked-in</p>
                    <p className="text-[#32853D] mx-4 pt-5">sales@untitledui.com</p>
                </div>

                <div className="bg-[#ECF6ED] rounded-lg flex flex-col py-4 w-[80%] mb-10 mx-auto xl:w-1/5">
                    <p className="bg-[#389544] px-3 py-3 text-[1.2rem] text-white mx-4 my-4 w-[3rem]"><FaInstagram/></p>
                    <p className="pt-8 mx-4 font-medium">Chat to us on Instagram</p>
                    <p className="text-[#32853D] mx-4 pt-5">sales@untitledui.com</p>
                </div>

                <div className="bg-[#ECF6ED] rounded-lg flex flex-col py-4 w-[80%] mx-auto mb-10 xl:w-1/5">
                    <p className="bg-[#389544] px-3 py-3 text-[1.2rem] text-white mx-4 my-4 w-[3rem]"><FaLocationPin /></p>
                    <p className="pt-8 mx-4 font-medium">Visit us </p>
                    <p className="text-[#32853D] mx-4 pt-5">Abiodun Shobajo Street, Agidingbi, Ikeja, Lagos</p>
                </div>

                <div className="bg-[#ECF6ED] rounded-lg flex flex-col py-4 w-[80%] mx-auto mb-10 xl:w-1/5">
                    <p className="bg-[#389544] px-3 py-3 text-[1.2rem] text-white mx-4 my-4 w-[2.8rem]"><FaPhone /></p>
                    <p className="pt-8 mx-4 font-medium">Call us</p>
                    <p className="text-[#32853D] mx-4 pt-5">+1 (555) 000-0000</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}