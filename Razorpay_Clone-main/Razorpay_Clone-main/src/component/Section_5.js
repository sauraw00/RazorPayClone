import React from 'react'
import img1 from '../img/5.1.svg'
import img2 from '../img/5.2.svg'
import img3 from '../img/5.3.svg'
import img4 from '../img/5.4.svg'
import img5 from '../img/5.5.svg'
import img6 from '../img/5.6.svg'
import img7 from '../img/5.7.svg'
import img8 from '../img/5.8.svg'
const Section_5 = () => {
  return (
    <div>
    <section class="bg-gradient-to-r from-blue-800 to-sky-600 overflow-hidden">
        <div class="flex flex-col justify-center items-center mx-auto mt-8">
          <h2 class="p-4 font-bold text-xl text-white text-3xl">Features</h2>
          <div class="w-6 h-1 bg-greenLight"></div>
          <div class="m-6 text-white ">
            <p >Empower your business with all the right tools to accept</p>
            <p >online payments and provide the best customer experience</p>
          </div>
        </div>
      </section>
      <section class="bg-gradient-to-r from-blue-800 to-sky-600 overflow-hidden  p-16">
        <div class="max-w-[1300px] flex flex-col justify-center items-center mx-auto  ">
          <div class="flex flex-col lg:flex-row ">
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img1} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Instant Activation</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img2} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Easy Integration</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img3} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">API Driven</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img4} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">100+ payment modes</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
          </div> 
          <div class="flex flex-col lg:flex-row">
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img5} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Simple Pricing</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img6} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Best in Industry Support</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img7} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Dashboard Reporting</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            <div class="lg:h-[200px] lg:w-[240px] m-4  ">
              <img src={img8} alt="" class=""/>
              <h2 class="text-lg font-semibold text-white m-2 ">Secure</h2>
              <p class="text-gray-200 m-2">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section_5
