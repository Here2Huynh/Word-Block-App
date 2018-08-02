import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    inputLength: 0,
    inputText: '',
    blockArray: []
  }

  inputChangeHandler = (event) => {
    const newInputLength = event.target.value.length;
    this.setState({ inputLength: newInputLength });
    this.setState({ inputText: event.target.value });
    this.setState({ blockArray: this.state.inputText.split('')});
  }

  deleteBlockHandler = (index) => {
    let newInputArry = [...this.state.blockArray];
    newInputArry.splice(index, 1);
    this.setState({ blockArray: newInputArry});
    this.setState({ inputText: newInputArry.join('')});
    // console.log(this.state.blockArray)
  }

  render() {
    const { inputLength, inputText, blockArray } = this.state;

    let charBlocks = null;

    if (inputLength) {
      charBlocks = (
        <div>
          {blockArray.map( (letter, index) => {
            return <CharComponent 
                    letter={letter} 
                    click={(index) => this.deleteBlockHandler(index)} 
                    key={index}
                    />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={inputText} />
        <p> Text Length : {inputLength} </p>
        { console.log(this.state.inputText) }
        <ValidationComponent textLength={inputLength} />
        {/* <CharComponent /> */}
        {charBlocks}
      </div>
    );
  }
}

export default App;


  {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
  <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
  <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
  <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
  <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
  <li>When you click a CharComponent, it should be removed from the entered text.</li>
</ol>
<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}