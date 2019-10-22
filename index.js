import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>
          Start editing to see some magic happen :)
        </p>
        <a href="">ReactJS Tutorial on Only Fullstack</a>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
