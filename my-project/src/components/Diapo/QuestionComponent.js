import React from "react";
import Answer from "./Answer";
import Choice from "./Choice";
import Funfact from "./Funfact";

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("props:" + props);
    this.state = {
      id: this.props.id,
      question: this.props.question,
      choices: this.props.choices,
      answer: this.props.answer,
      funfact: this.props.funfact,
      showFF: false,
    };
  }

  handleCallback = () => {
    this.setState({ showFF: true });
  };

  render() {
    const { id, question, choices, answer, funfact } = this.state;
    return (
      <div className="slide">
        <h1 className="title">
          <span className="id">{id} /</span>
          {" " + question}
        </h1>
        <div className="choices">
          {choices.map((choice, i) => {
            return (
              <Choice
                choice={choice}
                id={id}
                i={i}
                answer={answer}
                parentCallback={this.handleCallback}
              />
            );
          })}
        </div>

        {this.state.showFF && <Funfact funfact={funfact} parentFF={this.state.showFF} />}
      </div>
    );
  }
}

export default QuestionComponent;
