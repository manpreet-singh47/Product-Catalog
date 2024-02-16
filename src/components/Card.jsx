import React from "react";
import { Link, useParams } from "react-router-dom";

const Card = ({ title, image }) => {
  return (
    <>
      <div className="da relative flex flex-col justify-center m-5 overflow-hidden rounded-xl bg-gray-50">
        <div className="absolute inset-0 bg-center dark:bg-black" />
        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src={image}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="font-serif text-2xl font-bold mb-5 text-white shadow-xl">
              {title}
            </h1>

            {/* <h1 className="text-sm font-light text-gray-200 shadow-xl">{}</h1> */}
            {title === "Smartphones" && (
              <Link
                to={"smartphones"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}
            {title === "Mens-shirts" && (
              <Link
                to={"mens-shirts"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "skincare" && (
              <Link
                to={"skincare"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "Women-dresses" && (
              <Link
                to={"women-dresses"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "groceries" && (
              <Link
                to={"groceries"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "women-shoes" && (
              <Link
                to={"womens-shoes"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "mens-watches" && (
              <Link
                to={"mens-watches"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "tops" && (
              <Link
                to={"tops"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}

            {title === "sunglasses" && (
              <Link
                to={"sunglasses"}
                className="bg-gray-50 text-black px-3 py-2 rounded-xl hover:bg-sky-600 hover:text-white  duration-300"
              >
                See more
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
