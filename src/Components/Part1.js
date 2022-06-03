import React from 'react'
import image1 from './img/signature5.png'

const Part1 = ({triggerAnimation, triggerAnimationsecond, triggerAnimationthird}) => {
  return (
    <div>
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

<div className="md:hidden w-[25rem] h-auto">
        <div className=" relative top-[3.6rem] ">
          <div className=" grid grid-cols-3 gap-14 h-9 mx-14 ">
          <button type="button"  onClick={triggerAnimation}>
        
      </button>
      <button type="button" onClick={triggerAnimationsecond} >
        
      </button>
      <button type="button" onClick={triggerAnimationthird} >
        
      </button>
          </div>
       
          </div>
          <div className="w-92 flex relative top-[18.1rem] font-[Roboto] justify-center text-4xl text-center tracking-[0.2rem]  ">SKILLS</div>
        <div className=" flex w-92 h-48 relative top-[18.5rem] mt-[1.5rem]   pt-1  pl-7 text-md font-mono text-left leading-[1.60] ">
          
          
         
         <div className=" mx-2 flex-auto ">
       Experienced in:<b className=" font-bold "> [C++, C#, Java, HTML, CSS, TailwindCss, React, Node]</b>;  <br></br>
       Libraries like:&nbsp;<b className=" font-bold"> [ScrollTrigger, GSAP, Lightgallery]</b>;<br></br>
       Begginer level knowledge:<b className=" font-bold">[NodeJS]</b>;<br></br>
      Experience in: &nbsp;&nbsp;&nbsp;<b className=" font-bold">[Blender, Spline]</b>;<br></br>
       English language: <b className=" font-bold">[C1-C2]</b>; <br></br>
       </div>

        </div>
        
        </div>
    </div>
  )
}

export default Part1