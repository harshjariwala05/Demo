import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const About2 = () => {
    return (
        <div className='w-[90%] mt-10 md:mt-10 max-w-[1240px] flex flex-col md:flex-row items-start justify-around mx-auto gap-8'>
            <div className='flex flex-col items-start gap-6'>
                <div className='text-black text-[33.455px] font-bold leading-normal'>
                    SHOP.CO
                </div>
                <div className='text-[#606060] text-[14px] font-[400] leading-[22px] max-w-[250px]'>
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                </div>

                <div className='flex gap-3 mt-2'>
                    <RiFacebookCircleLine className="w-6 h-6 text-black cursor-pointer hover:text-[#0050C7]" />
                    <FaInstagram className="w-6 h-6 text-black cursor-pointer hover:text-[#0050C7]" />
                </div>
            </div>

            <div className="flex flex-col gap-2 items-start">
                <p className="text-black text-lg font-medium leading-[18px] uppercase my-5">
                    Help
                </p>
                <a href="#" className="text-[#333] hover:underline text-md">Privacy statement</a>
                <a href="#" className="text-[#333] hover:underline text-md">Terms & Conditions</a>
                <a href="#" className="text-[#333] hover:underline text-md">Cookie Policy</a>
            </div>
        </div>
    )
}

export default About2;
