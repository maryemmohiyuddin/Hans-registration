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



export default function Questionnaire() {
    return (
        <div className=" text-[#d7d7d7]  ">
            <div className="w-full h-2   bg-white">

            <div className="h-2 absolute   bg-[#D5BA7F] w-[40%]"></div>

            </div>

            <div className='py-20 px-32 w-screen flex flex-col items-center  justify-center h-[95vh]'>
            <img src='./logo.png' className="h-12 mb-12 mt-10 opacity-50" />

            <div className="flex w-full justify-center items-start gap-40">
                <div className=' w-[70%] flex flex-col justify-center  items-start'>
                {/* <h1 className="text-5xl font-bold">
                        Question

                    </h1>
                    <p className=" mb-10 mt-2 text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, cumque?</p> */}
                    <h1 className="text-5xl font-bold mb-10">
                        1. How often do you feel shy?

                    </h1>
                    {/* <RangeSider /> */}
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                        <p className="text-xl">Never</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                        <p className="text-xl">Rarely</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                        <p className="text-xl">Sometimes</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                        <p className="text-xl">Rarely</p>
                    </div>
                    <div className="flex gap-2 pb-3 items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                        <p className="text-xl">Often</p>
                    </div>
                    <div className='flex pt-[100px]'>
                   
                        <div className='flex gap-10  justify-between w-full'>
                        <button

                            className={`mt-2 flex gap-1 ps-5 items-center justify-center  text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] `} // Conditionally apply opacity and cursor style
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
                    </div>

                </div>
                <div className="w-[30%] flex flex-col gap-7 items-center justify-center">
                    <h1 className="text-3xl font-bold text-center">
                        Markings

                    </h1>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>

                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>

                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>

                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>


                    </div>
                    <div className="gap-5 flex">
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>

                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>
                        <div className="h-8 w-8 rounded-lg bg-white"></div>


                    </div>



                    {/* <div className="gap-7 flex">
      <div className="h-8 w-8 bg-white"></div>
      <div className="h-8 w-8 bg-white"></div>

      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white"></div>


      </div>
      <div className="gap-7 flex">
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white"></div>

      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-[#D5BA7F]"></div>
      <div className="h-8 w-8 bg-white"></div>
      <div className="h-8 w-8 bg-white"></div>




      </div> */}
                          <h1 className="text-xl mt-5 mb-5 font-bold text-center">
                        Legends / Keys

                    </h1>
                </div>


            </div>
            <div className="flex items-center w-full justify-between">
                <div className=" h-3  relative w-[60%]">
                    {/* <p className='absolute top-5 text-sm'>0%</p>
                    <p className='absolute top-5 text-sm right-0'>100%</p>

                    <div className=" bg-[#D5BA7F] h-3  w-[51%] absolute">
                    </div>

                    <img src='./Solstice circled white.png' className="absolute w-8 left-[70%] top-[-80%]"/>
                    <img src='./Solstice white.png' className="absolute w-8 left-[50%] top-[-80%]" />
                    <p className='absolute bottom-7 text-sm  left-[50%] '>50%</p>
                    <p className='absolute bottom-7 text-sm  left-[70%] '>70%</p> */}



                </div>
                <div className="flex flex-col items-center justify-center w-[29%] px-2 ps-16">
                    {/* <h1 className="text-xl mt-5 mb-5 font-bold text-center">
                        Legends / Keys

                    </h1> */}
                    <div className="flex justify-between w-[100%] items-center ">
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#D5BA7F]"></div>
                            <h1 className='font-semibold'>Answered</h1>
                        </div>
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-lg bg-white"></div>
                            <h1 className="font-semibold">Not Answered</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
