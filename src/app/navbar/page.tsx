"use client"

import Image from "next/image"
import image1 from '../images/logo.png'
import Link from "next/link"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react"

export default function Navbar() {

        const [isOpened, setIsOpened] = useState(false)
        
        const handleNavbar = () => {
            setIsOpened(!isOpened)
            
        }

        

        return(
            <div className="font-urbanist">
                <div className="bg-white xl:hidden">
                    <div className="flex flex-row justify-between">
                        <Image src={image1} alt="image" className="px-4 py-4"/>

                        <button className="text-black text-4xl px-4 py-3" onClick={handleNavbar}> {isOpened ? <FaTimes /> : <FaBars />}</button>

                    </div>
                    {isOpened && (
                    <div className="flex flex-col text-[#808080] items-center w-[90%] mx-auto space-y-4 pb-5 items-center text-[20px]">
                    <Link href={'/'}><p className="border-b-[#C3E3C8] border-b-2">Home</p></Link>
                    <Link href={'/about'}><p className="border-b-[#C3E3C8] border-b-2 ">About Us</p></Link>
                    <Link href={'/courses'}><p className="border-b-[#C3E3C8] border-b-2">Courses</p></Link>
                    <Link href={'/contact'}><p className="border-b-[#C3E3C8] border-b-2">Contact</p></Link>
                </div> 
                )}
                </div>
            <div className="bg-[#FFFFFF] flex flex-row justify-between py-3 items-center shadow-xl hidden xl:flex ">
            <Image src={image1} alt="logo" className="ml-8"/>
            <div className="flex flex-row text-[#808080] justify-between w-[50%] items-center text-[20px]">
                <Link href={'/'}><p className="hover:text-green-700">Home</p></Link>
                <Link href={'/about'}><p className="hover:text-green-700">About Us</p></Link>
                <Link href={'/courses'}><p className="hover:text-green-700">Courses</p></Link>
                <Link href={'/contact'}><p className="hover:text-green-700">Contact</p></Link>
            </div> 
            <button className="bg-[#2F7D39] text-white px-4 mr-8 py-2 rounded-lg h-[35px] flex items-center">Register Now</button>
            </div>
        </div>
    )
}