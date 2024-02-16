import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Products = () => {
  const [data, setdata] = useState(null);
  const { catagory } = useParams();
  console.log(catagory);
  useEffect(() => {
    const smartphone = async () => {
      switch (catagory) {
        case "smartphones":
          const raw = await fetch(
            "https://dummyjson.com/products/category/smartphones"
          );
          const smartphones = await raw.json();
          return setdata(smartphones);

        case "mens-shirts":
          const raw2 = await fetch(
            "https://dummyjson.com/products/category/mens-shirts"
          );
          const mens = await raw2.json();
          return setdata(mens);

        case "skincare":
          const raw3 = await fetch(
            "https://dummyjson.com/products/category/skincare"
          );
          const skincare = await raw3.json();
          return setdata(skincare);

        case "women-dresses":
          const raw4 = await fetch(
            "https://dummyjson.com/products/category/womens-dresses"
          );
          const women = await raw4.json();
          return setdata(women);

        case "womens-shoes":
          const raw5 = await fetch(
            "https://dummyjson.com/products/category/womens-shoes"
          );
          const WomenShoes = await raw5.json();
          return setdata(WomenShoes);
        case "sunglasses":
          const raw6 = await fetch(
            "https://dummyjson.com/products/category/sunglasses"
          );
          const sunglasses = await raw6.json();
          return setdata(sunglasses);
        case "tops":
          const raw7 = await fetch(
            "https://dummyjson.com/products/category/tops"
          );
          const tops = await raw7.json();
          return setdata(tops);
        case "mens-watches":
          const raw8 = await fetch(
            "https://dummyjson.com/products/category/mens-watches"
          );
          const MensWatches = await raw8.json();
          return setdata(MensWatches);
        case "groceries":
          const raw9 = await fetch(
            "https://dummyjson.com/products/category/groceries"
          );
          const groceries = await raw9.json();
          return setdata(groceries);
      }
    };
    smartphone();
  }, []);

  return (
    <div>
      {data === null ? (
        <Loader />
      ) : (
        <div className=" h-screen flex items-center justify-center flex-wrap p-[2vw]">
          {data.products.map((item) => {
            return (
              <Product
                item={item}
                title={item.title}
                description={item.description}
                image={item.images[0]}
                price={item.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
