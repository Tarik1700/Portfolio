import React from 'react'
import img1 from './img/chocovallogo.png'
import img2 from './img/gofitlogo.png'

const Part2 = () => {
  return (
    <div>
       <a target="_blank" href="https://tarik1700.github.io/ChocoVal-website/"> <img src={img1} 
        className=" h-36 top-[560px]  absolute ml-[1600px]"></img></a>
             
             <a target="_blank" href="https://github.com/Tarik1700/Go-Fit-website"> <img src={img2} 
        className=" h-32 top-[790px]  absolute ml-[1330px]"></img></a>

       <div className="text-5xl absolute  top-[435px] ml-[1100px] p-2 tracking-[1.5rem] font-mono  ">
         PROJECTS
       </div>

    </div>
  )
}

export default Part2