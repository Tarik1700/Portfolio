import React from 'react';
import image1 from './img/signature5.png'
import Background from './Background';

const Header = () => {
  return (
  <div>
     
     <div>
       <div className=" w-[69rem] ">
         <div className=" hidden top-12 h-36 md:relative md:flex w-full mx-96  justify-center ">
         <img src={image1}  alt="try1" className=" flex-none relative  w-max align-middle 
         bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg  my-auto "></img>

         </div>
         </div>

         <div className=" md:hidden relative h-12 flex top-6 w-96 mx-3 justify-center ">
         <img src={image1}   alt="try1" className=" flex-auto relative mx-auto w-max align-middle 
         bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 
          rounded-lg  my-auto "></img>

         </div>
         
     
</div>



  </div>
  );
};

export default Header;
