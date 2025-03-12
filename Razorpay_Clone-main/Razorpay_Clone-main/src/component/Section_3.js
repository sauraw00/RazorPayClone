import React from 'react'
import img from '../img/3.png'
const Section_3 = () => {
  return (
    <div>
      <section class="bg-deepBlue overflow-hidden">
          <div class="flex flex-col justify-center items-center mx-auto  my-8 px-8">
            <h1 class="text-3xl text-white">Explore RazorpayX powered Business Banking</h1><br/>
            <div class="bg-greenLight w-7 h-1.5"></div>
        </div>
      </section>
        <section class="bg-deepBlue  overflow-hidden">
        <div class="max-w-[1080px] mt-[120px] p-8 flex flex-col lg:flex-row justify-center items-center mx-auto  lg:border border-gray-600 lg:basis-1/2 rounded-xl">
            <div class=" lg:basis-1/2 ">
              <h1 class="text-2xl font-bold text-white mb-8">Manage your company’s finances and supercharge your business banking with Razorpay</h1>
              <ul class="space-y-2 text-gray-300 ">
                <li><span class="mx-2">✔️ </span>Automate payables & compliment payments</li>
                <li><span class="mx-2">✔️ </span>Open a fully digital current account</li>
                <li><span class="mx-2">✔️ </span>Simplify and track spends with Corporate cards</li>
                <li><span class="mx-2">✔️ </span>View financial insights at a glance</li>
              </ul>
              <div class=" space-x-4 space-y-8 ">
                <button class="bg-lightBlue text-white px-5 py-2 rounded-sm">Sign Up Now</button>
                <button class="text-lightBlue hover:text-deepBlue">Know More</button>
              </div>
            </div>
            
            <div class="basis-1/2"><img src={img} alt=""/></div>
          </div>
          
        <div class=" flex flex-wrap justify-center items-center mx-auto w-[80%] gap-1  mt-[50px]">
          <div class="flex  ">
            <div class="lg:w-[340px] border border-deepBlueHead m-2 rounded-md hover:scale-105 hover:shadow-slate-200  duration-200 ">
              <h1 class="text-2xl font-bold m-4 text-white">Create Account</h1>
              <p class="text-gray-400 m-4" >Current accounts for fast-growing businesses,supported by best technology</p>
              <button class="text-blue-500 m-4">Know More  </button>
            </div>
          </div>
          <div class="flex  ">
            <div class="lg:w-[340px]   border border-deepBlueHead m-2 rounded-md hover:scale-105 hover:shadow-slate-200  duration-200 ">
              <h1 class="text-2xl font-bold m-4 text-white">Payouts</h1>
              <p class="text-gray-400 m-4" >Current accounts for fast-growing businesses,supported by best technology</p>
              <button class="text-blue-500 m-4">Know More  </button>
            </div>
          </div>
          
          <div class="flex  ">
            <div class="lg:w-[340px]  border border-deepBlueHead m-2 rounded-md hover:scale-105 hover:shadow-slate-200  duration-200 ">
              <h1 class="text-2xl font-bold m-4 text-white">Payroll</h1>
              <p class="text-gray-400 m-4" >Current accounts for fast-growing businesses,supported by best technology</p>
              <button class="text-blue-500 m-4">Know More  </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center flex-col lg:flex-row items-center lg:border mx-auto m-8 border-deepBlueHead max-w-[1080px] gap-x-8">
          <h1 class="text-white text-xl">Check out the live demo to learn how RazorpayX works. No sign-up required!</h1>
          <button class="bg-lightBlue text-white px-10 py-2 rounded-sm m-4">Check out the demo ➡️</button>
        </div>
      </section>

    </div>
  )
}

export default Section_3
