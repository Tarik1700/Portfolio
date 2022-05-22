import Header from "./Components/Header";
import Part1 from "./Components/Part1";
import Background from "./Components/Background";
import Part2 from "./Components/Part2";
import Part3 from "./Components/Part3";
import Spline from "@splinetool/react-spline";
import React from "react";


function App() {
  return (
    <div className="App">
      <div>
       <div className="h-[90vh] absolute  hidden md:block ">
<Background name="https://prod.spline.design/2Xr0A5Ko6iIfKnUH/scene.spline" className="bg-cover "/> 
</div>
<div className="h-full  fixed block md:hidden"> 
<Spline scene="https://prod.spline.design/J4hKqRp7x-TPwCPD/scene.splinecode" className="bg-cover w-[50rem] " />
</div>
</div>
        <Header />
        <div>
        <Part1 className="" />
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
