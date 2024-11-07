'use client'
import { useEffect, useState } from "react";
import Loading from "./loading";
import HomeBg from "../../public/hero.png"
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); 
  },[])

  if(isLoading) {
    return<Loading/> 
  }
  return ( 
    <div className="items-center lg:gap-[100px] md:gap-[80px] md:flex">
      <div className="flex flex-col flex-1 gap-[20px] md:gap-[40px] lg:gap-[40px] leading-tight">
        <h1 className="bg-gradient-text mt-6 md:mt-0  text-[48px] lg:text-[72px] md:text-[56px] font-bold">Better design for your digital products.</h1>
        <p className="text-[16px] md:text-[24px]"> Turning your Idea into reality. We bring together the teams from the global tech industry.</p> 
        <button className="p-[20px] w-full cursor-pointer bg-[#53c28b] border-none rounded-lg md:w-max text-white">See Our Works</button>
      </div>
      <div>
      <Image src={HomeBg} className="md:w-full md:h-[500px] w-[500px] object-cover "alt="herobg"/>
      </div>
        
    </div>
  );
}
