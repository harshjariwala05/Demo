import { Sparkle } from 'lucide-react';
import Icon from '../Icon/Icon';

const FirstOne = () => {
    return (
        <div className='flex flex-row items-center justify-center w-full mt-[78px] bg-[#F2F0F1] '>
            <div className=' max-w-[1240px] py-[103px] px-0 gap-12 flex flex-col items-start  justify-center '>
                <div className='flex relative gap-8 flex-col items-start justify-start '>
                    <div className=' text-black font-[IntegralCF] text-[64px] font-bold leading-16  relative max-w-[577px]  ' >
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                        <div className="absolute top-[-35px] right-[-100px]">
                            <Icon size={92} color="black" fill="black" />
                        </div>

                        <div className="absolute top-[unset] right-[unset] bottom-[-75px] left-[-90px]">
                            <Icon size={40} color="black" fill="black" />
                        </div>
                    </div>
                    <div className='text-[rgba(0, 0, 0, 0.6)] text-[16px] text-center font-[400px] leading-[22px] max-w-[545px]  '>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </div>
                    <div className='py-4 px-[54px] text-white text-[16px] font-[500] cursor-pointer rounded-[62px] bg-black '>Shop Now</div>
                </div>
                <div className=' flex gap-4 '>
                    <div className=' pl-4 border-none  flex flex-col items-start  justify-start  '>
                        <div className='text-black text-[40px] font-bold font-[Satoshi]  '>200+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]  '>International Brands</div>
                    </div>
                    <div className='border-l-1 border-gray-300 pl-4 flex flex-col items-start justify-start  '>
                        <div className='text-black font-[Satoshi] text-[40px] font-bold '>2000+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]  '>High-Quality Products</div>
                    </div>
                    <div className='border-l-1 border-gray-300 pl-4 flex flex-col items-start justify-start  '>
                        <div className='text-black font-[Satoshi] text-[40px] font-bold '>30,000+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]  '>Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstOne