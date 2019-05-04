import React from 'react';
import './App.css';

import ExampleUS from "./components/ExampleUS/ExampleUS"
import ExampleUE from "./components/ExampleUE/ExampleUE"
import CheatPanel from "./components/CheatPanel/CheatPanel"

const App = () => {
  return (
    <div className="layout">
      <CheatPanel />

      <article className="examples">
        <ExampleUS />
        <ExampleUE />
      </article>
    </div>
  )
}

export default App;
