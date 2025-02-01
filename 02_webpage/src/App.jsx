// import React from 'react'
  import logo from "./assets/logo.jpg"
  import shose from "./assets/shoes.jpg"
  import nike from "./assets/nike.png"
  import { RiFacebookCircleFill } from "react-icons/ri";
  import { FaAmazon } from "react-icons/fa";
function App() {
  return (
    <>
       <div className=" h-[100vh] w-[100%] m-0 p-0">
       <nav className="flex justify-between item-center mx-32">
        <div className="logo  "> 
          <img className=" rounded  w-[125px] h-[70px]" src={logo} alt="" />
        </div>
        <div >
          <img  className="w-[80px] h-[50px]  mt-4 mx-auto" src={nike} alt="" />
          <ul className="flex gap-8 font-bold mt-6 item-center">
            <li>Home</li>
            <li>About</li>
            <li>More</li>
            <li>Contact</li>
          </ul>
        </div>
          <button className=" bg-red-700 px-8 mt-4 h-[35px] text-white "> Login </button>
         
       </nav>

      <div className="head mx-8 flex gap-16 mt-16 justify-center">
      <div className="about w-[40%]  ">
        <h1 className="text-[4.5rem] font-bold px-8 ml-16 line leading-none"> YOUR FEET DESEVER THE BEST</h1>
        <p className=" pl-24 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis animi asperiores esse officia magnam cumque adipisci nam, eaque corporis adipisci.x</p>
         <div className="btn ml-24">
          <button className=" bg-red-700 px-8 mt-4 h-[35px] text-white "> Shop Now </button>
          <button className="  px-8 mt-4 h-[35px] border ml-8 "> Category </button>
         </div>
         <h2 className="mt-6 ml-24 font-medium">Also Aveable on </h2>
         <div className="icon ml-24 flex gap-4 text-2xl mt-2">
         <RiFacebookCircleFill />
         <FaAmazon />
         </div>

      </div>

      <div className="image w-[40%] pl-32 mt-8"> 
          <img className=" h-[20rem] w-[20rem] " src={shose} alt="" />
        </div>

      </div>


       </div>

       
    </>
  )
}

export default App