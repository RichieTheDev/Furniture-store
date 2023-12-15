import Link from "next/link";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center h-full w-full pb-4 text-black">
      <Navbar />
      {/* Hero Content */}
      <div className="pt-10 px-4 sm:px-12 sm:pt-24 sm:relative">
        <h1 className="text-7xl sm:text-8xl">Comfort</h1>
        <h1 className="text-5xl sm:text-8xl">In Furniture</h1>
        <p className="font-semibold pt-10 sm:pt-6 text-xl">
          See our thoughtfully curated collection of Furniture, lighting, and
          Objects
        </p>
        {/* View Collection Button */}
        <Link
          href="/products"
          className="inline-block font-bold px-4 py-2 mt-8 border rounded-md bg-teal-600 text-teal-50 text-xl"
        >
          View Products
        </Link>
        {/* Additional Information */}
        <p className=" font-bold pt-6 sm:absolute sm:mb-10  sm:mr-14 sm:-bottom-12 sm:right-0  text-base">
          Functional, practical interior solutions
          <br /> that make life simple and beautiful
        </p>
      </div>
    </div>
  );
};

export default Hero;
