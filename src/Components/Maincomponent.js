import Header from "./Header";
import Background from "./Background";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Spline from "@splinetool/react-spline";
import React from "react";
import { useState, useEffect } from "react";
import Part1 from "./Part1";

export default function Maincomponent() {

    const [spline, setSpline] = useState();

  function onLoad(spline) {
    setSpline(spline);
  }


  function triggerAnimation() {
    spline.emitEvent('mouseDown', 'a04bcf3e-7f56-4b5a-952a-522eb04c842c');
  }

  function triggerAnimationsecond() {
    spline.emitEvent('mouseDown', 'b698f9ae-d023-4b21-9b98-a3e1565835eb');
  }

  function triggerAnimationthird() {
    spline.emitEvent('mouseDown', '20012ddd-837c-4486-aa77-3c8eb6f43353');
  }

  return (
    <div>

<div className="App">
      <div>
       <div className=" absolute  hidden md:block top-0 left-0 bottom-0 right-0  h-[100vh]">
<Spline scene="https://prod.spline.design/2Xr0A5Ko6iIfKnUH/scene.splinecode" onLoad={onLoad} className=" absolute h-full "/> 
</div>
<div className="md:hidden top-0 left-0 right-0 bottom-0  "> 
<Spline scene="https://prod.spline.design/aZoyuyEfC-byRhVW/scene.splinecode"  onLoad={onLoad} className="h-full absolute block " />
</div>
</div>
        <Header />
        <div>
        <Part1 triggerAnimation={triggerAnimation} triggerAnimationsecond={triggerAnimationsecond} triggerAnimationthird={triggerAnimationthird} className="" />
        </div>
        <div className="">
          <Part2/>
        </div>
        <div>
          <Part3/>
        </div>
        

    </div>

    </div>
  )
}
