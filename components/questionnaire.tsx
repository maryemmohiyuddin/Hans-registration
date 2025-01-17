'use client'

import RangeSider from "@/components/range-slider";
import Navbar from './navbar'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";

export default function Questionnaire() {

    const questions = [
        { question: "How often do you feel like you have a lot in common with the people around you?" },
        { question: "How often do you feel like you are no longer close to anyone?" },
        { question: "How often do you feel sociable and friendly?" },
        { question: "How often do you feel like there are people who really understand you?" },
        { question: "How often do you feel shy?" },
        { question: "How often do you feel like there are people around you, but not with you?" },
        { question: "How often do you feel like you are part of a group of friends?" },
        { question: "How often do you feel that your relationships with others are meaningless?" },
        { question: "How often do you feel like there are people to talk to?" },
        { question: "How often do you feel like you can find company whenever you want it?" },
        { question: "How often do you feel isolated from others?" },
        { question: "How often do you feel like there is no one you can turn to?" },
        { question: "How often do you feel lonely?" },
        { question: "How often do you feel close to others?" },
        { question: "How often do you feel like you are “in tune” with the people around you?" },
        { question: "How often do you feel like there are people you can turn to?" },
        { question: "How often do you feel like you lack company?" },
        { question: "How often do you feel that your interests and ideas are not shared by others?" },
        { question: "How often do you feel like you're being left out?" },
        { question: "How often do you feel like no one really knows you well?" },

    ];

    // Use state to track the current question index

    // Function to go to the next question
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

    // Function to go to the next question
    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Move to the previous question
    const previousQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const skipQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setAnswers((prev) => {
                const updatedAnswers = [...prev];
                updatedAnswers[currentIndex] = null; // Mark as skipped
                return updatedAnswers;
            });
            nextQuestion();
        }
    };
    // Function to handle answer selection from RangeSlider
    const handleAnswerChange = (value: any) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = value;
        console.log("newAnswers", newAnswers)
        setAnswers(newAnswers);
    };

    return (
        <div className=" text-[#d7d7d7]  ">
            <Navbar />
            <div className='py-20 px-32 w-screen flex flex-col items-center  justify-center h-[100vh]'>
                <div className="flex w-full left-[3%] pt-10  justify-between items-start gap-40">
                    <div className=' h-full w-[70%] flex flex-col justify-between  items-center'>
                        <img src='./Solstice white.png' className="h-[500px]  mx-auto  opacity-5 z-50 absolute" />
                        <div className="w-[59vw] ms-4">
                            <div>
                                <h1 className="font-semibold mb-1">Question {currentIndex + 1} of {questions.length}
                                </h1>
                                <h1 className="text-3xl font-bold mb-10">
                                    {questions[currentIndex].question}
                                </h1>
                            </div>
                        </div>
                        <RangeSider onAnswerChange={handleAnswerChange} answers={answers} currentIndex={currentIndex} />
                        <div className='flex z-50 pt-10 w-full justify-center items-center   '>
                            <div className='flex flex-col gap-5 items-center justify-between '>
                                <div className="flex gap-5">
                                    <div className="">
                                        <button className={`bg-[#D5BA7F] w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center ${currentIndex === 0 ? 'bg-opacity-60 cursor-default' : 'cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100'}`} onClick={previousQuestion}
                                            disabled={currentIndex === 0}

                                        >
                                            <FaArrowLeftLong />
                                            Previous

                                        </button>

                                    </div>
                                    {currentIndex === questions.length - 1 ?
                                        (

                                            <div className="flex items-center">
                                                <button className={`bg-[#D5BA7F] w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center  ${answers[currentIndex] === null ? 'bg-opacity-60 cursor-default' : 'cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100'}`}
                                                    onClick={nextQuestion}
                                                    disabled={answers[currentIndex] === null}
                                                >
                                                    Submit
                                                    <FaArrowRightLong />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <button className={`bg-[#D5BA7F] w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center  ${answers[currentIndex] === null ? 'bg-opacity-60 cursor-default' : 'cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100'}`}
                                                    onClick={nextQuestion}
                                                    disabled={answers[currentIndex] === null}
                                                >
                                                    Next
                                                    <FaArrowRightLong />
                                                </button>
                                            </div>

                                        )}

                                </div>
                                <div className="flex items-center">
                                    <button className={`bg-white opacity-80 w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center ${answers[currentIndex] !== null ? 'bg-opacity-60 !cursor-default' : 'cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100'}`}
                                        onClick={skipQuestion}
                                        disabled={answers[currentIndex] !== null}


                                    >
                                        <img src='./skip.png' className="w-6 h-6" />
                                        Skip</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[30%] flex-col gap-3 items-start pt-2 justify-center">
                        <div>
                            <h1 className="text-xl font-bold text-left">
                                Questions
                            </h1>
                            <p className="text-sm">Follow your progress here.</p>
                        </div>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 pt-5">
                            {questions.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-8 w-8 flex cursor-pointer  transform transition-transform duration-100 ${index !== currentIndex && 'hover:scale-90'} border-black items-center justify-center rounded-lg ${index === currentIndex && '!bg-transparent'} ${answers[index] !== null ? "bg-[#D5BA7F]" : "bg-white bg-opacity-90"}`}
                                    onClick={() => setCurrentIndex(index)} // Add onClick to navigate to the selected question

                                >
                                    {/* <p className="text-black text-sm">1</p> */}
                                    {index === currentIndex && (
                                        <img src="./Solstice circled white.png" className="w-8 animate-scale-pulse" alt="Current Question" />
                                    )}
                                </div>
                            ))}
                        </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
