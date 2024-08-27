import Image from "next/image"
import image1 from '../images/potrait kini.jpeg'
import image2 from '../images/programming-background-with-person-working-with-codes-computer 1.png'
import image3 from '../images/backend 2.jpeg'
import Navbar from "../navbar/page"
import Footer from "../footer/page"

export default function Courses() {
    return(
        <div className="bg-white text-black font-urbanist">
            <Navbar />
            <p className="text-[#3EA64C] text-center text-[1.4rem] pt-20">Courses</p>
            <p className="font-bold text-[2.9rem] text-center pt-5">Start Your Tech Education Here</p>

            <div className="slide-in">
            <div className="rounded-3xl relative w-[80%] mx-auto xl:h-[700px] overflow-hidden">
                <Image src={image1} alt="images" className=" rounded-3xl xl:h-[700px]"/>
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#00000066] to-[#00000066] rounded-3xl xl:h-[1000px]">
                    <div className="xl:w-[30%] w-[60%] mx-auto h-[200px] xl:mt-[25rem] mt-20 bg-trnsparent">
                    <p className="text-center xl:text-[3.6rem] font-bold text-white">Product Design</p>
                    <p className="bg-[#C3E3C8] text-[1.1rem] text-center flex items-center justify-center w-[12rem] font-medium mx-auto py-2 rounded-xl">Register</p>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl relative w-[80%] mx-auto xl:h-[800px] overflow-hidden mt-10">
                <Image src={image2} alt="image" className=" rounded-3xl xl:h-[800px]"/>
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#00000066] to-[#00000066] rounded-3xl xl:h-[1000px]">
                    <div className="xl:w-[30%] w-[60%] mx-auto h-[200px] xl:mt-[30rem] mt-20 bg-trnsparent">
                        <p className="text-center xl:text-[3.6rem] font-bold text-white">Front-End Design</p>
                        <p  className="bg-[#C3E3C8] text-[1.1rem] text-center flex items-center justify-center w-[12rem] font-medium mx-auto py-2 rounded-xl">Register</p>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl relative w-[80%] mx-auto xl:h-[600px] overflow-hidden mt-10">
                <Image src={image3} alt="image" className=" rounded-3xl xl:h-[600px]"/>
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#00000066] to-[#00000066] rounded-3xl xl:h-[1000px]">
                    <div className="xl:w-[30%] w-[60%] mx-auto h-[200px] xl:mt-[20rem] mt-20 bg-trnsparent">
                        <p className="text-center xl:text-[3.6rem] font-bold text-white">Back-End Design</p>
                        <p className="bg-[#C3E3C8] text-[1.1rem] text-center flex items-center justify-center w-[12rem] font-medium mx-auto py-2 rounded-xl">Register</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}