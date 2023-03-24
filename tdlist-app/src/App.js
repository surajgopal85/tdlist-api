import React from 'react';
import TdlistsContainer from './components/TdlistsContainer';
import './App.css';

const App = () => {
    return (
      <div className="mainContainer">
        <div className="topHeading">
          <h1>A Simple To-Do List App</h1>
        </div>
        <TdlistsContainer />
      </div>
    );
}

export default App;
