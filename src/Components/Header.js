import React from 'react';
import image1 from './img/signature5.png'
import Background from './Background';

const Header = () => {
  return (
  <div>
     
     <div>
       
         <div className=" hidden relative top-12 h-0
          ">
         <img src={image1}  width="1100px" alt="try1" className="relative mx-auto align-middle 
         bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 
         rounded-xl  my-auto "></img>

         </div>

         <div className=" md:hidden relative top-12 w-[23rem] mx-5">
         <img src={image1}   alt="try1" className="relative mx-auto w-max align-middle 
         bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 
         rounded-xl  my-auto "></img>

         </div>
         
     
</div>



  </div>
  );
};

export default Header;
