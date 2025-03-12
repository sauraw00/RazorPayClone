import React from 'react'
import ind from '../img/ind.png'
import Logo from '../img/rp-white.png'
const Navbar = () => {

  

  return (
    <div>
     
    <nav class="bg-deepBlue  hidden lg:block ">
      <div class="relative w-full max-w-[1080px] mx-auto flex  items-center justify-evenly">
        <a href="/" class="cursor-pointer py-7 pr-7"><img src={Logo} width="125px" height="30px " alt=""/></a>
        <ul class="flex space-x-6">
            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Payments</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Banking+</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
           
            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Line Of Credit</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Payroll</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Resources</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Support</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Pricing</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
        </ul>
        <div class="flex space-x-6 mx-6 justify-center items-center">
          <img src={ind} alt="" class="w-6 h-4"/>
          <button class="text-white border border-blue-500 py-2 px-4 font-mullish">Log In</button>
          <button class="text-sky-600 border bg-white border-blue-500 px-8 py-2 rounded-sm  hover:text-sky-700 font-semibold">Sign Up</button>
        </div>
      </div>
    </nav>
    

    <nav class="bg-deepBlue lg:hidden ">
      <div class="flex justify-evenly">
        <a href="/" class="cursor-pointer py-7 pr-7"><img src={Logo} width="125px" height="30px " alt=""/></a>
        <button class="text-white  px-4 font-mullish">Log In</button>
        <button id="hum" onclick="fun1()"><img src="https://w7.pngwing.com/pngs/124/176/png-transparent-hamburger-button-computer-icons-menu-minimalist-menu-angle-text-rectangle.png" alt="Error" class=" bg-white h-10"/></button>
      </div>
      <div id="a1" class="relative w-full h-screen  max-w-[1080px] mx-auto flex flex-col bg-white items-center hidden">
       
        <ul class="flex flex-col items-center ">
          <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
            <a href="#">Payments</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Banking+</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
           
            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Line Of Credit</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Payroll</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>

            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Resources</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            
            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Support</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            
            <li class="text-black font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Pricing</a>
              <div class="absolute bottom-0  w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <button class="text-sky-600 border bg-white border-blue-500 px-8 py-2 rounded-sm  hover:text-sky-700 font-semibold hover:bg-black hover:text-white">Sign Up</button>
            
          </ul>
        </div>
    </nav>
    </div>
  )
}
export default Navbar
