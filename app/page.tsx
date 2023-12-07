import { Suspense } from "react";
import Discover from "./components/Discover";
import ProductsCategory from "./components/ProductsCategory";
import Hero from "./components/Hero";
const format = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<p>Loading feed...</p>}>
        <Discover />
      </Suspense>
      <ProductsCategory />
    </>
  );
};

export default format;
