'use client'

import RangeSider from "@/components/range-slider";
import Navbar from './navbar'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import lottie from 'lottie-web'; // Import lottie-web
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
import { useState , useEffect} from "react";
const SuccessIcon =
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97228 11.7778 5.73221 11.8799 5.48237 11.8748C5.23253 11.8698 4.99677 11.7582 4.83452 11.5681L0.459523 6.44311C0.145767 6.07557 0.18937 5.52327 0.556912 5.20951C0.924454 4.89575 1.47676 4.93936 1.79051 5.3069L5.52658 9.68343L14.233 0.280522C14.5613 -0.0740672 15.1149 -0.0953599 15.4695 0.232963Z" fill="white"/>
  </svg>;
    
const STATUS_CONTENT_MAP = {
    succeeded: {
      text: "Payment succeeded",
      iconColor: "#30B130",
      icon: SuccessIcon,
    },
}
export default function Questionnaire() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
    const [showTooltip, setShowTooltip] = useState(false);
    const [showSubmitTooltip, setShowSubmitTooltip] = useState(false);
    const [totalQuestions, setTotalQuestions] = useState<any>();

    const [answeredQuestions, setAnsweredQuestions] = useState<any>();

    const [halfThreshold, setHalfThreshold] = useState<any>();


    // Function to go to the next question
    const nextQuestion = (flag: any = null) => {
              console.log("called next quesin", flag, answers)
        if (answers[currentIndex] === null && flag === null) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
        } else if (flag === 'submit') {
            const answeredCount = answers.filter(answer => answer !== null).length;
            const minimumRequired = Math.ceil(questions.length / 2); // Calculate 50% of total questions

            if (answeredCount < minimumRequired) {

                const totalQuestions = questions.length; // Total number of questions in the form
                const answeredQuestions = answers.filter(answer => answer !== null).length;
                const halfThreshold = Math.ceil(totalQuestions / 2); // Minimum questions needed to submit
                setTotalQuestions(totalQuestions)
                setAnsweredQuestions(answeredQuestions)
                setHalfThreshold(halfThreshold)
                setShowSubmitTooltip(true);
                setTimeout(() => setShowSubmitTooltip(false), 2000);
            } else {
                console.log("Submission successful!");
                onOpen()
                // Add your submission logic here
            }
        }
        else {
            setCurrentIndex((prev) => prev + 1);
            setShowTooltip(false);
        }
    };

    const previousQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleAnswerChange = (value: any) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = value;
        setAnswers(newAnswers);
        setShowTooltip(false); // Hide the tooltip if the user answers
    };

    useEffect(() => {
        const containerElement = document.getElementById('lottie-container');
        if (containerElement) {
          const animation = lottie.loadAnimation({
            container: containerElement,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('./animate.json'),
          });
      
          return () => {
            animation.destroy();
          };
        }
      }, [onOpenChange]);
    const skipQuestion = () => {
        console.log("called skip quesin")

        if (currentIndex < questions.length - 1) {
            setAnswers((prev) => {
                const updatedAnswers = [...prev];
                updatedAnswers[currentIndex] = null; // Mark as skipped
                return updatedAnswers;
            });
            nextQuestion('skip');
        }
    };

    // Function to handle answer selection from RangeSlider
    // const handleAnswerChange = (value: any) => {
    //     const newAnswers = [...answers];
    //     newAnswers[currentIndex] = value;
    //     console.log("newAnswers", newAnswers)
    //     setAnswers(newAnswers);
    // };

    return (
        <div className=" text-[#d7d7d7]  ">
            <Navbar />
            
            <div className='py-20 px-32 w-screen flex flex-col items-center  justify-center h-[100vh]'>
            {/* <div className='flex items-center justify-center'>
      <span id="status-icon " className=' p-3' style={{backgroundColor: STATUS_CONTENT_MAP['succeeded'].iconColor, borderRadius:"100%"}}>
        {STATUS_CONTENT_MAP['succeeded'].icon}
      </span>
      </div>
      <h2 id="status-text " className='my-4 font-semibold text-xl text-center'>{STATUS_CONTENT_MAP['succeeded'].text}</h2> */}
      {/* <div id="lottie-container" style={{ width: 300, height: 300 }}></div> */}

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
                            <div className='flex flex-col items-center justify-between '>
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

                                            <div className="flex relative items-center">
                                                <button className={`bg-[#D5BA7F] w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100`}
                                                    onClick={() => nextQuestion('submit')}
                                                    // onClick={onOpen}
                                                // disabled={answers[currentIndex] === null}
                                                >
                                                    Submit
                                                    <FaArrowRightLong />
                                                </button>
                                                {showSubmitTooltip && (
                                                    <div className="absolute top-[-80px] left-1/2 transform z-100 w-[300px] -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg">
                                                        {answeredQuestions === halfThreshold - 1
                                                            ? `You have to answer atleast ${halfThreshold} questions to submit. You have ${halfThreshold - answeredQuestions} question left to proceed!`
                                                            : `You have to answer atleast ${halfThreshold} questions to submit. Answer ${halfThreshold - answeredQuestions} more questions to submit!`}
                                                    </div>
                                                )}

                                            </div>
                                        ) : (
                                            <div className="flex relative items-center">
                                                <button className={`bg-[#D5BA7F] w-[150px] gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100`}
                                                    onClick={() => nextQuestion(null)}
                                                // disabled={answers[currentIndex] === null}
                                                >
                                                    Next
                                                    <FaArrowRightLong />
                                                </button>
                                                {showTooltip && (
                                                    <div className="absolute top-[-60px] left-1/2 transform z-100 w-[200px] -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg">
                                                        You must answer this question first!
                                                    </div>
                                                )}
                                            </div>

                                        )}

                                </div>

                                <div className="flex h-[37px] mt-5 items-center">
                                    {currentIndex !== questions.length - 1 && (

                                        <button className={`bg-white opacity-80 w-[150px]  gap-2 flex items-center text-[#3E3E3E] font-semibold py-2 rounded-lg justify-center ${answers[currentIndex] !== null ? 'bg-opacity-60 !cursor-default' : 'cursor-pointer transform transition-transform duration-300 hover:scale-110 bg-opacity-100'}`}
                                            onClick={skipQuestion}
                                            disabled={answers[currentIndex] !== null}


                                        >
                                            <img src='./skip.png' className="w-6 h-6" />
                                            Skip</button>
                                    )}

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
             <Modal backdrop={'blur'} placement={'center'} isOpen={isOpen} onOpenChange={onOpenChange} className='w-[1000px] relative z-[1000]'>
                    <ModalContent className='w-[12000px]'>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col text-center  gap-1 bg-[#1c1c1c] text-2xl  text-[#D5BA7F] ">Survey submitted</ModalHeader>
                          <ModalBody className='bg-[#1c1c1c] pt-8 text-white pb-16'>
                            <div className='w-full gap-7 flex flex-col items-center justify-center'>
            
      <div id="lottie-container"  style={{ width: 100, height: 100 }}></div>
                             <h1>To see your results, click <span className="text-[#D5BA7F] underline font-semibold cursor-pointer    ">here</span></h1>
                            </div>
                          </ModalBody>
                          {/* <ModalFooter className='bg-[#1c1c1c]'>
                            <button className=" mt-2  text-[#3E3E3E]  bg-[#D5BA7F]   font-bold rounded-lg px-4 py-2 max-w-xs w-[150px]" onClick={onClose}>
                              Close
                            </button>
                          </ModalFooter> */}
                        </>
                      )}
                    </ModalContent>
                  </Modal>
        </div>
    );
}
