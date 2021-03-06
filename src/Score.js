import React from 'react';

//stateless functional component being rendered
const Score = props => {
  return (
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
};

export default Score;