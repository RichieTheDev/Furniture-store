import Image from "next/image";
import Link from "next/link";

interface img {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const ProductsCategory = async () => {
  return (
    <div className="overflow-clip  clear-both px-4 sm:px-8 pt-4">
      <div>
        <div className="mt-6 sm:float-left sm:w-1/2 ">
          <h1 className="text-4xl lg:text-6xl font-bold">Our Story</h1>
          <p className="text-xl font-semibold pt-4">
            Hikli presents a range of designed furniture, lighting <br />
            and home-objects. Our belief is that quality design <br />
            informs a quality of life.
          </p>
          <Link href="/About" className=" font-semibold pt-6 underline underline-offset-4">
            About Us
          </Link>
          <div className="pt-4 flex gap-4">
            <Image
              src="/img16.jpg"
              width={150}
              height={150}
              alt="img"
              className="h-52 w-full sm:w-[24vw] lg:w-full sm:h-[45%]  object-cover rounded-md"
            />
            <Image
              src="/img12.jpg"
              width={150}
              height={150}
              alt="img"
              className="h-52 w-full sm:w-[24vw] lg:w-full sm:h-[45%]  object-cover rounded-md"
            />
          </div>
        </div>
        <div className="pt-4 flex justify-center mx-auto sm:flex-none sm:justify-normal sm:mx-0 sm:pt-0 sm:float-right  ">
          <Image
            src="/img13.jpg"
            width={300}
            height={350}
            alt="img"
            className="h-[50vh] lg:h-[65vh] sm:w-[38vw] lg:w-[40vw] object-cover rounded-md"
          />
        </div>
      </div>
      <h1 className="clear-both text-4xl pt-8 sm:pt-14 font-bold sm:text-5xl">
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
            className="h-60 w-[76vw] sm:w-[36vw] lg:w-full sm:h-[95%]  object-cover rounded-lg "
          />
          <p className=" backdrop-blur-2xl bg-white/30 absolute bottom-10 right-4  sm:bottom-20 lg:bottom-36 sm:-right-14 p-8 sm:p-10 flex flex-col items-center font-bold">
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
            className="h-60 w-[76vw] sm:w-[36vw] lg:w-full sm:h-[95%]  object-cover rounded-lg "
          />
          <p className=" backdrop-blur-2xl bg-white/30 absolute bottom-10 right-4  sm:bottom-20 lg:bottom-36 sm:-right-14 p-8 sm:p-10 flex flex-col items-center font-bold">
            <span>Sofas</span>
            <span className=" underline underline-offset-4">View</span>
          </p>
        </div>
        <div className="relative mt-6 sm:mt-0">
          <Image
            src="/img5.jpg"
            alt="img9"
            width={250}
            height={250}
            className="h-60 w-[76vw] sm:w-[36vw] lg:w-full sm:h-[95%]  object-cover rounded-lg "
          />
          <p className=" backdrop-blur-2xl bg-white/30 absolute bottom-10 right-4  sm:bottom-20 lg:bottom-36 sm:-right-14 p-8 sm:p-10 flex flex-col items-center font-bold">
            <span>Beds</span>
            <span className=" underline underline-offset-4">View</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
