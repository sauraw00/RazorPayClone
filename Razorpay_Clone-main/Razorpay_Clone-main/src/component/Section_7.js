import React from 'react'

import img from '../img/6.svg'
const Section_7 = () => {
  return (
    <div>
       
       <section class="bg-gradient-to-r from-blue-800 to-sky-600   pt-6 overflow-hidden p-6" >
        <div class="max-w-[1080px]  flex flex-col lg:flex-row justify-center items-center mx-auto">
          <div class="text-white m-6">
            <div class="">
              <h1 class="text-2xl font-bold">Supercharge your business with Razorpay</h1>
              <div class="w-6 h-1 bg-greenLight my-6-"></div>
            </div>
            <div  class="my-6">
              <p>Sign up now to experience the future of payments and offer your customers the best checkout experience.</p>
            </div>
            <div  class="my-6  flex flex-col lg:flex-row">
                <span class="">✔️ Quick onboarding</span>
                <span class="">✔️ Access to entire product suite</span>
                <span class="">✔️ API access</span>
                <span class="">✔️ 24x7 support</span>
             </div>
            <button class="bg-white text-sky-600 px-5 font-bold py-2 rounded-sm">Sign Up Now ➡️</button>
          </div>

          <div class=" w-[300px]  lg:w-[400px] m-2">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section_7
