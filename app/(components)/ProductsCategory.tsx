import Image from "next/image";
import Link from "next/link";

const ProductsCategory = async () => {
  return (
    <div className="overflow-clip clear-both px-4 sm:px-12 sm:pt-4">
      <div>
        <div className="sm:mt-6 text-justify lg:text-center ">
          <h1 className="h1header">Our Story</h1>
          <p className="text-xl font-semibold pt-4">
            Hikli presents a range of designed furniture, lighting <br />
            and home-objects. Our belief is that quality design <br />
            informs a quality of life.
          </p>
          <Link
            href="/about"
            className="text-xl sm:text-3xl font-semibold pt-6 underline underline-offset-4"
          >
            About Us
          </Link>
          <div className="pt-4 flex justify-center mx-auto  gap-4">
            <Image
              src="/img16.jpg"
              width={250}
              height={250}
              alt="img"
              className="bigimage"
            />
            <Image
              src="/img13.jpg"
              width={250}
              height={250}
              alt="img"
              className="sm:hidden lg:inline hidden bigimage"
            />
            <Image
              src="/img12.jpg"
              width={250}
              height={250}
              alt="img"
              className="bigimage"
            />
          </div>
        </div>
        <div className="pt-4 flex justify-center mx-auto sm:flex-none sm:justify-normal sm:mx-0 sm:pt-0 sm:float-right  "></div>
      </div>
      <h1 className="clear-both h1header pt-8 sm:pt-14">
        Products Categories{" "}
      </h1>
      <p className="pt-2 font-semibold  sm:text-xl text-lg">
        Exquisite furniture design <br />
        -for your comfort
      </p>

      <div className="flex flex-col  sm:flex-row gap-14 sm:justify-evenly sm:pt-10 pt-4">
        <div className="relative">
          <Image
            src="/img8.jpg"
            alt="img8"
            width={250}
            height={250}
            className="menupic "
          />
          <Link href="/products/table" className="menu">
            <span>Table</span>
            <span className=" underline underline-offset-4">View</span>
          </Link>
        </div>
        <div className="relative mt-6 sm:mt-0">
          <Image
            src="/img9.jpg"
            alt="img9"
            width={250}
            height={250}
            className="menupic"
          />
          <Link href="/products/lamps" className="menu">
            <span>Lamps</span>
            <span className="underline underline-offset-4">View</span>
          </Link>
        </div>
        <div className="relative mt-6 sm:mt-0">
          <Image
            src="/img5.jpg"
            alt="img9"
            width={250}
            height={250}
            className="menupic"
          />
          <p className=" menu">
            <span>Beds</span>
            <span className="underline underline-offset-4">View</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
