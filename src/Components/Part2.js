import React from 'react'
import img1 from './img/chocovallogo.png'
import img2 from './img/gofitlogo.png'
import img3 from './img/Snartlogo.png'
import img4 from './img/Snarttext.png'

const Part2 = () => {
  return (
    <div className="">
      <div className="hidden  md:block">
       <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/ChocoVal-website/"> <img alt="chocoval" src={img1} 
        className=" h-36 top-[560px]  absolute ml-[1600px]"></img></a>
             
             <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/Go-Fit-website/"> <img  alt="Go-fit" src={img2} 
        className=" h-32 top-[790px]  absolute ml-[1330px]"></img></a>

       <div className="text-5xl absolute  top-[435px] ml-[1100px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         PROJECTS
       </div>
       </div>

       <div className="relative md:hidden">
       <div className=" relative top-[21rem] font-[Roboto]  text-4xl text-center tracking-[0.2rem]  ">PROJECTS</div>
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
        className=" h-36 p-2   "></img></a></div>
</div>
       
       </div>

    </div>
  )
}

export default Part2