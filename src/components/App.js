import React from 'react';
import './App.css';

import MainLogo from '../images/react-js-blog-header.png';
import Ninjawanko from '../images/ninjawanko.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "にんじゃわんこ", count: 0 };
  }
  handleClick(name) {
    this.setState({name: name})
  }
  countUp() {
    this.setState({count: this.state.count + 1})
  }
  countDown() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    const name = "にんじゃわんこ"
    return (
      <div>

    	  <h1>こんにちは、{this.state.name}さん！</h1>
        <button onClick={() => {
          this.handleClick("ひつじ仙人")
        }}
        >ひつじ仙人</button>
        <button onClick={() => {
          this.handleClick("にんじゃわんこ")
        }}
        >にんじゃわんこ</button>

        <h1>{this.state.count}</h1>
        <button onClick={() => {
          this.countUp()
        }} >+</button>

        <button onClick={() => {
          this.countDown()
        }} >-</button>
      </div>
    );
  }
}

export default App;
