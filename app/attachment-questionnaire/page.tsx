import AttachmentQuestionnaire from "@/components/attachment-questionnaire";

export default function Page() {
   const questions = [
        { question: "I feel comfortable sharing my personal thoughts and feelings with my partners." },
        { question: "I prefer not to show my partners how I feel deeply." },
        { question: "I worry a lot about my relationships." },
        { question: "I become anxious when my partners get too close emotionally." },
        { question: "I find it difficult to open up to my partners." },
        { question: "I don't feel comfortable opening up to my partners." },
        { question: "I talk about my problems and concerns with my partners." },
        { question: "I'm afraid my partners will abandon me." },
        { question: "I often worry that my partners don't want to stay with me." },
    ];

  return (
    <>
      <div className="h-[100vh] w-full">
        <AttachmentQuestionnaire questions={questions} survey={'attachment'}/>
      </div>  
    </>
  );
}
