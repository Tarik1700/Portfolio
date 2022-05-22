import React from 'react'
import img1 from './img/email.png'
import img2 from './img/instagram.png'
import img3 from './img/linkedin.png'
import img4 from './img/github.png'


const Part3 = () => {
  return (
    <div>
<div className="hidden">
<div className=" text-5xl absolute  top-[435px] ml-[555px] p-2 tracking-[1.3rem] font-[Roboto]  ">
         CONTACT
       </div>

       <a target="_blank" href="mailto:tarik_1700@hotmail.com"> <img src={img1} 
        className=" h-44 top-[100px]  absolute ml-[140px]"></img></a>
        
        <a target="_blank" href="https://github.com/Tarik1700"> <img src={img4} 
        className=" h-40 top-[330px]  absolute ml-[373px]"></img></a>

        <a target="_blank" href="https://www.linkedin.com/in/tarik-omerhodzic-6828b8185"> <img src={img3} 
        className=" h-48 top-[540px]  absolute ml-[130px]"></img></a>

        <a target="_blank" href=" https://www.instagram.com/tarik.om/"> <img src={img2} 
        className=" h-44 top-[765px]  absolute ml-[365px]"></img></a>

</div>

<div className="hidden">
<div className="text-5xl absolute  top-[435px] ml-[555px] p-2 tracking-[1.3rem] font-[Roboto]  ">
         CONTACT
       </div>

       <a target="_blank" href="mailto:tarik_1700@hotmail.com"> <img src={img1} 
        className=" h-44 top-[100px]  absolute ml-[140px]"></img></a>
        
        <a target="_blank" href="https://github.com/Tarik1700"> <img src={img4} 
        className=" h-40 top-[330px]  absolute ml-[373px]"></img></a>

        <a target="_blank" href="https://www.linkedin.com/in/tarik-omerhodzic-6828b8185"> <img src={img3} 
        className=" h-48 top-[540px]  absolute ml-[130px]"></img></a>

        <a target="_blank" href=" https://www.instagram.com/tarik.om/"> <img src={img2} 
        className=" h-44 top-[765px]  absolute ml-[365px]"></img></a>

</div>
    </div>

    
  )
}

export default Part3