import { Suspense } from "react";
import Discover from "./components/Discover";
import ProductsCategory from "./components/ProductsCategory";
import Hero from "./components/Hero";
const format = () => {
  return (
    <>
      <Hero />
      <ProductsCategory />
      <Suspense fallback={<p>Loading, Please wait...</p>}>
        <Discover />
      </Suspense>      
    </>
  );
};

export default format;
