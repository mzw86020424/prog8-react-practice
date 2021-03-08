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
    	  <button>ひつじ仙人</button>
        <button>にんじゃわんこ</button>
      </div>
    );
  }
}

export default App;
