import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = ({ feedbackData }) => {
  console.log(feedbackData);
  return (
    <div>
        <h2 className="text-4xl font-extrabold text-center my-5">Our <span className="italic text-green-700 font-semibold">Happy</span> Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {feedbackData?.map((feedback,idx) => (
        <FeedbackCard key={idx} feedback={feedback}></FeedbackCard>
      ))}
    </div>
    </div>
  );
};

export default Feedback;
