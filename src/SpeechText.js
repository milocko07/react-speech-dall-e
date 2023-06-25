import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import microPhoneIcon from "./icons/blue-microphone-icon.png";
import dataStream from './dataStream';

// import "./App.css";

export function SpeechText() {
  const [isListeningState, setIsListeningState] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListening = () => {
    setIsListeningState(true);
    // microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
      language: 'es-CO'
    });
  };
  const stopRecording = () => {
    setIsListeningState(false);
    // microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopRecording();
    resetTranscript();
  };
  return (
    <div>
      <Row>
        <Col xs={6} md={4}>
          {/* <Image src={microPhoneIcon} className="microphone-icon" /> */}
          <Button variant="primary" disabled={isListeningState ? 'disabled' : ''} onClick={handleListening} >
           {isListeningState ? 'Recording..' : 'Record'}
          </Button>
          {isListeningState && (
          <Button variant="danger" onClick={stopRecording}>Stop</Button>
          )}
          {transcript && (
          <Button variant="warning" onClick={handleReset}>Reset</Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
        {transcript && (
          <div className="microphone-result-text">
          {dataStream.next(transcript)}
          {transcript}
          </div>
        )}
        </Col>
      </Row>
    </div>
    // <div className="microphone-wrapper">
    //   <div className="mircophone-container">
    //     <div
    //       className="microphone-icon-container"
    //       ref={microphoneRef}
    //       onClick={handleListing}
    //     >
    //       <img src={microPhoneIcon} className="microphone-icon" />
    //     </div>
    //     <div className="microphone-status">
    //       {isListening ? "Listening........." : "Click to start Listening"}
    //     </div>
    //     {isListening && (
    //       <button className="microphone-stop btn" onClick={stopHandle}>
    //         Stop
    //       </button>
    //     )}
    //   </div>
      
    //   {transcript && (
    //     <div className="microphone-result-container">
    //       <div className="microphone-result-text">
    //         <p>Results:</p> 
    //       {/* <textarea maxLength={500}>{transcript}</textarea>  */}
    //       {transcript}
    //       {dataStream.next(transcript)}
    //       </div>
    //       <button className="microphone-reset btn" onClick={handleReset}>
    //         Reset
    //       </button>
    //     </div>
    //   )}

    // </div>
  );
}