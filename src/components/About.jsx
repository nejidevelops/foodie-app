import React from "react";

function About() {
  return (
    <div className="h-auto sm:h-[100vh] flex flex-col sm:flex-row gap-4 sm:gap-24 items-center justify-center">
      <img
        src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600"
        className="w-full sm:w-1/2"
        alt="About Us"
      />
      <div className="w-full sm:w-[420px] gap-4 sm:gap-8 flex flex-col items-center sm:items-start">
        <h2 className="text-2xl sm:text-4xl">About</h2>
        <p className="text-sm sm:text-base">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
        <p className="text-sm sm:text-base">
          Our restaurant is open 24 hours, and we are providing the best
          service for our honorable clients.
        </p>
        <button className="bg-[#E14B00] text-white font-bold px-4 py-2 rounded-[6px] border-0 hover:bg-white hover:text-[#E14B00]">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
