"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const StatItem = ({ value, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h3 className="xl:text-[40px] text-3xl font-bold text-[#066A44]">
        {value}
      </h3>
      <p className="mt-2 text-sm text-text md:text-lg">{description}</p>
    </div>
  );
};

function CategoryCard({ category }) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="bg-[#f2f2f2] rounded-lg p-5 flex flex-col items-center justify-center transition-transform hover:scale-105 h-[212px] w-full">
        <div className="relative md:w-[142px] md:h-[108px] w-[135px] h-[100px] mb-7">
          <Image
            src={category.image || "/image/category.png"}
            alt={category.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-center md:text-lg text-base">{category.name}</h3>
      </div>
    </Link>
  );
}

function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-[20px] flex flex-col w-full">
      <div className="flex justify-center mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={150}
          height={150}
          className="object-contain h-36"
        />
      </div>

      <h3 className="text-lg leading-[25px] font-medium mb-[13px]">
        {product.name}, {product.weight}
      </h3>

      <div className="flex justify-between items-center mb-[18px]">
        <span className="text-[#909090] text-base">{product.kg}</span>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-[#f8c519] stroke-[#f8c519]"
          >
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6z" />
          </svg>
          <span className="text-[#909090] text-base">
            ({product.rating}/{product.totalRatings})
          </span>
        </div>
      </div>
      <div className="block divide-y divide-[#0023160F] bg-[#F5F6F6] rounded-md mb-[22px]">
        {product.priceTiers.map((tier, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-[10px] px-4 "
          >
            <span className="text-[15px] text-[#202020]">
              {tier.price} for {tier.quantity} kgs+
            </span>
            <button className="text-[#066a44] text-[15px] font-semibold">
              + {tier.addAmount}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-[20px] font-medium">{product.finalPrice}</span>
        <button className="bg-[#066a44] text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-1">+</span> Add
        </button>
      </div>
    </div>
  );
}

// for hero slide
const slides = [
  {
    image: "/image/hero slider 1.png",
    title: "All your fresh produce needs, delivered with farm-fresh quality",
    description: "50+ varieties • Hand-picked & packed with care",
  },
  {
    image: "/image/hero slider 1.png",
    title: "All your fresh produce needs, delivered with farm-fresh quality",
    description: "50+ varieties • Hand-picked & packed with care",
  },
  {
    image: "/image/hero slider 1.png",
    title: "All your fresh produce needs, delivered with farm-fresh quality",
    description: "50+ varieties • Hand-picked & packed with care",
  },
  {
    image: "/image/hero slider 1.png",
    title: "All your fresh produce needs, delivered with farm-fresh quality",
    description: "50+ varieties • Hand-picked & packed with care",
  },
];
// hero slide's thumbnail
const thumbnailNames = [
  "Fresh Produce",
  "Pantry Essentials",
  "Frozen & Dairy",
  "Household Supplies",
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // First slide active on load

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is DailyWe?",
      answer:
        "DailyWe is a bulk delivery service that helps businesses and organizations get their products delivered efficiently and on time.",
    },
    {
      question: "How does the bulk order delivery service work?",
      answer:
        "Our bulk order delivery service works by collecting your orders, organizing them efficiently, and delivering them to your specified locations using our optimized logistics network.",
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We currently deliver to major metropolitan areas and surrounding suburbs. Contact us to check if your specific location is within our service area.",
    },
    {
      question: "Do you offer same-day bulk delivery?",
      answer:
        "Yes, we offer same-day bulk delivery for orders placed before 10 AM, subject to availability and location.",
    },
    {
      question: "Is there a minimum order quantity for bulk deliveries?",
      answer:
        "Yes, our minimum order quantity for bulk deliveries is 10 items or $200, whichever is reached first.",
    },
    {
      question: "Do you offer discounts on bulk purchases?",
      answer:
        "Yes, we offer tiered discounts based on order volume. The more you order, the more you save.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and corporate purchase orders for approved accounts.",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      image: "/image/category.png?height=100&width=100",
    },
    {
      id: 2,
      name: "Dairy Products",
      image: "/image/Dairy Products.png?height=100&width=100",
    },
    {
      id: 3,
      name: "Chicken & Eggs",
      image: "/image/Chicken & Eggs.png?height=100&width=100",
    },
    {
      id: 4,
      name: "Dry Fruits & Nuts",
      image: "/image/Dry-Fruits-&-Nuts.png?height=100&width=100",
    },
    {
      id: 5,
      name: "Custom Packaging",
      image: "/image/Custom-Packaging.png?height=100&width=100",
    },
    {
      id: 6,
      name: "Bakery & Chocolates",
      image: "/image/Bakery-&-Chocolates.png?height=100&width=100",
    },
    {
      id: 7,
      name: "Masala, Sugar & Salt",
      image: "/image/masala-sugar.png?height=100&width=100",
    },
    {
      id: 8,
      name: "Seasoning & Sauces",
      image: "/image/sauces.png?height=100&width=100",
    },
    {
      id: 9,
      name: "Ghee & Oils",
      image: "/image/ghrr_oils.png?height=100&width=100",
    },
    {
      id: 10,
      name: "Beverages & Mixers",
      image: "/image/baverages.png?height=100&width=100",
    },
    {
      id: 11,
      name: "Fresh Cut & Peeled",
      image: "/image/cutter.png?height=100&width=100",
    },
    {
      id: 12,
      name: "Rice & Rice Products",
      image: "/image/rice.png?height=100&width=100",
    },
    {
      id: 13,
      name: "Canned & Imported Items",
      image: "/image/canned items.png?height=100&width=100",
    },
    {
      id: 14,
      name: "Packaging Material",
      image: "/image/packaging materials.png?height=100&width=100",
    },
    {
      id: 15,
      name: "Kitchenware & Appliances",
      image: "/image/kitchenware.png?height=100&width=100",
    },
    {
      id: 16,
      name: "Mutton, Duck & Lamb",
      image: "/image/mutton.png?height=100&width=100",
    },
    {
      id: 17,
      name: "Pulses & Flours",
      image: "/image/floures.png?height=100&width=100",
    },
    {
      id: 18,
      name: "Fish, Prawns & Seafood",
      image: "/image/sea-food.png?height=100&width=100",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Farm-Fresh Green Spinach Leaves",
      weight: "250gm",
      image: "/image/product.png?height=150&width=150",
      kg: "0.25 kg",
      rating: 4.5,
      totalRatings: 5,
      priceTiers: [
        { quantity: 6, price: "₹26.2/kg", addAmount: 12 },
        { quantity: 3, price: "₹27.1/kg", addAmount: 6 },
      ],
      finalPrice: "₹28.5",
    },
    {
      id: 2,
      name: "Farm-Fresh Juicy Tomatoes",
      weight: "250gm",
      image: "/image/tomatoes.png?height=150&width=150",
      kg: "0.25 kg",
      rating: 4.8,
      totalRatings: 5,
      priceTiers: [
        { quantity: 6, price: "₹24.9/kg", addAmount: 12 },
        { quantity: 3, price: "₹26.5/kg", addAmount: 6 },
      ],
      finalPrice: "₹26.9",
    },
    {
      id: 3,
      name: "Organic Farm-Grown Green Cabbage",
      weight: "300gm",
      image: "/image/cobbage.png?height=150&width=150",
      kg: "0.30 kg",
      rating: 4.6,
      totalRatings: 5,
      priceTiers: [
        { quantity: 5, price: "₹22.8/kg", addAmount: 12 },
        { quantity: 2, price: "₹24.3/kg", addAmount: 6 },
      ],
      finalPrice: "₹29.0",
    },
    {
      id: 4,
      name: "Farm-Fresh Crunchy Sweet Carrots",
      weight: "500gm",
      image: "/image/carrots.png?height=150&width=150",
      kg: "0.50 kg",
      rating: 4.7,
      totalRatings: 5,
      priceTiers: [
        { quantity: 4, price: "₹23.5/kg", addAmount: 12 },
        { quantity: 2, price: "₹25.0/kg", addAmount: 6 },
      ],
      finalPrice: "₹31.5",
    },
  ];

  return (
    <>
      <main className="bg-white">
        {/* hero slider */}
        <section>
          <div className="w-full relative">
            {/* Main Swiper */}
            <Swiper
              modules={[Thumbs, Autoplay]}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{
                delay: 1500,
              }}
              loop={true}
              initialSlide={0} // Set first slide as active
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active index
              className="w-full h-[550px] relative"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  {/* Image */}
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  {/* Text & Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center pt-[65px] text-center bg-black/15 bg-opacity-40">
                    <div className="w-[820px] max-w-full">
                      <h2 className="md:text-[40px] text-[36px] font-semibold text-white leading-[50px] mb-[25px] px-4">
                        {slide.title}
                      </h2>
                      <p className="text-[20px] text-white mb-[35px]">
                        {slide.description}
                      </p>
                      {/* Button Inside Slide */}
                      <button className="rounded-md bg-[#F8C519] px-6 py-2 text-base font-medium text-black hover:bg-[#F8C519] transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Sticky Thumbnails Inside Main Swiper */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-0.5 flex overflow-auto flex-nowrap">
              <div className="sm:container mx-auto">
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4} // Adjust number of thumbnails
                  spaceBetween={10}
                  className="w-full"
                >
                  {thumbnailNames.map((name, index) => (
                    <SwiperSlide
                      key={index}
                      className="mx-auto sm:!w-auto !w-[200px]"
                    >
                      {/* Thumbnail Buttons Now Have Separate Text */}
                      <button
                        className="h-[50px] cursor-pointer flex items-center justify-center duration-500 font-semibold xl:text-[20px] lg:text-lg md:text-base text-sm lg:pb-[38px] pb-4 sm:w-full lg:px-[25px] pt-2 transition text-white/70 border-b border-transparent w-[200px]"
                        style={{
                          color:
                            activeIndex === index
                              ? "#F8C519"
                              : "rgba(255, 255, 255, 0.7)",
                          borderBottomColor:
                            activeIndex === index ? "#F8C519" : "transparent",
                        }}
                      >
                        {name}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-10 pt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[22px] flex-wrap">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="flex justify-center mt-[50px]">
            <button className="bg-[#066a44] text-white px-6 py-3 rounded-md hover:bg-[#002316] transition-colors">
              More Categories
            </button>
          </div>
        </section>

        <section className="w-full bg-background py-10">
          <div className="container mx-auto ">
            <div className="flex items-center justify-between py-12 border-y border-gray-200 gap-5 flex-wrap">
              <StatItem value="130+" description="cities we're active in" />
              <StatItem value="1 Lakh+" description="partners trust us" />
              <StatItem value="400+" description="seller brands listed" />
              <StatItem value="8.2 Lakh+" description="orders delivered" />
            </div>
            {/* <div className=" "></div> */}
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[10.5rem] items-center">
            <div className="space-y-8">
              <div className="mb-7">
                <h1 className="text-[40px] font-semibold 2xl:text-5xl text-[#000000] leading-[50px] mb-[22px]">
                  Powering the Future of B2B Sourcing
                </h1>
                <p className="text-[#202020] text-lg mb-[20px]">
                  DailyWe brings everything under one roof, offering a one-stop
                  sourcing solution with minimum or no inventory requirements—so
                  you get exactly what you need, exactly when you need it.
                  Cutting out dealing with multiple vendors, supply gaps, and
                  excess stock.
                </p>
                <p className="text-[#202020] text-lg">
                  With tech-driven procurement, direct sourcing, and
                  lightning-fast deliveries, we eliminate inefficiencies and
                  keep your kitchen running smoothly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] p-[10px] flex-items-center justify-center rounded-full border border-[#0023161A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-full w-full text-[#066a44] "
                    >
                      <path d="M10 17h4V5H2v12h3" />
                      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                      <path d="M14 17h1" />
                      <circle cx="7.5" cy="17.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <span className="text-[#202020] font-medium text-lg">
                    All orders free delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] p-[10px] flex-items-center justify-center rounded-full border border-[#0023161A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-full w-full text-[#066a44]"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <span className="text-[#202020] font-medium text-lg">
                    Fresh Products
                  </span>
                </div>
              </div>

              <div>
                <Link
                  href="#"
                  className="inline-flex px-6 py-3 bg-[#066a44] text-white font-medium rounded hover:bg-[#002316] transition-colors"
                >
                  Learn with DailyWe
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/image/b2b.png"
                alt="Person using DailyWe app with fresh produce"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#002316]">
                Fruits & Vegetables
              </h1>
              <p className="text-[#909090]">All orders free delivery</p>
            </div>
            <Link
              href="/shop"
              className="text-[#066a44] flex items-center text-semibold"
            >
              See more <span className="ml-1">›</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="w-full bg-[#0023160F] py-10">
          <div className=" mx-auto container">
            <div className="flex gap-[90px] items-center">
              {/* Left side - Text content */}
              <div>
                <h2 className="text-[2.5rem] font-bold text-[#002316] mb-4">
                  How it Works
                </h2>
                <p className="text-lg text-[#909090] mb-8 w-[495px] leading-[30px]">
                  DailyWe takes the hassle out of wholesale procurement, so you
                  get what you need, when you need it.
                </p>
                <Link
                  href="/learn-more"
                  className="inline-block bg-[#066a44] hover:bg-[#055a34] text-white font-medium py-2.5 px-6 rounded-md transition-colors"
                >
                  Learn how
                </Link>
              </div>

              {/* Right side - Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shop with Ease Card */}
                <div className="rounded-lg overflow-hidden">
                  <div className="relative w-[380px] h-[430px]">
                    <Image
                      src="/image/how-work-1.jpg"
                      alt="Various grains and legumes in burlap sacks"
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Shop with Ease
                      </h3>
                      <p className="text-white/90 text-sm">
                        Select fresh groceries and daily with ease.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reliable Delivery Card */}
                <div className="rounded-lg overflow-hidden">
                  <div className="relative w-[380px] h-[430px]">
                    <Image
                      src="/image/how-work-2.jpg"
                      alt="Person selecting items from dispensers"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Reliable Delivery
                      </h3>
                      <p className="text-white/90 text-sm">
                        Enjoy quick, secure checkout and doorstep delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#002316]">
                Dairy Products
              </h1>
              <p className="text-[#909090]">All orders free delivery</p>
            </div>
            <Link
              href="/shop"
              className="text-[#066a44] flex items-center text-semibold"
            >
              See more <span className="ml-1">›</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#002316]">
                Bakery & Chocolates
              </h1>
              <p className="text-[#909090]">All orders free delivery</p>
            </div>
            <Link
              href="/shop"
              className="text-[#066a44] flex items-center text-semibold"
            >
              See more <span className="ml-1">›</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[10.5rem] items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/image/b2b.png"
                alt="Person using DailyWe app with fresh produce"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight 2xl:text-5xl text-[#000000]">
                  Minimize Stock Wastage
                </h1>
                <p className="text-[#909090] text-lg w-[70%]">
                  Reduce excess inventory and cut waste with smart, on-demand
                  sourcing.
                </p>
              </div>

              <div>
                <Link
                  href="#"
                  className="inline-flex px-6 py-3 bg-[#066a44] text-white font-medium rounded hover:bg-[#002316] transition-colors"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-[40px] font-semibold text-[#000000] mb-4">
                  Our Delivery Solutions
                </h2>
                <p className="text-[#909090] text-lg">
                  We offer flexible and reliable delivery options designed to
                  meet your needs—whether you&apos;re planning ahead or need
                  last-minute essentials.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-[#066a44] font-medium flex items-center hover:underline"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Planned Delivery Card */}
            <div className="rounded-xl overflow-hidden bg-[#f99700]/90 flex items-center justify-between">
              <div className="2xl:p-8 p-6 flex flex-col h-full">
                <h3 className="2xl:text-3xl text-[26px] font-bold text-white mb-2">
                  Planned Delivery
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-white font-medium">NEXT DAY</span>
                  <div className="w-12 h-0.5 bg-white ml-2"></div>
                </div>
                <p className="text-white text-lg max-w-xs">
                  Reliable next-day service for all your scheduled grocery
                  needs.
                </p>
              </div>
              <div className="h-full w-1/2 overflow-hidden rounded-l-full">
                <Image
                  src="/image/planned delievery.jpg"
                  alt="Person with delivery box"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Rapid Delivery Card */}
            <div className="rounded-xl overflow-hidden bg-[#050036] relative h-[300px] flex justify-between">
              <div className="2xl:p-8 p-6 flex flex-col h-full z-10">
                <h3 className="2xl:text-3xl text-[26px] font-bold text-white mb-2 flex items-center">
                  Rapid Delivery
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-white font-medium">WITHIN HOURS</span>
                  <div className="w-12 h-0.5 bg-white ml-2"></div>
                </div>
                <p className="text-white text-lg max-w-xs">
                  Fast, same-day delivery for your urgent, last-minute
                  essentials.
                </p>
              </div>
              <div className="xl:w-1/2 w-[65%] overflow-hidden pl-[10px] bg-[url(/image/star.png)] bg-cover bg-no-repeat flex items-center justify-center bg-left mt-6">
                <div className="transform w-full h-full">
                  <Image
                    src="/image/Group_product.png"
                    alt="Grocery items"
                    width={326}
                    height={176}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-[450px] max-w-full">
              <h2 className="xl:text-4xl lg:text-[34px] text-[32px] font-bold text-[#000000] mb-4 xl:leading-[50px] leading-[45px]">
                Frequently asked questions
              </h2>
              <p className="text-[#909090] mb-8 xl:leading-[30px] leading-[25px] xl:text-lg lg:text-base text-[15px]">
                Get answers to common questions about DailyWe, our services, and
                how we operate.
              </p>
              <button className="bg-[#066a44] hover:bg-[#002316] text-white font-medium py-3 px-6 rounded-md transition-colors">
                Learn more
              </button>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f5] rounded-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="xl:text-lg lg:text-base text-sm text-[#000000]">
                      {item.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#066a44] transition-transform ${openIndex === index ? "transform rotate-180" : ""
                        }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {openIndex === index && (
                    <div className="p-4 pt-0 text-[#909090]">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}