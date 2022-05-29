import React from 'react'
import image1 from './img/signature5.png'

const Part1 = ({triggerAnimation}) => {
  return (
    <div className="  " >
      <div className="hidden  md:block"> 
       
       <div className="text-5xl absolute  top-[350px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         S
       </div>
       <div className="text-5xl absolute  top-[395px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]">
         K
       </div>
       <div className="text-5xl absolute  top-[440px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         I
       </div>
       <div className="text-5xl absolute  top-[485px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         L
       </div>
       <div className="text-5xl absolute  top-[530px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         L
       </div>
       <div className="text-5xl absolute  top-[575px] ml-[940px] p-2 tracking-[1.5rem] font-[Roboto]  ">
         S
       </div>
        <div className=" absolute  
          top-[620px] ml-[675px] p-2 text-2xl font-mono text-left leading-[1.60]">
           <ul className=" ">
         
       <li>Experienced in: <b className=" font-bold ">[C++, C#, Java, HTML, CSS]</b>;</li>  
       <li>Knowledge of: &nbsp; <b className=" font-bold">[TailwindCss]</b>;</li>
       <li>Junior level knowledge:&nbsp;&nbsp;<b className=" font-bold"> [React, JS]</b>;</li> 
       <li>Begginer level knowledge:<b className=" font-bold"> [NodeJS]</b>;</li> 
       <li>Experience in: &nbsp;&nbsp;&nbsp;<b className=" font-bold">[Blender, Spline]</b>;</li> 
       <li>English language: <b className=" font-bold">[C1-C2]</b>; </li>

</ul>
        </div>
        </div>

<div className="md:hidden">
        <div className=" relative top-[3.6rem] ">
          <div className=" grid grid-cols-3 gap-14 h-9 mx-14 ">
          <button type="button"  onClick={triggerAnimation}>
        
      </button>
      <button type="button" >
        
      </button>
      <button type="button" >
        
      </button>
          </div>
       
          </div>
       
        <div className="relative top-[19.6rem] mt-[1.5rem] ml-[1.5rem] mr-[1.5rem] p-2  pl-3 text-md font-mono text-left leading-[1.60] ">
          
           <ul className="  ">
         <li className=" font-extrabold text-2xl text-center">SKILLS:</li>
       <li>Experienced in:<b className=" font-bold "> [C++, C#, Java, HTML, CSS, TailwindCss, React, NodeJS]</b>;</li>  
       <li>Used libraries like:&nbsp;<b className=" font-bold"> [ScrollTrigger, GSAP, Lightgallery]</b>;</li> 
       <li>Begginer level knowledge:<b className=" font-bold">[NodeJS]</b>;</li> 
       <li>Experience in: &nbsp;&nbsp;&nbsp;<b className=" font-bold">[Blender, Spline]</b>;</li> 
       <li>English language: <b className=" font-bold">[C1-C2]</b>; </li>

</ul>
        </div>
        
        </div>
    </div>
  )
}

export default Part1