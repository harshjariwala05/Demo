"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonial = {
    text: "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts.",
    name: "John Smith",
    title: "Senior HR Manager at Zendesk",
};

const testimonials = [testimonial, testimonial, testimonial];

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 -left-8 md:-left-[60px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#0050C7] p-2 rounded-full"
        onClick={onClick}
    >
        <FaArrowLeft className="text-white text-[14px]" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 -right-8 md:-right-[60px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#0050C7] p-2 rounded-full"
        onClick={onClick}
    >
        <FaArrowRight className="text-white text-[14px]" />
    </div>
);

const OurCustomers = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 mt-5">
            <h2 className="text-black text-[32px] sm:text-[36px] md:text-[48px] font-black leading-tight text-center mb-10">
                OUR HAPPY CUSTOMERS
            </h2>

            <div className="w-full flex justify-center">
                <div className="relative w-full max-w-[850px] bg-[#F0EEED] rounded-br-[100px] rounded-tl-[100px] px-5 sm:px-8 md:px-12 py-10">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="text-center px-1 sm:px-4">
                                <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 leading-7 mb-6">
                                    {item.text}
                                </p>
                                <h4 className="text-[18px] font-semibold text-black">{item.name}</h4>
                                <p className="text-md text-gray-500">{item.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurCustomers;