import React from 'react'
import img1 from './img/email.png'
import img2 from './img/instagram.png'
import img3 from './img/linkedin.png'
import img4 from './img/github.png'


const Part3 = () => {
  return (
    <div>
<div className="hidden md:block">
<div className=" text-5xl absolute  top-[435px] ml-[555px] p-2 tracking-[1.3rem] font-[Roboto]  ">
         CONTACT
       </div>

       <a rel="noreferrer" target="_blank" href="mailto:tarik_1700@hotmail.com"> <img alt="Email" src={img1} 
        className=" h-44 top-[100px]  absolute ml-[140px]"></img></a>
        
        <a rel="noreferrer" target="_blank" href="https://github.com/Tarik1700"> <img alt="gh" src={img4} 
        className=" h-40 top-[330px]  absolute ml-[373px]"></img></a>

        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tarik-omerhodzic/"> <img alt="linkedin" src={img3} 
        className=" h-48 top-[540px]  absolute ml-[130px]"></img></a>

        <a rel="noreferrer" target="_blank" href=" https://www.instagram.com/tarik.om/"> <img alt="insta" src={img2} 
        className=" h-44 top-[765px]  absolute ml-[365px]"></img></a>

</div>

<div className="relative md:hidden top-[34rem]">
<div className="text-4xl relative text-center  p-2 tracking-[0.4rem] font-[Roboto]  ">
         CONTACT
       </div>
       <div className="grid grid-cols-3 grid-rows-1 relative mx-auto justify-items-center gap-8">
<div>
       <a rel="noreferrer" target="_blank" href="mailto:tarik_1700@hotmail.com"> <img alt="Email" src={img1} 
        className=" h-20 "></img></a>
        </div>
        <div>
        <a rel="noreferrer" target="_blank" href="https://github.com/Tarik1700"> <img alt="gh" src={img4} 
        className=" h-[4.5rem] pt-3  "></img></a>
</div>
<div>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tarik-omerhodzic/"> <img alt="linkedin" src={img3} 
        className=" h-20 "></img></a>
        </div>
</div>

</div>
    </div>

    
  )
}

export default Part3