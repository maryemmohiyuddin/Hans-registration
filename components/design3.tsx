'use client'
import { title } from "@/components/primitives";

import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react"; // Import useState to manage checkbox state


export default function Design3() {
    const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked); // Update checkbox state
    };
    
  return (
    <div className=" flex flex-col text-[#d7d7d7]  gap-2 text-start justify-start items-start">
      <h1 className="text-5xl font-bold ">
        Soon a support space dedicated to human connections
      </h1>
      <div className="w-[90%] flex flex-col gap-5 mt-2 justify-center items-start">
        <p className="text-[#D5BA7F] text-sm">Whether you are experiencing loneliness, relationship challenges, career changes or life-changing events, we envision opening a clinic that offers compassionate, research-based support to help you create meaningful connections and strengthen your emotional well-being.</p>
        {/* <p className="text-gray-400">By leaving us your email, you will be among the first to be contacted when the clinic opens its doors:</p> */}
        <input
          className="w-full custom-input px-4 mt-7 py-2 rounded-lg"
          // defaultValue="junior@nextui.org"
          placeholder="Enter your email"
          // color={'success'}

          type="email"
        />
        <div className="flex flex-col justify-start items-start gap-2 text-sm w-full">
          <div className="flex justify-between w-full">
            <p>Would you like to be informed of the opening of the clinic and the services that will be offered?
            </p>
            <div className="   flex border rounded-lg items-center justify-center border-[#D5BA7F] ">
            <div className="text-[#D5BA7F] rounded-lg font-bold bg-[#3E3E3E] px-3  py-1 ">
                Yes
              </div>
              <div className="text-[#D5BA7F]  px-3 py-1">
                No
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">

            <p>Are you interested in face-to-face consultations at the Annecy clinic?

            </p>
            <div className="   flex border items-center justify-center rounded-lg border-[#D5BA7F] ">
            <div className="text-[#D5BA7F] rounded-lg font-bold bg-[#3E3E3E] px-3  py-1 ">
                Yes
              </div>
              <div className="text-[#D5BA7F] px-3 py-1">
                No
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full">

            <p>Are you interested in online consultations (teleconsultation)?
            </p>
            <div className="   flex border items-center justify-center rounded-lg border-[#D5BA7F] ">
              <div className="text-[#D5BA7F] rounded-lg font-bold bg-[#3E3E3E] px-3  py-1 ">
                Yes
              </div>
              <div className="text-[#D5BA7F] px-3 py-1">
                No
              </div>
            </div>
          </div>
          <label className="text-md flex items-center ">
  <input className="mr-2 custom-checkbox" type="checkbox"
                onChange={handleCheckboxChange} // Update checkbox state on change
      style={{ transform: "scale(1.2)" }}

  />
  I accept the <a href='#data' className="text-[#D5BA7F] ml-1 mr-1 cursor-pointer font-semibold">data processing conditions</a> described.
</label>


        </div>
        <button
          className={`mt-2 text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`} // Conditionally apply opacity and cursor style
          disabled={!isChecked} // Disable the button when checkbox is unchecked
        >
          Submit
        </button>
      </div>
    </div>
  );
}
