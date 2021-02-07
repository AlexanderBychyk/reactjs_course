import React from 'react';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';
import Component3 from './components/Component3.js';
import Component4 from './components/Component4.js';
import './App.css';

function App() {
  return (
    <div className="appHeader">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <h1>Hello World from &quot;Functional Component&quot;</h1>
    </div>
  );
}
export default App;
