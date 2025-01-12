import { title } from "@/components/primitives";
import  Design4 from "@/components/design4";
import App  from "@/components/navbar";


export default function About() {
  return (
    <>
    <div className="h-[100vh] relative about">
    <App />
    <div className=" flex  items-center justify-center h-full w-full    ">
      <div className=" flex gap-10 w-[70%] h-full items-center justify-center pt-20  z-[100] relative">
      <Design4 />
      </div>
      <img src='./Solstice white.png' alt="Circular Masked Image  " className="h-100 absolute top-[10%] opacity-5 z-[50]" />
      {/* <div className="w-[40%] flex justify-center items-center h-full pr-14 relative">
      <img src="./therapy4.jpg" alt="Circular Masked Image  " className="h-80 absolute top-[42%] left-[-3%] z-[100]" />
      <div  className="h-[310px] w-[320px] backdrop-blur-md  absolute top-[39%] z-[80] left-[1%] border border-gray-300 border-opacity-30   "></div>
      <img src="./therpy3.jpg" alt="Circular Masked Image  " className="h-[400px] absolute right-12 top-[20%]" />
      </div> */}
      {/* <div className="circle-mask ">
        <img src="./therapy2.jpg" alt="Circular Masked Image  " />
    </div> */}
    </div>

    </div>
    {/* <div className="flex justify-center items-center h-[10vh] bg-[#3E3E3E]"></div> */}
    </>

  );
}
