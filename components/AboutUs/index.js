import React from 'react';
import About1 from './About1';
import About2 from './About2';

const AboutUs = () => {
    return (
        <div className="bg-[#F0F0F0] md:mt-[170px] py-[50px] w-full flex flex-col items-center justify-center gap-1">
            <About1 />
            <About2 />
        </div>
    );
};

export default AboutUs;