import React from 'react'
import img_2 from '../img/2.png'

const Section_2 = () => {
  return (
    <div>
        <section class="relative mt-[80px] overflow-hidden">
        <div class="flex justify-center ">
          <div class="bg-white lg:border  w-[1080px] flex flex-col lg:flex-row justify-between rounded-sm p-6">
              <div class="m-5 space-y-4">
                <h1 class="lg:text-3xl text-2xl font-bold">Supercharge your business with the all‑powerful <span class="text-sky-500">Payment Gateway</span> </h1>
                  <ul class="space-y-3 ">
                      <li><span><span class="mx-4">✔️</span>  100+ Payment Methods</span></li>  
                      <li><span><span class="mx-4">✔️</span>  Industry Leading Success Rate</span></li>
                      <li><span><span class="mx-4">✔️</span>  Superior Checkout Experience</span></li>
                      <li><span><span class="mx-4">✔️</span>  Easy to Integrate</span></li>
                      <li><span><span class="mx-4">✔️</span>  Instant Settlements from day 1</span></li>
                      <li><span><span class="mx-4">✔️</span>  In-depth Reporting and Insights</span></li>
                  </ul>
                  <div class="flex space-x-4  " >
                    <button class="bg-lightBlue text-white px-5 py-2 rounded-sm">Sign Up Now</button>
                    <button class="text-lightBlue hover:text-deepBlue">Know More</button>
              </div>
            </div>

              <div class="w-[400px] lg:w-[800px] lg:block hidden">
                <img src={img_2} alt=""/>
              </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Section_2
