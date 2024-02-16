import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetailsActions } from "../slices/getDetails";

const Product = ({ item, title, price, description, image }) => {
  const dispatch = useDispatch();
  const handleGetDetails = () => {
    dispatch(getDetailsActions.getDetails(item));
  };
  return (
    <div className="m-2 w-[30vw] h-[25vw] group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:bg-[#abd373] z-20 shadow-lg after:-z-20  after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
      <img
        src={image}
        className="object-contain object-center h-[15vw] w-[20vw]"
        alt=""
      />
      <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
        {title}
      </p>
      <p className="blueberry font-semibold text-gray-600 text-xs">
        {description}
      </p>
      <div className="ordernow flex flex-row justify-between items-center w-full">
        <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
          {price}
        </p>
        <Link
          to={title}
          onClick={() => handleGetDetails()}
          className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer hover:bg-white py-2 px-4 text-sm font-semibold rounded-full butn"
        >
          Order
        </Link>
      </div>
    </div>
  );
};

export default Product;
