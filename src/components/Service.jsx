import React from "react";
import { FaTruck, FaPizzaSlice } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

function Service() {
  return (
    <div className="h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl">Our service</h2>
      <p className="text-center w-[420px]">
        ALl the features you want. Rations makes it easy to build and manage
        your food order.
      </p>
      <div className="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-sm h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <FaTruck className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Free Delivery</h2>
            <p className="text-base px-4">We are providing free home delivery services for our clients at anytime, anywhere of the corner.</p>
          </div>
        </div>
        <div className="max-w-sm h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <Ri24HoursFill className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">24/7 Open</h2>
            <p className="text-base px-4">WOur restaurant is open 24 hours and we are providing the best service for our honorable clients.</p>
          </div>
        </div>
        <div className="max-w-sm h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <FaPizzaSlice className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Free Delivery</h2>
            <p className="text-base px-4">We are providing delicious so many food items that you will love most to eat in your daily life.</p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Service;
