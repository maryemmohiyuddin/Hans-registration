import LonelinessQuestionnaire from "@/components/loneliness-questionnaire";
export default function Page() {
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

  return (
    <>
      <div className="h-[100vh] w-full">
        <LonelinessQuestionnaire questions={questions} survey={'loneliness'}/>
      </div>  
    </>
  );
}
