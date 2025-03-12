import React from 'react'
import img from '../img/4.4.svg'

const Section_4 = () => {
  return (
    <div>
      
      <section class="overflow-hidden bg-gray-50">
            <div class=" flex flex-wrap  justify-center items-center mx-auto w-[80%] mt-20 mb-40">

                <div class="lg:w-[340px] h-[240px] rounded-md m-4">
                  <div class="p-8">
                    <h1 class="text-4xl font-bold text-black">New in the</h1>
                    <h1 class="text-4xl font-bold text-sky-600">Razorpay</h1>
                    <h1 class="text-4xl font-bold text-black">Product Suite</h1>
                  </div>
                </div>

                <div class="lg:w-[340px] h-[240px] rounded-md shadow-md duration-200 hover:scale-105 m-4 ">
                  <div class="p-8">
                    <img src={img} alt="" width="42px" />
                    <h1 class="text-xl font-bold  text-black">Payment Button</h1>
                    <p class="text-gray-400 " >Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                    <button class="text-sky-600  font-semibold  py-4">Know More  </button>
                  </div>
                </div>

                <div class="lg:w-[340px] h-[240px] rounded-md shadow-md duration-200 hover:scale-105  m-4">
                  <div class="p-8">
                    <img src={img} alt="" width="42px" />
                    <h1 class="text-xl font-bold  text-black">Payment Button</h1>
                    <p class="text-gray-400 " >Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                    <button class="text-sky-600 font-semibold  py-4 ">Know More  </button>
                  </div>
                </div>

                <div class="lg:w-[340px] h-[240px] rounded-md shadow-md duration-200 hover:scale-105  m-4">
                  <div class="p-8">
                    <img src={img} alt="" width="42px" />
                    <h1 class="text-xl font-bold  text-black">Payment Button</h1>
                    <p class="text-gray-400 " >Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                    <button class="text-sky-600  font-semibold  py-4">Know More  </button>
                  </div>
                </div>

                <div class="lg:w-[340px] h-[240px] rounded-md shadow-md duration-200 hover:scale-105 m-4 ">
                  <div class="p-8">
                    <img src={img} alt="" width="42px" />
                    <h1 class="text-xl font-bold  text-black">Payment Button</h1>
                    <p class="text-gray-400  " >Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                    <button class="text-sky-600 font-semibold  py-4">Know More  </button>
                  </div>
                </div>

                <div class="lg:w-[340px] h-[240px] rounded-md shadow-md duration-200 hover:scale-105 m-4 ">
                  <div class="p-8">
                    <img src={img} alt="" width="42px" />
                    <h1 class="text-xl font-bold  text-black">Payment Button</h1>
                    <p class="text-gray-400 " >Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                    <button class="text-blue-500 ">Know More  </button>
                  </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Section_4
