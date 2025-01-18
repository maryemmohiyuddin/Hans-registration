'use client'
import { useEffect, useState } from "react";

export default function RangeSlider({ onAnswerChange, answers, currentIndex }:any) {
    const [currentValue, setCurrentValue] = useState();

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
                        id="Never"
                        value="Never"
                        onChange={handleRangeChange}
                        checked={currentValue === "Never"}
                        required
                    />
                    <label htmlFor="Never" data-debt-amount="Never"></label>

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Rarely"
                        value="Rarely"
                        onChange={handleRangeChange}
                        checked={currentValue === "Rarely"}
                        required
                    />
                    <label htmlFor="Rarely" data-debt-amount="Rarely"></label>

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Sometimes"
                        value="Sometimes"
                        onChange={handleRangeChange}
                        checked={currentValue === "Sometimes"}
                        required
                    />
                    <label htmlFor="Sometimes" data-debt-amount="Sometimes"></label>

                    <input
                        type="radio"
                        name="debt-amount"
                        id="Often"
                        value="Often"
                        onChange={handleRangeChange}
                        checked={currentValue === "Often"}
                        required
                    />
                    <label htmlFor="Often" data-debt-amount="Often"></label>

                    <div id="debt-amount-pos"></div>
                </div>
            </form>
        </div>
    );
}
