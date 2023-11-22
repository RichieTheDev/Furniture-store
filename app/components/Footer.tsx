import React from "react";

const Footer = () => {
  return (
    <>
      <div className="sm:px-12 px-4 pt-6 sm:text-right clear-both">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Subscribe To Our
          <br />
          NewsLetter
        </h1>
        <p className="font-semibold pt-2 pb-3">Never miss out, stay updated</p>
        <input
          type="text"
          className="border p-2 bg-slate-100 rounded-md w-full sm:w-[40vw] lg:w-[35vw] "
          placeholder="@email.com"
        />
      </div>
      <div className="w-[95%] mt-10  mx-auto border-t border-gray-900"></div>
      <div className="px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row  sm:justify-between items-baseline mt-6">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-4xl font-bold">Hikli</h1>
            <p className="text-lg sm:text-2xl font-semibold">
              We have provided clients around the world
              <br />
              with solutions for a diverse range of design
              <br />
              requirements{" "}
            </p>
          </div>
          <div className="flex mx-auto flex-col space-y-4 items-baseline text-lg font-semibold">
            <p>Home</p>
            <p>Products</p>
            <p>Lookbook</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="hidden sm:flex mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p>Subscribe</p>
            <p>Support</p>
          </div>
          <div className="hidden lg:flex  mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-10  mx-auto border-t border-gray-900"></div>
      <p className="flex justify-center mx-auto font-semibold pb-6">
        2023 HIKLI. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
