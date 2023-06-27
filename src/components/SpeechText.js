import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
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
      <Stack gap={1}>
        <div className="p-1">
          <Button 
            variant="primary" 
            disabled={isListeningState ? 'disabled' : ''} 
            onClick={handleListening} 
          >
            {isListeningState ? 'Gragando..' : 'Habla'}
          </Button>
          {isListeningState && (
            <Button variant="danger" onClick={stopRecording}>Parar</Button>
          )}
          {transcript && (
              <Button variant="warning" onClick={handleReset}>Volver a empezar</Button>
          )}
        </div>
      </Stack>
      {transcript && (
          <div>
            {promptStream.next(transcript)}
          </div>
      )}
    </div>
  );
}