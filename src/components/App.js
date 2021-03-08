import React from 'react';
import './App.css';

import MainLogo from '../images/react-js-blog-header.png';
import Ninjawanko from '../images/ninjawanko.png';

class App extends React.Component {
  render() {

    const name = "にんじゃわんこ"
    return (
      <div>

    	  <h1>こんにちは、にんじゃわんこさん！</h1>
        <button onClick={() => {
          console.log("ひつじ仙人")
        }}
        >ひつじ仙人</button>
        <button onClick={() => {
          console.log("にんじゃわんこ")
        }}
        >にんじゃわんこ</button>
      </div>
    );
  }
}

export default App;
