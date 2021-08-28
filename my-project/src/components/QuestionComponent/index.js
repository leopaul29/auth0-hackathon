import React from "react";
import style from "./style.css";

function QuestionComponent({ questionData, max }) {
  const { id, question, choices, answer, funfact } = questionData;

  return (
    <div>
      <span className="id">
        {id} / {max}
      </span>
      <h1 className="title">{question}</h1>
      <div className="choices">
        {choices.map((choice, i) => {
          return (
            <div className="choice">
              <input type="radio" name="choice" id={"choice_"+id+"_"+i} />
              <label htmlFor="choice">{choice}</label>
            </div>
          );
        })}
      </div>
      <p className="answer">{answer}</p>
      <p className="funfact">{funfact}</p>
    </div>
  );
}

export default QuestionComponent;
