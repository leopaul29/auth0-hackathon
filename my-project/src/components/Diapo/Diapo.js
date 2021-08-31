import React from "react";
import data from "../../openquizzdb_175.json";
import QuestionComponent from "./QuestionComponent";


const questions = data.quizz.en.débutant;

function Diapo() {
  return (
    <div class="diapo">
        {questions.map((question) => {
          return (
            <QuestionComponent
              key={question.id}
              max={questions.length}
              {...question}
            />
          );
        })}
    </div>
  );
}

export default Diapo;
