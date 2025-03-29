"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [location, setLocation] = useState("Select Location");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    // Toggle submenu
    const handleToggle = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <header className="w-full bg-white">
            <div className="mx-auto flex items-center justify-between py-3 px-10 border-b border-[#0023161A]">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-10 w-32 border-r border-[#0023161A] pr-4">
                            <Image
                                src="/image/logo/logo.png?height=40&width=120"
                                alt="DailyWe Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Delivery Location */}
                    <div className="ml-4 hidden md:block">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500">Delivery in</span>
                            <button
                                className="flex items-center text-sm font-medium"
                                onClick={() => {
                                    /* Handle location selection */
                                }}
                            >
                                {location}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-1 h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mx-4 flex-1 max-w-[861px] ">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder='Search "Vegetables"'
                            className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Cart */}
                <div className="flex items-center">
                    <button className="mr-4 flex items-center text-sm font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        <span>(1 item) ₹99</span>
                    </button>

                    {/* Login/Signup Button */}
                    <Link
                        href="/login"
                        className="rounded-md bg-[#F8C519] px-4 py-2 text-sm font-medium text-black hover:bg-[#F8C519] transition-colors"
                    >
                        Login/Signup
                    </Link>
                </div>
            </div>
            {/* Bottom Navbar */}
            {/* Sidebar Menu */}
            <div className={`fixed inset-0 bg-opacity-30 backdrop-blur-xs z-50 transition-opacity ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setSidebarOpen(false)}></div>
            <div className={`fixed top-0 left-0 w-[350px] h-full bg-white shadow-md z-50 transform transition-transform py-[13px] px-[22px] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between border-b border-[#0023161A] pb-[14px]">
                    <Image src="/image/logo/main_logo.png"
                        alt="DailyWe Logo"
                        width={130}
                        height={47}
                        className="object-contain"
                        priority
                    />
                    <button className="text-gray-600 w-[50px]" onClick={() => setSidebarOpen(false)}>
                        <Image src="/image/Close.svg"
                            alt="DailyWe Logo"
                            width={18}
                            height={18}
                            className="object-contain"
                            priority
                        />
                    </button>
                </div>
                <div className="relative">
                    {/* Main Menu */}
                    <div className="mt-2 bg-white">
                        {/* Fruits & Vegetables */}
                        <div>
                            <button
                                onClick={() => handleToggle("fruits")}
                                className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-100"
                            >
                                <span>Fruits & Vegetables</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth=""
                                    stroke="#066A44"
                                    className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "fruits" ? "rotate-0" : "-rotate-85"
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Fruits Submenu */}
                            {openMenu === "fruits" && (
                                <div className="bg-gray-50">
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Apples</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Bananas</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Grapes</Link>
                                </div>
                            )}
                        </div>

                        {/* Dairy Products */}
                        <div>
                            <button
                                onClick={() => handleToggle("dairy")}
                                className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-100"
                            >
                                <span>Dairy Products</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="#066A44"
                                    className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "dairy" ? "rotate-0" : "-rotate-85"
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Dairy Submenu */}
                            {openMenu === "dairy" && (
                                <div className="bg-gray-50">
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Milk</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Cheese</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Yogurt</Link>
                                </div>
                            )}
                        </div>

                        {/* Chicken & Eggs */}
                        <div>
                            <button
                                onClick={() => handleToggle("chicken")}
                                className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-100"
                            >
                                <span>Chicken & Eggs</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="#066A44"
                                    className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "chicken" ? "rotate-0" : "-rotate-85"
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Chicken Submenu */}
                            {openMenu === "chicken" && (
                                <div className="bg-gray-50">
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Chicken Breast</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Whole Chicken</Link>
                                    <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Eggs</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#066A44] text-white px-10 px-auto w-full overflow-auto whitespace-nowrap flex items-center">
                <button className="text-white text-xl border-r border-[#FFFFFF1A] pr-6 mr-[12px] flex-shrink-0 block" onClick={() => setSidebarOpen(true)}>
                    <Image src="/image/menu bar.svg"
                        alt="DailyWe Logo"
                        width={26}
                        height={26}
                        className="object-contain lg:w-[26px] lg:h-[24px] w-[22px] h-[22px]"
                        priority
                    />
                </button>
                <div className="block whitespace-nowrap flex-nowrap overflow-auto text-sm font-medium">
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Fruits & Vegetables.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Fruits & Vegetables</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Dairy Products.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Dairy Products</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Chicken & Eggs.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Chicken & Eggs</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Dry Fruits & Nuts.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Dry Fruits & Nuts</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Packaging Material.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Packaging Material</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Ghee & Oils .svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Ghee & Oils</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Bakery & Chocolates.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Bakery & Chocolates</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Pulses & Flours.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Pulses & Flours</span>
                    </Link>
                    <Link href="#" className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3">
                        <Image src="/image/Fish & Seafood.svg"
                            alt="DailyWe Logo"
                            width={24}
                            height={24}
                            className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                            priority
                        />
                        <span className="inline-block align-middle ms-2">Fish & Seafood</span>
                    </Link>
                </div>
                <button className="w-[110px] relative flex items-center gap-2 lg:text-base text-sm ps-[13px] flex-shrink-0" onClick={() => setMoreMenuOpen(!moreMenuOpen)}>
                    <Image src="/image/list.svg"
                        alt="DailyWe Logo"
                        width={26}
                        height={26}
                        className="object-contain lg:w-[26px] lg:h-[26px] w-[22px] h-[22px]"
                        priority
                    />More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-[15px] h-[15px] mt-[1px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {moreMenuOpen && (
                    <div className="absolute bg-white text-black p-2 shadow-md rounded-md z-10 right-9 mt-36">
                        <Link href="#" className="block px-4 py-2">Item 1</Link>
                        <Link href="#" className="block px-4 py-2">Item 2</Link>
                    </div>
                )}
            </div>
        </header>
    );
}