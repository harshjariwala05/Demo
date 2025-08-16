"use client"
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: "Shop", hasDropdown: true },
        { label: "On Sale", hasDropdown: false },
        { label: "New Arrivals", hasDropdown: false },
        { label: "Brands", hasDropdown: false },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 w-full flex justify-center py-5 px-[10px]  z-[50] bg-white">
                <nav className="flex items-center w-full max-w-[1280px] gap-10">
                    <div className="text-black text-[32px] cursor-pointer font-bold font-[IntegralCF]">
                        SHOP.CO
                    </div>

                    <ul className="hidden lg:flex list-none items-center gap-5 pl-10">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative flex text-[16px] font-[400] cursor-pointer items-center gap-[5px] font-[Satoshi]"
                            >
                                {item.label}
                                {item.hasDropdown && (
                                    <span className="text-[12px]">
                                        <FaAngleDown />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex rounded-[62px] bg-[#f0f0f0] py-3 px-4 gap-4 flex-1 max-w-[400px]">
                        <LuSearch />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="ml-2 text-[#000000e6] text-[16px] font-normal bg-transparent border-none outline-none w-full placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex gap-[14px] ml-auto">
                        <FiShoppingCart className="text-2xl" />
                        <CgProfile className="text-2xl" />
                    </div>

                    <div
                        className="block lg:hidden text-3xl cursor-pointer ml-4"
                        onClick={() => setMenuOpen(true)}
                    >
                        <IoMdMenu />
                    </div>
                </nav>
            </div>

            <div
                className={`fixed top-0 right-0 w-full h-screen bg-[#f0f0f0] z-[999] p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div
                    className="text-3xl ml-auto cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    <IoMdClose />
                </div>

                <ul className="mt-10 flex flex-col gap-6 text-lg font-[Satoshi] text-black">
                    {navItems.map((item, index) => (
                        <li key={index} className="cursor-pointer">
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;