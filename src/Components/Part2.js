import React from 'react'
import img1 from './img/chocovallogo.png'
import img2 from './img/gofitlogo.png'

const Part2 = () => {
  return (
    <div>
      <div className="hidden  md:block">
       <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/ChocoVal-website/"> <img alt="chocoval" src={img1} 
        className=" h-36 top-[560px]  absolute ml-[1600px]"></img></a>
             
             <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/Go-Fit-website/"> <img  alt="Go-fit" src={img2} 
        className=" h-32 top-[790px]  absolute ml-[1330px]"></img></a>

       <div className="text-5xl absolute  top-[435px] ml-[1100px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         PROJECTS
       </div>
       </div>

       <div className="hidden">
       <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/ChocoVal-website/"> <img alt="Chocoval" src={img1} 
        className=" h-36 top-[560px]  absolute ml-[1600px]"></img></a>
             
             <a target="_blank" rel="noreferrer" href="https://tarik1700.github.io/Go-Fit-website/"> <img alt="Go-fit" src={img2} 
        className=" h-32 top-[790px]  absolute ml-[1330px]"></img></a>

       <div className="text-5xl absolute  top-[435px] ml-[1100px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         PROJECTS
       </div>
       </div>

    </div>
  )
}

export default Part2