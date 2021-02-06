import logo from './logo.svg';
import {Component1} from './components/Component1.js';
import {Component2} from './components/Component2.js';
import {Component3} from './components/Component3.js';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Component1 />
      <Component2 />
      <Component3 />
      <h1>Hello World from "Functional Component"</h1>
    </div>
  );
}
export default App;
