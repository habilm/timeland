import Image from "next/image";
import Header from "./componets/header";
import ProductList from "./sections/productsList";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: "1600px",
          height: "32rem",
          backgroundImage: "url('/images/banner.png')",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            <h1 className="text-black text-2xl my-4 bg-white bg-opacity-60 backdrop-blur-sm p-4 md:p-0 rounded-lg md:bg-transparent ">
              Timeless timepieces for a lifetime of memories - Time Land, where
              every second counts
            </h1>
          </div>
        </div>
      </section>
      <ProductList />
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
            About
          </h2>

          <p className="mt-8 mb-8">
            Welcome to our esteemed watch shop, nestled in the heart of Ajman,
            UAE! Since 2010, we have been proud to offer an exquisite collection
            of multi-brand watches that cater to diverse tastes and preferences.
            Our treasure trove of timepieces features an impressive array of
            brands, including Casio, Eliz, Imprial, Western Watches, Seiko,
            Edifice, G-Shock, Alba, and Blade. Whether you&apos;re seeking a
            sleek and sophisticated accessory or a robust and reliable companion
            for your adventures, our extensive selection has got you covered.
          </p>

          <p className="mb-8">
            At Time Land Watches, we are committed to providing unparalleled
            service and unbeatable value. We take pride in offering the best
            prices in town, ensuring that our customers receive the perfect
            blend of quality and affordability. Our knowledgeable staff is
            always on hand to guide you in making the perfect choice, and our
            expert technicians are dedicated to delivering top-notch after-sales
            service. Step into our world of horology and discover the perfect
            timepiece that reflects your unique style and personality. Visit us
            today and experience the art of watch-making at its finest!
          </p>
        </div>
      </section>

      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-2/3 " id="location">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="py-4 text-lg">
                  Shop NO: 23, Lulu Hypermarket, Ajamn, UAE
                </p>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/op1P3cGAYo6jAnjCA"
                    rel="nofollow"
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width={20}
                      height={20}
                    >
                      <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z" />
                    </svg>
                    <span>Show on Google Map</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={14}
                      height={14}
                    >
                      <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/3  mt-6 md:mt-0" id="contact-us">
              <div className="px-3 md:px-0">
                <h3 className="text-left font-bold text-gray-900 mb-4">
                  Contact Us
                </h3>
                <div className="flex flex-col gap-1">
                  <Link
                    href="tel:+971529703006"
                    className="flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +971529703006
                  </Link>
                  <Link
                    href="mailto:sales@timeland.ae"
                    className="flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    sales@timeland.ae
                  </Link>
                </div>

                <div className="w-full flex items-center py-4 mt-0">
                  <Link
                    href="https://www.tiktok.com/@timelandwatchestrading1"
                    rel="nofollow"
                    target="_blank"
                    className="mx-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={24}
                      height={24}
                    >
                      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/timeland_watches_ajman"
                    rel="nofollow"
                    target="_blank"
                    className="mx-2"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/timeland_watches_ajman"
                    className="mx-2"
                    rel="nofollow"
                    target="_blank"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
