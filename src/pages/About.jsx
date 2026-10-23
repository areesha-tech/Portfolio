import React from 'react'
import { MapPin, GraduationCap, BriefcaseBusiness } from "lucide-react";
const infoCards = [ { icon: MapPin, title: "Location", value: "Pakistan", }, { icon: GraduationCap, title: "Education", value: "BSIT", }, { icon: BriefcaseBusiness, title: "Experience", value: "2+ Years Learning", }, ];
function About() {
  return (
    <div>
      <section
  className="min-h-[90vh] overflow-hidden bg-base  px-5 md:px-5 lg:px-12 "
>
<div className=" py-10 lg:py-20 mx-auto  grid  w-full lg:max-w-8xl grid-cols-1  lg:grid-cols-[1fr_0.8fr] items-center  gap-5 md:gap-10  lg:gap-15 ">
  {/* left — CONTENT */}
    <div className="order-2 lg:order-1 text-center lg:text-start flex flex-col justify-between gap-4 py-5 px-4">
      {/* Small heading */}
      <p className=" sm:text-md lg:text-lg font-medium uppercase tracking-[0.25em] text-primary">
        About Me
      </p>
      {/* Main heading */}
      <h2 className="mb-3 text-2xl md:text-5xl  font-bold md:font-extrabold uppercase   text-sec">
        More Than Just <br className="hidden lg:block"/> A Developer
      </h2>

      {/* Paragraph */}
      <p className=" text-sm md:text-[18px] lg:text-lg leading-6 text-white opacity-65">
       I'm a passionate Frontend Developer who loves transforming creative ideas into modern, responsive, and user-friendly web experiences. I specialize in building clean, interactive interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy solving problems, exploring new technologies, and continuously improving my skills to create visually appealing websites that deliver seamless user experiences.

      </p>
     
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-[80%]"> {infoCards.map((item, index) => { const Icon = item.icon;
    return ( <div key={index} className="flex items-center gap-4 rounded-2xl border border-[#57f3a0]/20 bg-[#57f3a0]/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#57f3a0]/50 hover:bg-[#57f3a0]/[0.08] hover:shadow-[0_0_20px_rgba(87,243,160,0.12)]" > 
    {/* Icon Box */} <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#57f3a0]/20 bg-[#57f3a0]/[0.08]"> <Icon size={26} strokeWidth={1.8} className="text-primary" /> </div> 
    {/* Text Content */} <div className="flex flex-col gap-1"> <span className="text-sm font-medium text-gray-400"> {item.title} </span> 
    <span className="text-base font-semibold text-sec"> {item.value} </span> </div> </div> ); })}
    </div>
              
      </div>
       {/* right — IMAGE */}
    <div className="order-1 lg:order-2 relative flex  max-w-[400px]  lg:max-w-[600px]   justify-self-center   overflow-hidden rounded-[10%]  shadow-[0_0_45px_rgba(87,243,160,0.3)]">

      <img
        src="/images/portfolio.png"
        alt="Areesha's profile"
        className="h-full w-full object-cover object-top drop-shadow-[0_0_95px_rgba(87,243,160,0.35)] "
      />

    </div>
    
    </div>
   
    </section>
    </div>
  )
}

export default About