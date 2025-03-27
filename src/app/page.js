import Image from "next/image";
import Link from "next/link";

const StatItem = ({ value, description }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <h3 className="text-4xl font-bold text-[#066A44] md:text-5xl lg:text-4xl">{value}</h3>
      <p className="mt-2 text-sm text-text md:text-base">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className="bg-white">

        <section className="w-full bg-background py-12">
          <div className="container mx-auto ">
            <div className="flex items-center justify-between py-12 border-y border-gray-200">
              <StatItem value="130+" description="cities we're active in" />
              <StatItem value="1 Lakh+" description="partners trust us" />
              <StatItem value="400+" description="seller brands listed" />
              <StatItem value="8.2 Lakh+" description="orders delivered" />
            </div>
            <div className=" "></div>
          </div>
        </section>

        <section className="container mx-auto m-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[10.5rem] items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-[#000000]">
                  Powering the Future of B2B Sourcing
                </h1>
                <p className="text-[#202020] text-lg">
                  DailyWe brings everything under one roof, offering a one-stop sourcing solution with minimum or no
                  inventory requirements—so you get exactly what you need, exactly when you need it. Cutting out dealing
                  with multiple vendors, supply gaps, and excess stock.
                </p>
                <p className="text-[#202020] text-lg">
                  With tech-driven procurement, direct sourcing, and lightning-fast deliveries, we eliminate
                  inefficiencies and keep your kitchen running smoothly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#066a44]"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                  <span className="text-[#202020] font-medium">All orders free delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#066a44]"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                  <span className="text-[#202020] font-medium">Fresh Products</span>
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

        <section className="w-full bg-[#0023160F] py-16">
          <div className="max-w-[89rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-[90px] items-center">
              {/* Left side - Text content */}
              <div>
                <h2 className="text-[2.5rem] font-bold text-[#002316] mb-4">How it Works</h2>
                <p className="text-lg text-gray-600 mb-8 w-[460px]">
                  DailyWe takes the hassle out of wholesale procurement, so you get what you need, when you need it.
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
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/image/how-work-1.jpg"
                      alt="Various grains and legumes in burlap sacks"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">Shop with Ease</h3>
                      <p className="text-white/90 text-sm">Select fresh groceries and daily with ease.</p>
                    </div>
                  </div>
                </div>

                {/* Reliable Delivery Card */}
                <div className="rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/image/how-work-2.jpg"
                      alt="Person selecting items from dispensers"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">Reliable Delivery</h3>
                      <p className="text-white/90 text-sm">Enjoy quick, secure checkout and doorstep delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-[#000000]">
                  Minimize Stock Wastage
                </h1>
                <p className="text-[#202020] text-lg">
                  Reduce excess inventory and cut waste with smart,
                  on-demand sourcing.
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
      </main>
    </>
  );
}

