import Icon from '../Icon/Icon';

const FirstOne = () => {
    return (
        <section className="w-full bg-[#F2F0F1] flex justify-center px-4 md:py-[103px] flex-row items-center mt-[78px] bg-[#F2F0F1]'">
            <div className="max-w-[1240px] flex flex-col items-center text-center relative gap-8">

                <div className='flex gap-[18px] md:gap-8 flex-col sm:items-start sm:justify-start'>
                    <div className=' flex text-black text-[36px] font-[IntegralCF] md:text-[64px] font-bold md:leading-16   max-w-[577px] lg:text-left  md:text-center text-left  ' >
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                        <div className="absolute top-[-35px] right-[-100px] hidden lg:block">
                            <Icon size={92} color="black" fill="black" />
                        </div>

                        <div className="absolute bottom-[205px] left-[-90px] hidden lg:block">
                            <Icon size={45} color="black" fill="black" />
                        </div>

                    </div>
                    <div className='text-[rgba(0, 0, 0, 0.6)] text-[16px] text-left justify-start align-start lg:text-center font-[400] leading-[22px] max-w-[545px]  '>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </div>
                    <div className='py-4 px-[54px] text-white text-[16px] font-[500] cursor-pointer rounded-[62px] bg-black md:text-center md:justify-center md:items-center '>
                        <button>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className=' flex flex-wrap justify-center lg:ml-[-80px] gap-4 '>
                    <div className=' pl-4 border-none  flex flex-col items-start  justify-start  '>
                        <div className='text-black text-[40px] font-bold font-[Satoshi] `  '>200+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]  '>International Brands</div>
                    </div>
                    <div className='border-l-1 border-gray-300 pl-4 flex flex-col items-start justify-start  '>
                        <div className='text-black font-[Satoshi] text-[40px] font-bold '>2000+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]  '>High-Quality Products</div>
                    </div>
                    <div className='pl-0 md:pl-4 flex flex-col items-start justify-start border-l-0 md:border-l md:border-gray-300'>
                        <div className='text-black font-[Satoshi] text-[40px] font-bold'>30,000+</div>
                        <div className='text-gray-600 text-[16px] font-[400] leading-[22px] font-[Satoshi]'>Happy Customers</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FirstOne