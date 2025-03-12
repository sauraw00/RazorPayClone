import React from 'react'

import img from '../img/6.png'
const Section_6 = () => {
  return (
    <div>
    <section class="bg-blue-50 p-10 overflow-hidden ">
        <div class="max-w-[1080px] flex flex-col lg:flex-row justify-center items-center mx-auto mt-10 mb-20">
          <div class="flex flex-col">
            <div class="my-6">
              <h1 class="text-2xl font-bold">Join the 50,00,000 businesses using Razorpay</h1>
              <div class="w-6 h-1 bg-greenLight my-6-"></div>
            </div>
            <div  class="my-6">
              <p>We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.</p>
            </div>
            <div  class="my-6">
              <p>Focus on your business while we handle the complexities of payments for you.</p>
            </div>
            <div class=" ">
              <button class="bg-lightBlue font-bold text-white px-5 py-2 rounded-sm">Sign Up Now ➡️</button>
            </div>
          </div>

          <div class=" w-[350px] mt-4 lg:mt-0 lg:w-[1000px]">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section_6
