import {  Monitor,
  Palette,
  AppWindow,
  RefreshCw,
Brain,
ArrowRight,
Quote} from "lucide-react";
import {Link} from 'react-router-dom'
function Services() {
    const offers=[ { icon:Monitor , title: "Responsive Website Development", description: "Build websites that look great and work perfectly on all devices.", }, 
        { icon:Palette , title: "UI/UX Development", description: "Turn your ideas into clean, interactive, and accessible interfaces.", }, 
        { icon:AppWindow , title: "Custom Web Applications", description: "Build accessible and fast web apps using modern technologies.", },
         { icon:RefreshCw , title: "Website Redesign & Optimization", description: "Improve your website's performance, speed, and user experience.", }, ];
  return (
<>
<section className="py-3 md:py-6 overflow-hidden bg-base px-4 lg-px-6 min-h-[90vh]">
  <div className=" px-4 py-7 w-full lg:max-w-[1400px] flex flex-col gap-10 justify-between mx-auto  ">
    <div className="flex flex-col justify-between gap-2" >
    <h3 className="text-xl text-primary">What I offer</h3>
    <h1 className="font-semibold  text-3xl md:text-4xl text-white">MY SERVICES</h1>
    <p className="text-[16px] md:text-lg d:text-xl text-sec/50">I help businesses and individuals build modern, responsive, <br/> and high performing web experices</p>
    </div>
    <div className="flex flex-col md:flex-row justify-between gap-3">
      {offers.map((items,index)=>{
        const Icons=items.icon;
        return(
        <div   key={index} className=" flex flex-col gap-2 justify-between border rounded-3xl border-[#57f3a0]/20 bg-[#57f3a0]/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#57f3a0]/50 hover:bg-[#57f3a0]/[0.08] hover:shadow-[0_0_20px_rgba(87,243,160,0.12)]">
          <div className="w-14 h-14 rounded-xl flex justify-center items-center  border border-[#57f3a0]/20 bg-[#57f3a0]/[0.08] "><Icons size={26} className="text-primary" /></div>
          <h2 className="text-white text-xl md:text-2xl">{items.title}</h2>
          <p className="text-sec text-lg md-text-xl">{items.description}</p>
        </div>
        );}
      )}

    </div>
    {/*quote*/}
    <div className="border border-[#57f3a0]/20 bg-[#57f3a0]/[0.04] px-4 md:px-5 py-2 md:py-5 lg:px-9 rounded-3xl flex flex-col gap-2 md:flex-row md:gap-0  items-start md:items-center">
      <Quote size={22} sm:size={25} className="text-primary rotate-180  translate-y-1 md:-translate-y-3"/>
    {/*left side*/}
    <div className=" flex flex-col sm:flex-row flex-1   gap-3 sm:gap-4  items-start sm:items-center p-0 sm:p-3 ">
    <div className="text-base size-10 rounded-2xl bg-white flex items-center justify-center">
     <Brain size={20} sm:size={24} /></div>
     <p className="text-sec/70 text-[14px]  md:text-lg">Have a project in mind? Let's work together to bring your ideas to life.</p>
    </div>
    {/*right side*/}
<Link
  to='/contact'
  className="bg-primary self-end md:self-center group px-3 sm:px-6 py-3 rounded-3xl shrink-0 flex justify-center items-center gap-2 font-semibold hover:scale-105 transition-all duration-300">
  <span className="leading-none ">Get in Touch</span>
 <ArrowRight size={18} className="block  translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
</Link>

    </div>
    </div>
</section>
</>
  )
}

export default Services