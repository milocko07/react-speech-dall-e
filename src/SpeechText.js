import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import promptStream from './streams/promptStream';

export function SpeechText() {
  const [isListeningState, setIsListeningState] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    // Subscribe to the data stream
    // const subscription = promptStream.subscribe((value) => {
    //   promptStream.next(value);
    // });

    // // Clean up the subscription when the component unmounts
    // return () => {
    //     subscription.unsubscribe();
    // };

  }, []);

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
    {promptStream.next('')}
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
  );
}