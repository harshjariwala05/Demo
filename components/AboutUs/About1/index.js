import React from 'react';
import { MdForwardToInbox } from 'react-icons/md';

const About1 = () => {
    return (
        <div className="w-[90%] max-w-[1240px] md:mt-[-200px]">
            <div className="bg-black rounded-[20px] px-6 py-10 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-white text-[24px] md:text-[40px] font-bold text-center md:text-left leading-tight md:leading-[48px] max-w-[550px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>

                <div className="flex flex-col items-center md:items-end gap-4 w-full max-w-[300px]">
                    <div className="flex items-center bg-white px-4 py-3 rounded-full w-full">
                        <MdForwardToInbox className="text-gray-500 w-6 h-6 mr-2" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="outline-none w-full bg-transparent text-gray-700 text-sm"
                        />
                    </div>

                    <button className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-full w-full">
                        Send Us For Notification
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About1;