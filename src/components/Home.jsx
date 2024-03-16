import React from 'react';

function Home() {
  return (
    <div className='bg-[url(https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1600)] h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-white px-[40px] sm:px-[140px]'>
      <div className='w-3/4 flex flex-col gap-y-4'>
        <h1 className='text-8xl'>Enjoy your <br/>delicious Food</h1>
        <p className='text-[24px] w-[580px]'>Just order and wait for a while we&apos;ll be there at your door. Delivering the best foods for you. We are delivering the best foods.</p>
        <div className='flex gap-4'>
          <button className='bg-[#E14B00] text-white font-bold px-4 py-2 rounded-[6px] border-0'>Order Now</button>
          <button className='border border-[#E14B00] rounded-[6px] text-[#E14B00] px-4 py-2'>View Menu</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
