import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import promptStream from './streams/promptStream';

export function ImageGenerator() {

    const [promptState, setPromptState] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    const [resultState, setResultState] = useState("");

    const configuration = new Configuration({
        apiKey: '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',
    });
    
    const openai = new OpenAIApi(configuration);

    useEffect(() => {
        // Subscribe to the data stream
        const subscription = promptStream.subscribe((value) => {
            setPromptState(value);
        });

        // Clean up the subscription when the component unmounts
        return () => {
            subscription.unsubscribe();
        };

    }, []);

    const changePromptInput = async (e) => {
        setPromptState(e.target.value);
        // Propagate to the subject.
        {promptStream.next(e.target.value)}
    };

    const generateDalleImage = async () => {
        debugger;
        setLoadingState(true);

        try{
            const apiResponse = await openai.createImage({
                prompt: promptState,
                n: 1,
                size: "512x512",
              });

            setResultState(apiResponse.data.data[0].url);
        }
        catch {
            setResultState("https://yourwebsitefirst.com/wp-content/uploads/2017/06/Best-Practices-for-API-Error-Handling.jpg")
        }
        
        setLoadingState(false);
    };

    return (
    <div>
        <Row>
            <Col >
                <Form.Label htmlFor="inputPassword5">Describe la imágen:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder={promptState}
                    value={promptState}
                    onChange={(e) => changePromptInput(e)}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <Button variant="primary" onClick={generateDalleImage} >
                    Generate Dall-e Image
                </Button>
            </Col>
        </Row>
        <Row>
            <ProgressBar animated now={100} />
            <Col>
            {
                resultState?.length > 0 ? (
                    <Image src={resultState} thumbnail alt='pending to generate image' />
                ) 
            : 
            ( 
                <></> 
            )}
            </Col>
        </Row>
    </div>
    );
}
