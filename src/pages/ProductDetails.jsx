import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartSliceActions } from "../slices/CartSlice";
import Products from "./Products";
import Product from "../components/Product";

const ProductDetails = () => {
  const [allProducts, setallProducts] = useState(null);
  const product = useSelector((store) => store.productDetails);
  const dispatch = useDispatch();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    dispatch(CartSliceActions.addToCart(product));
  };

  useEffect(() => {
    async function allProducts() {
      const raw = await fetch("https://dummyjson.com/products");
      const allProducts = await raw.json();
      setallProducts(allProducts);
    }
    allProducts();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-full dark:bg-gray-800 py-8 h-fit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[400px] w-[35vw] dark:bg-gray-700 mb-4">
              <Slider {...settings}>
                {product.images.map((image) => {
                  return (
                    <img
                      className=" h-[400px] w-[35vw] object-contain"
                      src={image}
                      alt="Product Image"
                    />
                  );
                })}
              </Slider>
            </div>
            <div className="flex  mt-[1vw] mr-10 mb-4">
              <div className="w-1/2 px-2 m-auto">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product.price}
                  </span>
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability: {product.stock}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-screen flex items-center px-10 my-5 gap-2 flex-wrap">
        {allProducts !== null
          ? allProducts.products.map((item) => {
              return (
                <Product
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.thumbnail}
                />
              );
            })
          : null}
      </div> */}
    </div>
  );
};

export default ProductDetails;
