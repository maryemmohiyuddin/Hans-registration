'use client';

import { useState, useEffect } from "react";

import RangeSider from "@/components/range-slider";
import Questionnaire from "@/components/questionnaire";
import Questionnaire1 from "@/components/questionnaire1";
import Questionnaire2 from "@/components/questionnaire2";



import '../../styles/range-slider.scss'
export default function Page() {
  
  return (
    <>
      <div className="h-[100vh] w-full">
      {/* <RangeSider /> */}
      {/* <Questionnaire /> */}
      {/* <Questionnaire1 /> */}
      <Questionnaire2 />


      </div>
    </>
  );
}
