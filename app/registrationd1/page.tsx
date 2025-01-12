import { title } from "@/components/primitives";
import  Design1 from "@/components/design1";
import App  from "@/components/navbar";


export default function About() {
  return (
    <>
    <div className="h-[100vh] relative about">
    <App />
    <div className=" flex justify-between h-full w-full  pl-32 ">
      <div className=" flex gap-10 w-[70%] h-full items-center justify-center pt-20">
      <Design1 />
      </div>
      <div className="circle-mask ">
        <img src="./therapy2.jpg" alt="Circular Masked Image  " />
    </div>
    </div>

    </div>
    {/* <div className="flex justify-center items-center h-[10vh] bg-[#3E3E3E]"></div> */}
    </>

  );
}
