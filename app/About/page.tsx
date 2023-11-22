import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-3 sm:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl text-center mt-4 ">
          About Us
        </h1>
        <p className="text-lg sm:text-right text-justify font-semibold mt-2">
          Our product and Furniture designs evolve through a data driven <br />
          process in close collaboration with our clients combined
          <br /> with our passion and dedication for design
        </p>
        <div className="sm:hidden mt-4 sm:mt-8 flex justify-evenly space-x-2">
          <Image
            src="/img10.jpg"
            height={200}
            width={200}
            alt="/"
            className="w-[45vw] rounded-xl object-cover"
          />
          <Image
            src="/img11.jpg"
            height={200}
            width={200}
            alt="/"
            className="w-[45vw] rounded-xl object-cover"
          />

          
        </div>
        <div className="mt-4 sm:mt-8 hidden sm:flex gap-4 justify-evenly">
        <img src="/img16.jpg" alt="" className="w-[45vw] h-[60vh] object-cover rounded-lg" /><img src="/img15.jpg" alt="" className="w-[45vw] h-[60vh] object-cover rounded-lg" />
        
        </div>
        <div className="pt-4">
          <h1 className="text-4xl font-bold sm:text-5xl  mt-4">
            Exceptional <br />
            Savoir
          </h1>
          <p className="pt-2 font-semibold flex justify-evenly items-baseline gap-4">
            From the start of every project, we make sure we <br />
            develop an in-depth knowledge of the industry <br />
            and product we are developing
            <p className="">
            We strive to develop long-term products
            <br /> and concepts that are durable, sustainable
            <br />
            and age gracefully over time.
          </p>
          </p>
        
          <img src="/img002.jpg" alt="" className="pt-4 w-screen h-[60vh] rounded-lg" />
         
         <div className="mt-4 sm:mt-6">
<h1 className="text-4xl font-bold sm:text-5xl text-left  sm:text-right mt-4">
  Attention <br/> To The Details
</h1>
<p className="pt-2 sm:pt-4 font-semibold text-left  sm:text-right">
Durability and Feasibility are important aspects<br/>of our design approach
</p>
<div className="pt-2 sm:pt-4 flex justify-evenly" >
  <div className="space-y-4">
  <img src="/img4.jpg" alt="" className="w-[35vw] sm:w-[30vw] sm:h-[40vh] lg:h-[50vh] object-cover rounded-lg" />
  <img src="/img7.jpg" alt="" className="sm:ml-20 lg:ml-[8rem] w-[35vw] sm:w-[30vw] sm:h-[40vh] lg:h-[50vh] object-cover rounded-lg" />
  </div>

<div className="flex justify-end ml-auto">
<img src="/img10.jpg" alt="" className="w-[55vw] sm:w-[45vw] sm:h-[65vh] lg:h-[90vh] object-cover rounded-lg" />
</div>
        
</div>
         </div>
        </div>
      </div>
    </>
  );
};

export default About;
