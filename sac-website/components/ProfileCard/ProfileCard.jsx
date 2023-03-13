import React from 'react'
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

function ProfileCard({designation}) {
  return (
    <div className=" w-[165px] lg:w-[570px] h-[260px] lg:h-[800px] rounded-md overflow-hidden flex flex-col ">
    <div className="bg-[#fffceb] h-[40%] rounded-md flex items-center justify-center">
      <h1
        className={
          " text-[#A4161A] font-bold  text-md md:text-4xl"
        }
      >
        {designation}
      </h1>
    </div>
    <div className="rounded-md h-[120%] bg-[#A4161A] mx-4 lg:mx-14 -mt-6 lg:-mt-12">
      <img
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
        alt="..."
        class="shadow rounded-full w-16 lg:w-48 mx-auto mt-4 lg:mt-9 align-middle border-none mb-3"
      />
      <p className="flex justify-center  lg:my-8 text-white font-semibold  text-md md:text-2xl">
        RRocky Dj Don
      </p>
      <div className="bg-[#FFFFFF] rounded-md my-3 mx-2 lg:my-7 lg:p-3 lg:mx-5 flex items-center">
        <IoCall className="text-[#A4161A]  mx-1 md:mx-8 text-xs md:text-3xl" />
        <a
          href="tel:+4733378901"
          className="text-[#A4161A] text-xs md:text-3xl"
        >
          +4733378901
        </a>
      </div>
      <div className="bg-[#FFFFFF] rounded-md  mx-2 lg:my-5 lg:p-3 lg:mx-5 flex items-center justify-evenly">
        <BsFillEnvelopeFill className="text-[#A4161A] flex justify-center text-md md:text-3xl" />
        <a
          href="mailto:sdbjwbdhij@gmail.com"
          className="text-[#A4161A]  text-xs md:text-2xl"
        >
          sdbjwbij@gmail.com
        </a>
      </div>
    </div>
  </div>
  )

}

export default ProfileCard