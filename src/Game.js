import React, { Component } from 'react'

class Game extends Component {
	constructor(props) {
    	super(props);
      	const valuesArray = this.newQuestion();
      //setting state
      	this.state = {
        	X: valuesArray[0],
          	Y: valuesArray[1],
          	Z: valuesArray[2],
          	P: valuesArray[2]
        }
    }
  
  //Function generates random numbers X, Y, Z and P and returns an array containing those values
  	newQuestion = () => {
    	const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      
      	return [value1, value2, value3, proposedAnswer];
    }
  
  	// Updating State
  	updateState = (newValuesArray) => {
    	this.setState(currState => ({
        	X: newValuesArray[0],
          	Y: newValuesArray[1],
          	Z: newValuesArray[2],
          	P: newValuesArray[3],
        }));
    }
  
  //This function Computes the final Answer
  	evaluateAnswer = (answer) => {
    	const { X, Y, Z, P } = this.state;
      	const correctAnswer = X + Y + Z;
      
      	return (
        	(P === correctAnswer && answer === 'true') || ( P !== correctAnswer && answer === 'false')
        );
    }
  
  //This is the onClick event handler function that computes the final Answer
  	handleAnswer = (event) => {
    	const newValuesArray = this.newQuestion();
      	this.updateState(newValuesArray);
      	const finalAnswer = this.evaluateAnswer(event.target.name);
      	this.props.handleAnswer(finalAnswer);
    }
  
  // Render function 
  	render() {
  		const { X, Y, Z, P } = this.state;
      	return (
      		<div>
        		<div className="equation">
            		<p className="text">{`${X} + ${Y} + ${Z} = ${P}`}</p>
          		</div>
          		<button name='true' onClick = {this.handleAnswer}>True</button>
          		<button name='false' onClick = {this.handleAnswer}>False</button>
        	</div>
       )
  	}
}

export default Game;