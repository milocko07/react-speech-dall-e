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

import React, { useEffect, useState } from 'react';
import {SpeechText} from "./SpeechText"
import "./App.css";
import dataStream from './dataStream';

function App() {
  const [myState, setMyState] = useState('');

  useEffect(() => {
    // Subscribe to the data stream
    const subscription = dataStream.subscribe((value) => {
      setMyState(value);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
    <SpeechText />
    <p>Current text: {myState}</p>
  </div>);
}
export default App;