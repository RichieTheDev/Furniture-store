import Image from "next/image";
import React from "react";

const ProductsCategory = () => {
  return (
    <div className="px-4 sm:px-8 pt-4 sm:pt-10">
      <h1 className="text-4xl pl-4 pt-2 lg:pl-10 font-bold sm:text-5xl">
        Products
        <h1 className="flex  items-baseline">
          Categories{" "}
          <span className="hidden sm:flex flex-col justify-center mx-auto font-semibold text-base">
            Exquisite furniture design <br />
            -for your comfort
          </span>
        </h1>
      </h1>
      <p className="pl-4 pt-2 flex sm:hidden flex-col justify-center mx-auto font-semibold items-baseline text-base">
        Exquisite furniture design <br />
        -for your comfort
      </p>

      <div className="flex flex-col  sm:flex-row sm:justify-between lg:mx-32 md:mx-10 sm:pt-10 pt-4">
        <div className="relative">
          <Image
            src="/img8.jpg"
            alt="img8"
            width={250}
            height={250}
            className="h-60 w-[76vw] sm:w-[36vw] lg:w-full sm:h-[75%] lg:h-[80%] object-cover rounded-lg "
          />
          <p className=" backdrop-blur-2xl bg-white/30 absolute bottom-10 right-4  sm:bottom-40 lg:bottom-40 sm:-right-14 p-8 sm:p-10 flex flex-col items-center font-bold">
            <span>Chairs</span>
            <span className=" underline underline-offset-4">View</span>
          </p>
        </div>
        <div className="relative mt-6 sm:mt-0">
          <Image
            src="/img9.jpg"
            alt="img9"
            width={250}
            height={250}
            className="h-60 w-[76vw] sm:w-[36vw] lg:w-full sm:h-[75%] lg:h-[80%] object-cover rounded-lg "
          />
          <p className=" backdrop-blur-2xl bg-white/30 absolute bottom-10 right-4  sm:bottom-40 lg:bottom-40 sm:-right-14 p-8 sm:p-10 flex flex-col items-center font-bold">
            <span>Sofas</span>
            <span className=" underline underline-offset-4">View</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
