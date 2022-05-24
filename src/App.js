import Header from "./Components/Header";
import Part1 from "./Components/Part1";
import Background from "./Components/Background";
import Part2 from "./Components/Part2";
import Part3 from "./Components/Part3";
import Spline from "@splinetool/react-spline";
import React from "react";
import { useState } from "react";

function App() {
  const [spline, setSpline] = useState();

  function onLoad(spline) {
    setSpline(spline);
  }


  function triggerAnimation() {
    spline.emitEvent('mouseDown', 'bff908c5-65fb-46d3-a180-8467babebce9');
  }

  return (
    <div className="App">
      <div>
       <div className="h-[90vh] absolute  hidden md:block ">
<Background name="https://prod.spline.design/2Xr0A5Ko6iIfKnUH/scene.spline" className="bg-cover "/> 
</div>
<div className="md:hidden top-0 left-0 right-0 bottom-0 "> 
<Spline scene="https://prod.spline.design/J4hKqRp7x-TPwCPD/scene.splinecode"  onLoad={onLoad} className="h-full absolute block" />
</div>
</div>
        <Header />
        <div>
        <Part1 triggerAnimation={triggerAnimation} className="" />
        </div>
        <div>
          <Part2/>
        </div>
        <div>
          <Part3/>
        </div>
        

    </div>
  );
}

export default App;
