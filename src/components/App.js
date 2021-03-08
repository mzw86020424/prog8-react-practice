import React from 'react';
import './App.css';

import MainLogo from '../images/react-js-blog-header.png';
import Ninjawanko from '../images/ninjawanko.png';

class App extends React.Component {
  render() {

    const name = "にんじゃわんこ"
    return (
      <div>

        <h1>
          {name}
        </h1>
        
        <img src={Ninjawanko} alt= "Ninjawanko" />
        <img src={MainLogo} alt= "logo image" />
        
      </div>
    );
  }
}

export default App;
