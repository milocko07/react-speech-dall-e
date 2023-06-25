import React from 'react';
import {SpeechText} from "./SpeechText"
import {ImageGenerator} from "./ImageGenerator"

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import "./App.css";

function App() {
  return (
    <Container className="p-3">
      <Stack gap={3}>
        <div className="p-2">
            <h2>Generate an Image using Open AI API</h2>
        </div>
        <SpeechText className="p-2"/>
        {/* <ImageGenerator className="p-3"/> */}
      </Stack>
    </Container>
  );
}
export default App;