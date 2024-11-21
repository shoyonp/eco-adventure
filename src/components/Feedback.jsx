import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = ({ feedbackData }) => {
  return (
    <div>
      <h2 className="text-3xl text-[#064E3B]  font-semibold text-center my-10">
        What Our{" "}
        <span className="italic text-[#A7D7C5]">Adventurers</span>{" "}
        Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {feedbackData?.map((feedback, idx) => (
          <FeedbackCard key={idx} feedback={feedback}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
