"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    const [location, setLocation] = useState("Select Location")

    return (
        <header className="w-full border-b border-gray-200 bg-white py-3 px-8">
            <div className="mx-auto flex items-center justify-between">
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
        </header>
    )
}

