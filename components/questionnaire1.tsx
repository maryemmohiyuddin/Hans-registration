'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { TiTick } from "react-icons/ti";
import { useState } from "react"; // Import useState to manage checkbox state
import RangeSider from "@/components/range-slider";
import { MdNavigateNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import Navbar from './navbar'



export default function Questionnaire1() {
    return (
        <div className=" text-[#d7d7d7]  ">
            <Navbar />
            {/* <div className="w-full h-2   bg-white bg-opacity-90">

            <div className="h-2 absolute   bg-[#D5BA7F] w-[40%]"></div> */}

            {/* </div> */}

            <div className='py-20 px-32 w-screen flex flex-col items-center  justify-center h-[100vh]'>
            {/* <img src='./logo.png' className="h-32 mb-12 mt-10 opacity-30 z-50 absolute" /> */}
            {/* <img src='./Solstice white.png' className="h-[500px] mb-12 mt-10 opacity-5 z-50 absolute" /> */}

            <div className="flex w-full left-[3%] pt-10  justify-between items-start gap-40">
                <div className=' h-full w-[70%] flex flex-col justify-between  items-start'>
                {/* <h1 className="text-5xl font-bold">
                        Question

                    </h1>
                    <p className=" mb-10 mt-2 text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, cumque?</p> */}
                   <div>
                    <h1 className="font-semibold mb-1">Question 13 of 20</h1>
                    <h1 className="text-3xl font-bold mb-10">
                    How often do you feel like there are people to talk to?                    </h1>
                    <div>

  
</div>
                    </div>
                    <RangeSider />
                   
                    {/* <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white bg-opacity-90 rounded-full"></div>
                        <p className="text-xl">Never</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white bg-opacity-90 rounded-full"></div>
                        <p className="text-xl">Rarely</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white bg-opacity-90 rounded-full"></div>
                        <p className="text-xl">Sometimes</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white bg-opacity-90 rounded-full"></div>
                        <p className="text-xl">Rarely</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white bg-opacity-90 rounded-full"></div>
                        <p className="text-xl">Often</p>
                    </div> */}
                    {/* <div className='flex  relative z-50 w-[100%]'>
                   
                        <div className='flex gap-10  justify-between w-full'>
                        <button

                            className={`mt-2 flex gap-1 items-center justify-center  text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] `} // Conditionally apply opacity and cursor style
                        >
                     <IoMdArrowDropleft fontSize={'20px'} />       Previous
                        </button>
                        <button
                            className={`mt-2 flex gap-1 items-center justify-center text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] `} // Conditionally apply opacity and cursor style
                        >

<MdSkipPrevious fontSize={'20px'} />
                            Skip
                        </button>
                        <button
                            className={`mt-2 flex gap-1 items-center justify-center  text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] `} // Conditionally apply opacity and cursor style
                        >
                            Next <IoMdArrowDropright fontSize={'20px'} />
                        </button>
                        </div>
                    </div> */}
                     <div className='flex   z-50 pt-10 w-full justify-center items-center   '>
                   
                   <div className='flex gap-8  justify-between '>
                   <div className="flex items-center">
  <IoMdArrowDropleft className="text-[130px] mr-[-55px] relative z-50" color={'#D5BA7F'}  />

  <span className="bg-[#D5BA7F]  text-[#3E3E3E] font-semibold py-2 rounded-lg px-5">Back</span>
</div>
<div className="flex items-center justify-center ">
  {/* <IoMdArrowDropleft className="text-[130px] mr-[-26%] relative leading-none inline-block" /> */}

  <span className="bg-white flex items-center justify-center text-[#3E3E3E] bg-opacity-90 font-semibold  rounded-full w-16 h-16 ">Skip</span>
</div>
<div className="flex items-center">

  <span className="bg-[#D5BA7F]  text-[#3E3E3E] font-semibold py-2 rounded-lg px-5">Next</span>
  <IoMdArrowDropright className="text-[130px] ml-[-55px] relative z-50" color={'#D5BA7F'} />


</div>
                   {/* <button

                       className={`mt-2 flex gap-1 items-center justify-center  text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-4 max-w-xs  `} // Conditionally apply opacity and cursor style
                   >
                <IoMdArrowDropleft fontSize={'20px'} />       Previous question
                   </button> */}
                   {/* <button
                       className={`mt-2 flex gap-1 items-center justify-center text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-4 max-w-xs  `} // Conditionally apply opacity and cursor style
                   >

<MdSkipPrevious fontSize={'20px'} />
                       Skip for now
                   </button>
                  */}
{/* <div className="flex items-center">
  <span className="bg-[#D5BA7F]  text-[#3E3E3E] font-semibold py-2 rounded-lg px-5">Next</span>
  <IoMdArrowDropright className="text-[130px] ml-[-26%] relative leading-none inline-block" />
</div> */}
                   </div>
               </div>
                   
                    <div className=" h-3  relative w-[100%] bg-white bg-opacity-90">
                    <p className='absolute top-5 text-sm'>0%</p>
                    <p className='absolute top-5 text-sm right-0'>100%</p>

                    <div className=" bg-[#D5BA7F] h-3  w-[51%] absolute">
                    </div>

                    <img src='./Solstice circled white.png' className="absolute w-8 left-[70%] top-[-80%]"/>
                    <img src='./Solstice white.png' className="absolute w-8 left-[50%] top-[-80%]" />
                    <p className='absolute bottom-7 text-sm  left-[50%] '>50%</p>
                    <p className='absolute bottom-7 text-sm  left-[70%] '>70%</p>



                </div>

                </div>
                <div className="flex w-[30%] flex-col gap-3 items-start pt-2 justify-center">
                    <div>
                    <h1 className="text-xl font-bold text-left">
                        Questions

                    </h1>
                    <p className="text-sm">Follow your progress here.</p>
                    </div>
                    <div className="gap-5 flex pt-5">
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>

                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>

                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>
                    {/* <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>

                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>

                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div> */}
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>

                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-opacity-90">
                        <img src='./Solstice circled white.png' className=" w-8 left-[50%] top-[-80%]" />

                        </div>

                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>

                        <div className="h-8 w-8 rounded-lg bg-white bg-opacity-90"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>



                    {/* <div className="gap-7 flex">
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>

      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>


      </div>
      <div className="gap-7 flex">
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>

      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>
      <div className="h-8 w-8 bg-white bg-opacity-90"></div>




      </div> */}
                            <div className="flex flex-col gap-3 pt-5 justify-between w-[100%] items-start ">
                    <p className="text-xl font-semibold">Legend</p>
                    <div className="flex gap-3 items-center text-sm ">
                            <div className="h-4 w-4  rounded bg-white bg-opacity-90"></div>
                            <h1 className="font-semibold">Skipped</h1>
                        </div>
                        <div className="flex gap-3 items-center  text-sm">
                            <div className="h-4 w-4 rounded bg-[#D5BA7F]"></div>
                            <h1 className='font-semibold'>Answered</h1>
                        </div>
                        
                        <div className="flex gap-3 items-center  text-sm">
                            <div className="h-4 w-4  rounded ">
                            <img src='./Solstice circled white.png' className=" w-8 left-[50%] top-[-80%]" />

                            </div>
                            <h1 className="font-semibold">Current question</h1>
                        </div>
                        {/* <div className="flex gap-3 items-center">

                        <div className="h-4 w-4  flex items-center justify-center rounded-l bg-white bg-opacity-90">

<div className="bg-[#50C5B7] h-2 w-2 rounded-full "></div>
                        </div>                            <h1 className="font-semibold">Current question</h1>
                        </div> */}

                        {/* <div className="flex gap-3 items-center">
                        <img src='./Solstice circled white.png' className=" w-8 left-[70%] top-[-80%]"/>
                                                    <h1 className="font-semibold">Normal Progress</h1>
                        </div>
                        <div className="flex gap-3 ">
                        <img src='./Solstice white.png' className=" w-8 left-[50%] top-[-80%]" />
                            <h1 className="font-semibold">Answered Progress</h1>
                        </div> */}
                    </div>
                </div>


            </div>
            <div className="flex items-center w-full justify-between">
                
                <div className="flex flex-col items-center justify-center w-[29%] px-2 ps-16">
                    {/* <h1 className="text-xl mt-5 mb-5 font-bold text-center">
                        Legends / Keys

                    </h1> */}
                    {/* <div className="flex justify-between w-[100%] items-center ">
                        <div className="flex gap-3">
                            <div className="h-4 w-4  rounded-lg bg-[#D5BA7F]"></div>
                            <h1 className='font-semibold'>Answered</h1>
                        </div>
                        <div className="flex gap-3">
                            <div className="h-4 w-4  rounded-lg bg-white bg-opacity-90"></div>
                            <h1 className="font-semibold">Not Answered</h1>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
        </div>
    );
}
