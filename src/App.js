// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import {SpeechText} from "./SpeechText"
import {ImageGenerator} from "./ImageGenerator"
import "./App.css";

function App() {
  return (
    <div>
      <h2>Generate an Image using Open AI API</h2>
      <SpeechText />
      <ImageGenerator />
    </div>
  );
}
export default App;