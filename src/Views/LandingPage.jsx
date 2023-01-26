import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import trade from "../assets/images/trade.svg";
function LandingPage() {
  useEffect(() => {
    document.title = "tradeify : home";
  }, []);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Trade in your <br className="hidden md:block" /> old lives{" "}
                <span className="inline-block text-blue-600">
                  for new adventures
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Books have the power to transport us to different worlds and
                introduce us to new perspectives. Trading in your old books not
                only allows you to declutter your shelves but also opens up the
                opportunity for others to discover the magic within those pages.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link to={"/books"}>
                <div className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                  <span className="">Visit Store</span>
                </div>
              </Link>
              <a
                href="#"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <img src={trade} alt="" srcSet="" className="max-w-fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
