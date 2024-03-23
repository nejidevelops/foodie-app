import React from "react";
import { FaTruck, FaPizzaSlice } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

function Service() {
  return (
    <div className="h-auto sm:h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6 px-4 sm:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-4xl">Our service</h2>
      <p className="text-center max-w-md">
        All the features you want. Rations makes it easy to build and manage
        your food order.
      </p>
      <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-sm h-auto sm:h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <FaTruck className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-lg sm:text-xl mb-2">Free Delivery</h2>
            <p className="text-sm sm:text-base px-4">We provide free home delivery services for our clients anytime, anywhere.</p>
          </div>
        </div>
        <div className="max-w-sm h-auto sm:h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <Ri24HoursFill className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-lg sm:text-xl mb-2">24/7 Open</h2>
            <p className="text-sm sm:text-base px-4">Our restaurant is open 24 hours, providing the best service for our honorable clients.</p>
          </div>
        </div>
        <div className="max-w-sm h-auto sm:h-80 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center text-center bg-[#f6f6f6] hover:bg-[#ff5001] hover:text-white">
          <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
            <FaPizzaSlice className="h-10 w-10 text-black hover:text-black" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-lg sm:text-xl mb-2">Delicious Food</h2>
            <p className="text-sm sm:text-base px-4">We provide delicious food items that you will love most to eat in your daily life.</p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Service;
