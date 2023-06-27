import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import promptStream from '../streams/promptStream';

export function SpeechText() {
  const [isListeningState, setIsListeningState] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

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
        <Col md={1}>
          <Button 
            variant="primary" 
            disabled={isListeningState ? 'disabled' : ''} 
            onClick={handleListening} 
          >
           {isListeningState ? 'Gragando..' : 'Habla'}
          </Button>
        </Col>
        {isListeningState && (
          <Col md={1}>
            <Button variant="danger" onClick={stopRecording}>Parar</Button>
          </Col>
          )}
          {transcript && (
            <Col xl={2} md={4} className='resetButton'>
              <Button variant="warning" onClick={handleReset}>Volver a empezar</Button>
            </Col>
          )}
      </Row>
      {transcript && (
          <div>
            {promptStream.next(transcript)}
          </div>
      )}
    </div>
  );
}