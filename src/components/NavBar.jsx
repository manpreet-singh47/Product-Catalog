import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const CartItems = useSelector((store) => store.cartItems.cart);
  return (
    <header className="bg-[#e09129]  text-white shadow-lg hidden md:block">
      <div className="container mx-auto flex items-center h-24">
        <a href className="flex items-center justify-center">
          <span className="ml-4 uppercase text-2xl font-black">
            E- Commerce
          </span>
        </a>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8 active">
              <Link to={"/"}>
                <span>Home</span>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <a href>
                <span>About</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href>
                <span>Projects</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href>
                <span>Services</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* <button className="border border-white rounded-full font-bold px-8 py-2">
          Contact me
        </button> */}

        <Link to={"/cart"} className="flex items-center gap-2">
          <HiMiniShoppingCart className="text-[1.7vw]" />{" "}
          {CartItems.length > 0 && (
            <div className="bg-white h-5 w-5 rounded-full text-zinc-600 flex items-center justify-center font-semibold relative -left-5 bottom-3 ">
              {CartItems.length}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
