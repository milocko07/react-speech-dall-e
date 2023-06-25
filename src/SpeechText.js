// import React, { useRef, useEffect, useState } from 'react';
import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import microPhoneIcon from "./icons/blue-microphone-icon.png";
import promptStream from './streams/promptStream';

export function SpeechText() {
  const [isListeningState, setIsListeningState] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  // useEffect(() => {
  //   // Subscribe to the data stream
  //   const subscription = promptStream.subscribe((value) => {
  //     promptStream.next('');
  //   });

  //   // Clean up the subscription when the component unmounts
  //   return () => {
  //       subscription.unsubscribe();
  //   };

  // }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div>
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const handleListening = () => {
    setIsListeningState(true);
    SpeechRecognition.startListening({
      continuous: true,
      language: 'es-CO'
    });
  };

  const stopRecording = () => {
    setIsListeningState(false);
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
      {transcript && (
          <div>
            {transcript}
            {promptStream.next(transcript)}
          </div>
      )}
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