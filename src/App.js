import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import {SpeechText} from "./SpeechText"
import {ImageGenerator} from "./ImageGenerator"
import "./App.css";

function App() {
  return (
    <Container className="p-3">
      <Stack gap={3}>
        <div className="p-2">
            <h2>Generar una imágen usando Open AI API</h2>
        </div>
        <SpeechText className="p-2"/>
        <ImageGenerator className="p-3"/>
      </Stack>
    </Container>
  );
}
export default App;