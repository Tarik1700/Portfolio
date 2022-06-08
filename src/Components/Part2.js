import React from 'react'
import img1 from './img/chocovallogo.png'
import img2 from './img/gofitlogo.png'
import img3 from './img/Snartlogo.png'
import img4 from './img/Snarttext.png'

const Part2 = () => {
  return (
    <div className="">
      <div className=" hidden  md:block text-5xl absolute  top-[435px] ml-[1015px] p-2 tracking-[1.3rem] font-[Roboto]  ">
         PROJECT
       </div>
      <div className="hidden  md:block top-[30rem] mt-[10rem] w-[119rem]">
      
       <div className=" w-full flex justify-end  pr-24">
       <div className="grid grid-cols-2 grid-rows-3 w-[28rem]  h-[41rem]  ">

       <div className=" col-span-2 justify-self-start ml-4 ">
       <a className="relative " target="_blank" rel="noreferrer" href="https://tarik1700.github.io/SNART-project/"> <img alt="SNART" src={img3} 
        className=" h-36 pr-3 mt-4 "></img>
         <img alt="SNART" src={img4} 
        className=" h-12 pl-7 pt-1 "></img></a></div>

      <div className=" col-span-2 justify-self-end">
       <a className="relative" target="_blank" rel="noreferrer" href="https://tarik1700.github.io/ChocoVal-website/"> <img alt="chocoval" src={img1} 
        className=" h-36 pr-3 mt-9 "></img></a></div>
             
             <div className=" justify-self-start col-span-2  ">
             <a className="relative" target="_blank" rel="noreferrer" href="https://tarik1700.github.io/Go-Fit-website/"> <img  alt="Go-fit" src={img2} 
        className=" h-24 pl-2 mt-20 "></img></a></div>

       
        
       </div>
       </div>
       </div>

       <div className="relative md:hidden w-[25.5rem]">
       <div className=" relative top-[20.5rem] font-[Roboto]  text-4xl text-center tracking-[0.2rem] flex justify-center ">PROJECTS</div>
<div className=" grid grid-cols-2 grid-rows-3 relative top-[22.2rem] gap-y-[2.4rem] ">

      <div className="top-[21rem] col-span-2 pl-3">
       <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/SNART-project/"> <img alt="SNART" src={img3} 
        className=" h-24  pl-4 "></img>
        <img alt="SNART" src={img4} 
        className=" h-8 pl-9 pt-1 "></img></a></div>

             <div className=" col-span-2 justify-self-end">
             <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/Go-Fit-website/"> <img alt="Go-fit" src={img2} 
        className=" h-32  pt-7 pb-4  "></img></a></div>

<div className=" col-span-2 ">
             <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/ChocoVal-website/"> <img alt="Chocoval" src={img1} 
        className=" h-36 p-0 pb-3   "></img></a></div>
</div>
       
       </div>

    </div>
  )
}

export default Part2