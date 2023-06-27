import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import PromptStream from '../streams/PromptStream';

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
    {PromptStream.next('')}
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
            {PromptStream.next(transcript)}
          </div>
      )}
    </div>
  );
}