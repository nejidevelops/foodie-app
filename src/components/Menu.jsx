import React from "react";

function Menu() {
  return (
    <div className="h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl">Choose what food you want</h2>
      <p className="text-center w-[420px]">
        Our restaurant is open 24 hours and we are providing the best service
        for our honorable clients.
      </p>
      <div className="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-90 rounded overflow-hidden shadow-lg flex flex-col bg-[#f6f6f6">
          <img
            className="w-full overflow-hidden object-cover rounded-t-lg h-[40vh]"
            src="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Burger"
          />
          <div className="px-4 mt-2">
            <div className="font-bold text-xl">Burger</div>
            <p className="text-gray-700 text-base">The popular fast food.</p>
          </div>
          <div className="px-4 pt-4 pb-2 flex items-center justify-between mb-2">
            <span className="inline-block text-sm font-semibold">50$</span>
            <button className="rounded-full bg-[#ff5001] text-white px-3 py-2 text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-90 rounded overflow-hidden shadow-lg flex flex-col bg-[#f6f6f6]">
          <img
            className="w-full overflow-hidden object-cover rounded-t-lg h-[40vh]"
            src="https://images.pexels.com/photos/4109077/pexels-photo-4109077.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Pizza"
          />
          <div className="px-4 mt-2">
            <div className="font-bold text-xl">Pizza</div>
            <p className="text-gray-700 text-base">The popular fast food.</p>
          </div>
          <div className="px-4 pt-4 pb-2 flex items-center justify-between mb-2">
            <span className="inline-block text-sm font-semibold">75$</span>
            <button className="rounded-full bg-[#ff5001] text-white px-3 py-2 text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-90 rounded overflow-hidden shadow-lg flex flex-col bg-[#f6f6f6]">
          <img
            className="w-full overflow-hidden object-cover rounded-t-lg h-[40vh]"
            src="https://images.pexels.com/photos/4057750/pexels-photo-4057750.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Pasta"
          />
          <div className="px-4 mt-2">
            <div className="font-bold text-xl">Pasta</div>
            <p className="text-gray-700 text-base">The popular fast food.</p>
          </div>
          <div className="px-4 pt-4 pb-2 flex items-center justify-between mb-2">
            <span className="inline-block text-sm font-semibold">20$</span>
            <button className="rounded-full bg-[#ff5001] text-white px-3 py-2 text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-90 rounded overflow-hidden shadow-lg flex flex-col bg-[#f6f6f6]">
          <img
            className="w-full overflow-hidden object-cover rounded-t-lg h-[40vh]"
            src="https://images.pexels.com/photos/2491272/pexels-photo-2491272.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Stick"
          />
          <div className="px-4 mt-2">
            <div className="font-bold text-xl">Stick</div>
            <p className="text-gray-700 text-base">The popular fast food.</p>
          </div>
          <div className="px-4 pt-4 pb-2 flex items-center justify-between mb-2">
            <span className="inline-block text-sm font-semibold">20$</span>
            <button className="rounded-full bg-[#ff5001] text-white px-3 py-2 text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
