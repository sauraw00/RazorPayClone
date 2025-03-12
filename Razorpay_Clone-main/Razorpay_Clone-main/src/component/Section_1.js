import React from 'react'
import img1 from '../img/1.jpg'

const Section_1 = () => {
  return (
    <div>
        <section class=" bg-deepBlue h-screen block">
        <div class=" max-w-[1080px]  flex flex-col lg:flex-row overflow-hidden justify-between items-center mx-auto p-8">
          <div class="space-y-8">
            <h1 class="font-bold text-[40px] leading-1.2 text-white">Power your finance,<br/>grow your business</h1>
            <div class="w-6 h-1 bg-greenLight"></div>
            <p class="text-white text-[18px] opacity-70">Accept Payments from Customers.Automate Payouts to Vendors & Capitals.Never run out of working capital.</p>
            <button class="bg-lightBlue text-white rounded-md  transition-all duration-200 cursor-pointer py-[14px] px-[18px]">Sign Up Now</button>
          </div>
          <div class="w-[400px] lg:w-[1132px]  ">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
      <section class="block mt-8 m-4">
        <div class="flex flex-col justify-center items-center mx-auto  max-w[1080px] ">
          <h2 class="p-4 font-bold text-2xl ">Accept Payments with Razorpay Payment Suite</h2>
          
          <div class="w-6 h-1 bg-greenLight"></div>
        </div>
      </section>
    </div>
  )
}

export default Section_1
