import React from 'react';

function Home() {
  return (
    <div className='bg-[url(https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1600)] h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-white px-4 sm:px-10 md:px-20 lg:px-40'>
      <div className='w-full flex flex-col gap-y-4'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Enjoy your <br/>delicious Food</h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-[580px]'>Just order and wait for a while we'll be there at your door. Delivering the best foods for you. We are delivering the best foods.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12'>
          <button className='bg-[#E14B00] text-white font-bold px-4 py-2 rounded-[6px] border-0 hover:bg-white hover:text-[#E14B00]'>Order Now</button>
          <button className='border border-[#E14B00] rounded-[6px] text-[#E14B00] px-4 py-2 hover:border-white hover:text-white mt-2 sm:mt-0'>View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
