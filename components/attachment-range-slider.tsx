'use client'
import { useEffect, useState } from "react";
import '../styles/attachment-range-slider.scss'

export default function AttachmentRangeSider({ onAnswerChange, answers, currentIndex }:any) {
    const [currentValue, setCurrentValue] = useState();
    // useEffect(() => {
    //     // Dynamically import the global SCSS file
    //     import("../styles/attachment-range-slider.scss");
    //   }, []);
	useEffect(() => {
        const answerForCurrentIndex = answers[currentIndex];
        setCurrentValue(answerForCurrentIndex);
    }, [currentIndex, answers]); 

    const handleRangeChange = (event:any) => {
        const value = event.target.value;
        setCurrentValue(value);
        onAnswerChange(value); 
    };

    return (
        <div id="form-wrapper" className="relative z-[90]">
            <form action="" method="GET">
                <div id="debt-amount-slider">

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Strongly disagree"
                        value="Strongly disagree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Strongly disagree"}
                        required
                    />
                    <label htmlFor="Strongly disagree" data-debt-amount="Strongly disagree"></label>
                    {/* <label htmlFor="Strongly disagree" data-debt-amount="Strongly"></label> */}


                    <input
                        type="radio"
                        name="debt-amount"
                        id="Disagree"
                        value="Disagree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Disagree"}
                        required
                    />
                    <label htmlFor="Disagree" data-debt-amount="Disagree"></label>

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Partially disagree"
                        value="Partially disagree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Partially disagree"}
                        required
                    />
                    <label htmlFor="Partially disagree" data-debt-amount="Partially disagree"></label>

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Neutral"
                        value="Neutral"
                        onChange={handleRangeChange}
                        checked={currentValue === "Neutral"}
                        required
                    />
                    <label htmlFor="Neutral" data-debt-amount="Neutral"></label>
                    <input
                        type="radio"
                        name="debt-amount"
                        id="Partially agree"
                        value="Partially agree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Partially agree"}
                        required
                    />
                    <label htmlFor="Partially agree" data-debt-amount="Partially agree"></label>
                    <input
                        type="radio"
                        name="debt-amount"
                        id="Agree"
                        value="Agree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Agree"}
                        required
                    />
                    <label htmlFor="Agree" data-debt-amount="Agree"></label>
                    <input
                        type="radio"
                        name="debt-amount"
                        id="Strongly agree"
                        value="Strongly agree"
                        onChange={handleRangeChange}
                        checked={currentValue === "Strongly agree"}
                        required
                    />
                    <label htmlFor="Strongly agree" data-debt-amount="Strongly agree"></label>
                    <div id="debt-amount-pos"></div>
                </div>
            </form>
        </div>
    );
}
