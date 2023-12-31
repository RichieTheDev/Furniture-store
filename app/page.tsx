import { Suspense } from "react";
import Discover from "./(components)/Discover";
import ProductsCategory from "./(components)/ProductsCategory";
import Hero from "./(components)/Hero";
import Loading from "./loading";
const format = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Discover />
      </Suspense>
      <ProductsCategory />
    </>
  );
};

export default format;
