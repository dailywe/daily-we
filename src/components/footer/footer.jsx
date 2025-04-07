import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-[#202020] pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="flex items-start justify-between 2xl:mb-12 xl:flex-nowrap flex-wrap sm:space-y-10 space-y-4">
                    {/* Logo and App Downloads Section */}
                    <div className="xl:w-[296px] w-full max-w-full flex flex-col xl:items-start items-center ">
                            <Image src="/image/logo/main_logo.png" alt="DailyWe Logo" width={211} height={72} className="xl:mb-[50px] mb-5 xl:w-[211px] h-[72px] w-[190px]" />
                            <h3 className="text-xl font-semibold text-[#002316] xl:mb-5 mb-4 xl:text-start text-center">Get deliveries with DailyWe</h3>
                            <p className="xl:mb-[50px] mb-5 text-base font-light leading-relaxed xl:text-start text-center">
                                Nor again is there anyone who loves or pursues or desires to obtain.
                            </p>
                            <div className="flex space-x-3 lg:justify-start justify-center">
                                <Link href="#" className="block">
                                    <Image src="/image/play-store.png" alt="Get it on Google Play" width={135} height={40} />
                                </Link>
                                <Link href="#" className="block">
                                    <Image src="/image/app-store.png" alt="Download on App Store" width={135} height={40} className="w-[135px] h-[40px]"/>
                                </Link>
                            </div>
                    </div>

                    {/* Top Categories Column */}
                    <div className="lg:w-auto md:w-[34%] sm:w-[38%] w-full">
                        <h3 className="2xl:text-[20px] text-[19px] font-semibold text-[#002316] sm:mb-[22px] mb-3">Top Categories</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Fruits & Vegetables
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Dairy Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Bakery & Chocolates
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Meat & Seafood
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Dry Fruits & Nuts
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Beverages & Mixes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Pantry Essentials
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Household Supplies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Kitchenware & Appliances
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bulk Order Solutions Column */}
                    <div className="lg:w-auto md:w-[34%] sm:w-[38%] w-full">
                        <h3 className="text-[20px] font-semibold text-[#002316] sm:mb-[22px] mb-3">Bulk Order Solutions</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Wholesale Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Restaurant & Hotel Supplies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Office Pantry Stock
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Bulk Order Discounts
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Subscription & Recurring Order
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Custom Packaging Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Corporate Gifting
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Wholesale Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Customized Orders
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* DailyWe Programs Column */}
                    <div className="lg:w-auto md:w-[34%] sm:w-[38%] w-full">
                        <h3 className="text-[20px] font-semibold text-[#002316] sm:mb-[22px] mb-3">DailyWe Programs</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Loyalty Rewards
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Promo Codes & Coupons
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Gift Cards
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Referral Program
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Subscription Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Special Offers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Partner with Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Loyalty Rewards
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Subscription Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support Column */}
                    <div className="lg:w-auto md:w-[34%] sm:w-[38%] w-full">
                        <h3 className="text-[20px] font-semibold text-[#002316] sm:mb-[22px] mb-3">Customer Support</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Payment & Refunds
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Shipping & Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Return & Exchange Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Track Your Order
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light">
                                    Customized Orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 my-6" />

                {/* Bottom section with copyright and social links */}
                <div className="flex flex-row lg:justify-between justify-center py-2 flex-wrap gap-y-3">
                    <div className="">
                        <p className="text-base xl:text-start text-center">
                            © Copyright 2024 -{" "}
                            <Link href="#" className="text-[#2d6d5c] hover:underline">
                                DailyWe
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center sm:justify-between justify-center sm:space-x-6 space-x-3 gap-y-3 flex-wrap divide-x divide-[#0023161A]">
                        <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light sm:pr-6 pr-3">
                            Terms of Use
                        </Link>
                        <Link href="#" className="hover:text-[#2d6d5c] 2xl:text-base text-[15px] xl:leading-[26px] leading-5 font-light sm:pr-6 pr-3">
                            Privacy Policy
                        </Link>
                        <div className="flex items-center space-x-4">
                            <Link href="#" aria-label="Facebook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2d6d5c"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2d6d5c"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="YouTube">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2d6d5c"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Apple Podcast">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2d6d5c"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M12 2a10 10 0 0 1 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a10 10 0 0 1 10-10z"></path>
                                    <path d="M8 18v-2a4 4 0 0 1 8 0v2"></path>
                                    <circle cx="12" cy="10" r="2"></circle>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2d6d5c"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Disclaimer text */}
                <div className="mt-6 xl:text-base text-sm text-gray-600">
                    <p>
                        This promotion is valid only for the first order placed through DailyWe. To qualify, the order must meet the
                        minimum basket size specified in the promotional terms. The offer will expire on the date displayed in the
                        user's account settings or promotional materials associated with the promotion. Additional terms and
                        conditions may apply. For complete details, please visit the provided link or refer to our{" "}
                        <Link href="#" className="text-[#2d6d5c] hover:underline">
                            Terms & Conditions page
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </footer>
    )
}

