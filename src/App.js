import React, { Component } from '../../../Users/CSeal/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
//import logo from './logo.svg';
import './App.css';
//import LPProcessor from './LPProcessor';
import SeoHide from './components/SeoHide.tsx'; 

class App extends Component {
  render() {
    return (
          <SeoHide sHref sContent sImg >
            <a href='http://google.com.ua' title='google'>google.com.ua</a>
            <span>
              Hello World
              <a href='http://msn.com.ua'>MSN</a>
              <img src='http://avto-nakleyki66.ru/uploads/product/1408/loupe.jpg' alt='Dart Weider' />
            </span>
            <a href='http://tekknow.com.ua'>My Site</a>
          </SeoHide>
    );
  }
}

export default App;


{/*       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <LPProcessor/>
      </div> */}