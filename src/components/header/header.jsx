"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCustomCart } from "@/lib/context/CustomCartProvider";
// import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/react";

export default function Header() {

    const { items, cartTotal, removeItem, isCartOpen, setCartOpen, updateItemQuantity } = useCustomCart();
    // const { isOpen, onOpen, onOpenChange, onClose: onModalClose } = useDisclosure();

    const [location, setLocation] = useState("Select Location");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    // Toggle submenu
    const handleToggle = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    function formatAmount(value) {
        let amount = Number(value);
        if (isNaN(amount)) {
            amount = 0; // Default value
        }
        return "₹" + amount.toFixed(2);
    }

    // Close cart when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest("#cart-drawer") &&
                !event.target.closest("#cart-button")
            ) {
                setCartOpen(false);
            }
        };
        if (isCartOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isCartOpen]);

    const handleCloseModal = () => {
        onModalClose();
        onOpenChange(false);
    }

    return (
        <>
            {/* <Modal onClose={handleCloseModal} isOpen={!isOpen} onOpenChange={onOpenChange} className="max-w-[450px] !rounded-1.5 border border-gray-100 ">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col md:px-[30px] px-5 pt-[18px] pb-0 gap-0">
                            <h2 className="text-25 font-bold leading-tight text-black-100 mb-2">
                                Customer Sign Up'
                            </h2>
                            <p className="md:text-[15px] text-sm md:mb-[22px] mb-[18px] font-normal">
                                Access your account using your credentials.
                            </p>
                        </ModalHeader>

                        <ModalBody className="md:px-[30px] px-5 pt-0 md:pb-[38px] pb-7 gap-0">
                            <form>
                                <button type="submit" className="all-btn w-full justify-center mt-6 md:mb-7 mb-5">
                                    Sign Up
                                    <svg aria-hidden="true" role="status" className="ms-2 inline w-5 h-5 animate-spin" viewBox="0 0 100 101" fill="none">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    <svg className="ms-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M12.8334 7.00008L1.16675 7.00008M12.8334 7.00008L7.72925 12.1042M12.8334 7.00008L7.72925 1.89591"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </form>


                            <div className="md:my-6 mt-5 mb-6 flex items-center justify-between">
                                <hr className="w-full border-lightgray-200" />
                                <span className="px-2 text-[15px] text-gray-300">Or</span>
                                <hr className="w-full border-lightgray-200" />
                            </div>
                            <p className="text-black-100 text-center lg:mt-5 mt-4">
                                Already have an account?
                                <button
                                    type="button"
                                    className="text-green-750 hover:underline"
                                >
                                    Login
                                </button>
                            </p>
                            <p className="text-black-100 text-center lg:mt-5 mt-4">
                                Need delivery for your business?{" "}
                                <button
                                    type="button"
                                    className="text-green-750 hover:underline"
                                >
                                    Sign up
                                </button>
                            </p>
                            <p className="text-black-100 text-center lg:mt-5 mt-4">
                                Already have a business account?{" "}
                                <button
                                    type="button"
                                    className="text-green-750 hover:underline"
                                >
                                    Login
                                </button>
                            </p>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal> */}

            <header className="w-full bg-white">
                <div className="mx-auto flex items-center justify-between py-3 sm:px-10 px-4 border-b border-[#0023161A]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative h-10 w-32 sm:border-r border-[#0023161A] pr-4">
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
                            <div className="flex flex-col cursor-not-allowed">
                                <span className="text-xs text-gray-500">Delivery in</span>
                                <button className="flex items-center text-sm font-medium" onClick={() => {
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
                    <div className="mx-4 flex-1 max-w-[861px] sm:block hidden">
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
                    <div className="flex items-center sm:divide-x-0 divide-x divide-gray-200">
                        {/* Cart Button */}
                        <button id="cart-button" onClick={() => setCartOpen(true)} className="mr-3 flex items-center text-sm font-medium pr-3 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="sm:mr-2 sm:h-5 sm:w-5 w-[22px]"
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
                            <span className="sm:block hidden">({items?.length} item) {formatAmount(cartTotal)}</span>
                        </button>

                        {/* Cart Drawer */}
                        <div
                            className={`fixed inset-0 bg-opacity-50 backdrop-blur-xs z-50 flex justify-end items-start transition-opacity duration-300 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                        >
                            <div id="cart-drawer"
                                className={`w-md max-w-full h-full bg-white shadow-lg py-[22px] flex flex-col transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center pb-3 px-[25px]">
                                    <h2 className="text-[25px] font-semibold">Your Cart</h2>
                                    <button onClick={() => setCartOpen(false)} className="text-gray-600 text-xl cursor-pointer">
                                        ✕
                                    </button>
                                </div>
                                <div className="flex items-center justify-between border-l-2 border-[#066A44] px-[25px] py-3 bg-[#0023160A]">
                                    <span className="text-[#066A44] text-[15px]">Your total savings</span>
                                    <span className="text-[#066A44] text-[15px]">₹0.00</span>
                                </div>

                                {/* Cart Items */}
                                <div className="flex-1 overflow-auto mt-4 space-y-4 px-[25px]">
                                    {items?.length > 0 ? (
                                        items?.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center border-b border-[#0023161A] pb-4"
                                            >
                                                {/* {console.log(item)} */}
                                                <div className="border border-[#0023161A] p-1.5 rounded-md mr-[17px] w-[80px] h-[86px]">
                                                    <Image
                                                        src={item?.image}
                                                        width={67}
                                                        height={67}
                                                        alt={item?.name}
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div className="flex-1 mr-[15px] space-y-[7px]">
                                                    <div className="flex items-center justify-between gap-[30px] w-full">
                                                        <p className="text-base leading-[21px]">{item.name}</p>
                                                        <div onClick={() => removeItem(item.id)}>
                                                            <Image
                                                                src="/image/delete.png"
                                                                width={18}
                                                                height={18}
                                                                alt="bin"
                                                                className="rounded-md cursor-pointer"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            {/* <p className="text-sm text-[#909090] leading-5 mb-[7px]">{item.weight}</p> */}
                                                            <p className="text-base font-medium text-[#066A44] leading-5">
                                                                ₹{item.price}
                                                                {/* <span className="line-through text-gray-400 text-sm font-normal ml-[5px]">{item.oldPrice}</span> */}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-between border bg-[#066A44] px-2 border-gray-300 rounded-md overflow-hidden w-[69px] h-[30px]">
                                                            <button className="py-1 bg-[#066A44] text-white cursor-pointer"
                                                                onClick={() =>
                                                                    item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1)
                                                                }
                                                            >-</button>
                                                            <span className=" py-1 bg-[#066A44] text-white">{item.quantity}</span>
                                                            <button className=" py-1 bg-[#066A44] text-white cursor-pointer"
                                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                            >+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-black">Your cart is empty.</p>
                                    )}
                                </div>

                                {/* Cart Footer */}
                                <div className="mt-auto pt-3 px-[25px]">
                                    <div className="flex items-center justify-between border-b border-[#0023161A] py-[15px] mb-[22px]">
                                        <p className="text-lg">Sub Total</p>
                                        <p className="text-lg">{formatAmount(cartTotal)}</p>

                                    </div>
                                    <button className="bg-[#066a44] text-white px-6 py-3 rounded-md hover:bg-[#002316] transition-colors w-full mb-[12px] cursor-pointer">
                                        Go To Cart
                                    </button>
                                    <button className="rounded-md bg-[#F8C519] px-6 py-2 text-base font-medium text-black hover:bg-[#F8C519] transition-colors w-full cursor-pointer">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Login/Signup Button */}
                        <Link href="/" className="sm:rounded-md sm:bg-[#F8C519] sm:px-4 sm:py-2 text-sm font-medium text-black sm:hover:bg-[#F8C519] transition-colors"
                        >
                            <span className="sm:block hidden">Login/Signup</span>
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sm:hidden block"
                            >
                                <path
                                    d="M13.9968 14.9818C17.4441 14.9818 20.2387 12.1866 20.2387 8.73846C20.2387 5.29036 17.4441 2.49512 13.9968 2.49512C10.5495 2.49512 7.75488 5.29036 7.75488 8.73846C7.75488 12.1866 10.5495 14.9818 13.9968 14.9818Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M23.8057 24.7929C23.8057 22.1909 22.7723 19.6954 20.9328 17.8555C19.0933 16.0156 16.5984 14.9819 13.997 14.9819C11.3955 14.9819 8.90064 16.0156 7.06115 17.8555C5.22165 19.6954 4.18823 22.1909 4.18823 24.7929"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* Bottom Navbar */}
                {/* Sidebar Menu */}
                <div
                    className={`fixed inset-0 bg-opacity-30 backdrop-blur-xs z-50 transition-opacity ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                    onClick={() => setSidebarOpen(false)} >
                </div>
                <div
                    className={`fixed top-0 left-0 w-[350px] h-full bg-white shadow-md z-50 transform transition-transform py-[13px] px-[22px] overflow-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex items-center justify-between border-b border-[#0023161A] pb-[14px]">
                        <Image
                            src="/image/logo/main_logo.png"
                            alt="DailyWe Logo"
                            width={130}
                            height={47}
                            className="object-contain"
                            priority
                        />
                        <button className="text-gray-600 w-[50px] cursor-pointer" onClick={() => setSidebarOpen(false)}>
                            <Image
                                src="/image/Close.svg"
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
                            {/* Top Categories */}
                            <div>
                                <button onClick={() => handleToggle("categories")} className="cursor-pointer w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-100">
                                    <span>Top Categories</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="#066A44"
                                        className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "categories" ? "rotate-0" : "-rotate-85"
                                            }`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                {/* Fruits Submenu */}
                                {openMenu === "categories" && (
                                    <div className="bg-gray-50">
                                        <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Apples</Link>
                                        <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Bananas</Link>
                                        <Link href="#" className="block px-8 py-3 hover:bg-gray-200 font-light">Grapes</Link>
                                    </div>
                                )}
                            </div>

                            {/* Bulk Order Solutions */}
                            <div>
                                <button onClick={() => handleToggle("bulk-porder")} className="cursor-pointer w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-100">
                                    <span>Bulk Order Solutions</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="#066A44"
                                        className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "bulk-porder" ? "rotate-0" : "-rotate-85"
                                            }`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                {/* Dairy Submenu */}
                                {openMenu === "bulk-porder" && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Milk
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Cheese
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Yogurt
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* DailyWe Programs */}
                            <div>
                                <button
                                    onClick={() => handleToggle("programs")}
                                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-100"
                                >
                                    <span>DailyWe Programs</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="#066A44"
                                        className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "programs" ? "rotate-0" : "-rotate-85"
                                            }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </button>

                                {/* Chicken Submenu */}
                                {openMenu === "programs" && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Chicken Breast
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Whole Chicken
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Eggs
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Customer Support */}
                            <div>
                                <button
                                    onClick={() => handleToggle("customer")}
                                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-100"
                                >
                                    <span>Customer Support</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="#066A44"
                                        className={`w-[18px] h-[18px] mt-[1px] transition-transform duration-200 ${openMenu === "customer" ? "rotate-0" : "-rotate-85"
                                            }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </button>

                                {/* Chicken Submenu */}
                                {openMenu === "customer" && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Chicken Breast
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Whole Chicken
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block px-8 py-3 hover:bg-gray-200 font-light"
                                        >
                                            Eggs
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <h4 className="2xl:text-[20px] text-[19px] font-semibold text-[#002316] mt-[10px] sm:hidden block">
                                Categories
                            </h4>
                            <div className="divide-y divide-gray-200 block sm:hidden">
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Fruits & Vegetables.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Fruits & Vegetables
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Dairy Products.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">Dairy Products</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Chicken & Eggs.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Chicken & Eggs
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Dry Fruits & Nuts.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Dry Fruits & Nuts
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Packaging Material.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Packaging Material
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Ghee & Oils .svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Ghee & Oils
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Bakery & Chocolates.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Bakery & Chocolates
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Pulses & Flours.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Pulses & Flours
                                    </span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-block align-middle items-center gap-2 text-black w-full text-base py-4 px-6"
                                >
                                    <Image
                                        src="/image/Fish & Seafood.svg"
                                        alt="DailyWe Logo"
                                        width={24}
                                        height={24}
                                        className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle custom_images_color_filter"
                                        priority
                                    />
                                    <span className="inline-block align-middle ms-2">
                                        Fish & Seafood
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#066A44] text-white sm:px-10 px-4 w-full overflow-auto whitespace-nowrap flex items-center">
                    <button
                        className="text-white text-xl border-r border-[#FFFFFF1A] pr-6 mr-[12px] flex-shrink-0 block py-3 cursor-pointer"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Image
                            src="/image/menu bar.svg"
                            alt="DailyWe Logo"
                            width={26}
                            height={26}
                            className="object-contain lg:w-[26px] lg:h-[24px] w-[22px] h-[22px]"
                            priority
                        />
                    </button>
                    <div className="whitespace-nowrap flex-nowrap overflow-auto text-sont-mem fdium sm:block hidden">
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Fruits & Vegetables.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Fruits & Vegetables
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Dairy Products.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Dairy Products
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Chicken & Eggs.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Chicken & Eggs
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Dry Fruits & Nuts.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Dry Fruits & Nuts
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Packaging Material.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Packaging Material
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Ghee & Oils .svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">Ghee & Oils</span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Bakery & Chocolates.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Bakery & Chocolates
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Pulses & Flours.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Pulses & Flours
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="inline-block align-middle items-center px-[10px] gap-2 text-white lg:text-base text-sm py-3"
                        >
                            <Image
                                src="/image/Fish & Seafood.svg"
                                alt="DailyWe Logo"
                                width={24}
                                height={24}
                                className="object-contain lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] inline-block align-middle"
                                priority
                            />
                            <span className="inline-block align-middle ms-2">
                                Fish & Seafood
                            </span>
                        </Link>
                    </div>
                    <div className="flex-1 block sm:hidden">
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
                                className="w-full rounded-md text-gray-500 border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <button
                        className="w-[110px] relative sm:flex hidden items-center gap-2 lg:text-base text-sm ps-[13px] flex-shrink-0 cursor-pointer"
                        onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                    >
                        <Image
                            src="/image/list.svg"
                            alt="DailyWe Logo"
                            width={26}
                            height={26}
                            className="object-contain lg:w-[26px] lg:h-[26px] w-[22px] h-[22px]"
                            priority
                        />
                        More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-[15px] h-[15px] mt-[1px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>
                    {moreMenuOpen && (
                        <div className="absolute bg-white text-black p-2 shadow-md rounded-md z-10 right-9 mt-36">
                            <Link href="#" className="block px-4 py-2">
                                Item 1
                            </Link>
                            <Link href="#" className="block px-4 py-2">
                                Item 2
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
