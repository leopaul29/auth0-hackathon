import React from "react";
import data from "../../openquizzdb_175.json";
import QuestionComponent from "./QuestionComponent";

const questions = data.quizz.en.débutant;

class Diapo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addPoint = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div class="diapo">
        {questions.map((question) => {
          return (
            <QuestionComponent
              key={question.id}
              max={questions.length}
              addPoint={this.addPoint}
              {...question}
            />
          );
        })}
        <div className="footer" style="text-align: center;">
          <h2>
            Your total score is
            {" " + this.state.count}
          </h2>
          <button>Reset quiz</button>
        </div>
      </div>
    );
  }
}

export default Diapo;
