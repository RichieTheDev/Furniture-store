import { Suspense } from "react";
import Discover from "./components/Discover";
import Navbar from "./components/Navbar";
import ProductsCategory from "./components/ProductsCategory";
const format = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<p>Loading feed...</p>}>
        <Discover />
      </Suspense>

      <ProductsCategory />
    </div>
  );
};

export default format;
