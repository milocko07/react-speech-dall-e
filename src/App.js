import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Heading } from './components/Heading';
import {SpeechText} from "./components/SpeechText"
import {ImageGenerator} from "./components/ImageGenerator"
import "./App.css";

function App() {
  return (
    <Container className="border rounded">
      <Stack gap={3}>
        <Heading className="p-1"/>
        <SpeechText className="p-2"/>
        <ImageGenerator className="p-3"/>
      </Stack>
    </Container>
  );
}
export default App;