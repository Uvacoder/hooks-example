import React from 'react';
import './App.css';

import ExampleUS from "./components/ExampleUS/ExampleUS"
import ExampleUE from "./components/ExampleUE/ExampleUE"
import CheatPanel from "./components/CheatPanel/CheatPanel"

const App = () => {
  return (
    <div className="layout">
      <CheatPanel />
      <ExampleUS />
      <ExampleUE />
    </div>
  )
}

export default App;
