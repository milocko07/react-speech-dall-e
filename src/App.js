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

import React, { useState, useEffect } from 'react';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Access the microphone
    const accessMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
          console.log('Recording started');
        };

        recognition.onresult = (event) => {
          const { transcript } = event.results[event.results.length - 1][0];
          setTranscript(transcript);
        };

        recognition.start();

        return () => {
          recognition.stop();
          stream.getTracks().forEach((track) => track.stop());
        };
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    if (isRecording) {
      accessMicrophone();
    }
  }, [isRecording]);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  return (
    <div>
      <h1>Voice to Text</h1>
      <button onClick={() => setIsRecording(!isRecording)}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {transcript && <p>Transcript: {transcript}</p>}

      <button onClick={() => handleButtonClick()}>
        {isRecording ? 'Send' : 'Start Recording'}
      </button>

      {showImage && (
        <div>
          <h2>Image Section</h2>
          {/* <img src="path/to/your/image.jpg" alt="Image" /> */}
        </div>
      )}
    </div>
  );
};

export default App;