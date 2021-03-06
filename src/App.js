import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state={
    
 value1 : Math.floor(Math.random() * 100),
 value2 : Math.floor(Math.random() * 100),
 value3 : Math.floor(Math.random() * 100),
 proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
 numCorrect:0,
 numQuestions:0
  }

  checkIfTrue = () => {
    const trueResults= this.state.value1 + this.state.value2 + this.state.value3
    
    if (trueResults === this.state.proposedAnswer){
       this.setState ((currentState) => ({
      numCorrect:currentState.numCorrect + 1
    }))   
     }  
      
  this.setState ((currentState) => ({
  value1 : Math.floor(Math.random() * 100),
  value2 : Math.floor(Math.random() * 100),
  value3 : Math.floor(Math.random() * 100),
  proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
    })) 
    
  };

  checkIfFalse = () => {
    const trueResults= this.state.value1 + this.state.value2 + this.state.value3
    if (trueResults !== this.state.proposedAnswer){
       this.setState ((currentState) => ({
      numCorrect:currentState.numCorrect + 1
    }))   
     }  
      
  this.setState ((currentState) => ({
  value1 : Math.floor(Math.random() * 100),
  value2 : Math.floor(Math.random() * 100),
  value3 : Math.floor(Math.random() * 100),
  proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
    })) 
    
  };

  numeberOfquestions = () => {
    this.setState ((currentState) => ({
      numQuestions:currentState.numQuestions + 1
    }))
  }; 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick = {(e)=>{this.checkIfTrue(); this.numeberOfquestions() }}>True</button>
          <button onClick = {(e)=>{this.checkIfFalse(); this.numeberOfquestions() }}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
