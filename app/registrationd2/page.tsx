import { title } from "@/components/primitives";
import  Design2 from "@/components/deisgn2";
import App  from "@/components/navbar";


export default function About() {
  return (
    <>
    <div className="h-[100vh] relative about">
    <App />
    <div className=" flex  items-center h-full w-full  pl-32 ">
      <div className=" flex gap-10 w-[70%] h-full items-center justify-center pt-20">
      <Design2 />
      </div>
      <div className="w-[30%] flex justify-center items-center h-full pr-14">
      <img src="./Solstice white.png" alt="Circular Masked Image  " className="h-80" />
      </div>
      {/* <div className="circle-mask ">
        <img src="./therapy2.jpg" alt="Circular Masked Image  " />
    </div> */}
    </div>

    </div>
    {/* <div className="flex justify-center items-center h-[10vh] bg-[#3E3E3E]"></div> */}
    </>

  );
}
