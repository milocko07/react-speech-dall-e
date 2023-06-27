import React, { useEffect, useState } from 'react';
import { Configuration, CreateImageRequestSizeEnum, OpenAIApi } from "openai";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';

import promptStream from '../streams/promptStream';

export function ImageGenerator() {

    const [promptState, setPromptState] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    const [resultState, setResultState] = useState(null);
    const [errorState, setErrorState] = useState('');

    const configuration = new Configuration({
        apiKey: '',
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
        setResultState(null);
        setErrorState(null);

        try{
            const apiResponse = await openai.createImage({
                prompt: promptState,
                n: 1, // The number of images to generate. Must be between 1 and 10.
                size:  CreateImageRequestSizeEnum._512x512,
              });

            setResultState(apiResponse.data.data[0].url);
        }
        catch (error) {
            if (error.response?.data?.error?.message) {
                console.log(error.response.status);
                console.log(error.response.data);
                setErrorState(error.response.data.error.message);
            } else {
                console.log(error.message);
                setErrorState(error.message);
            }
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
                    disabled={loadingState ? 'disabled' : ''} 
                    rows={3} 
                    placeholder={promptState}
                    value={promptState}
                    onChange={(e) => changePromptInput(e)}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <Button 
                    variant="primary" 
                    disabled={loadingState || promptState.length == 0 ? 'disabled' : ''} 
                    onClick={generateDalleImage} 
                >
                    Generar Dall-e Imagen
                </Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {loadingState && (
                    <ProgressBar animated now={100} />
                )}
                
                {resultState?.length > 0 ? (
                    <Image src={resultState} thumbnail alt='pending to generate image' width={1024} height={1024} />
                )
                : 
                ( 
                    <></> 
                )}
            </Col>
        </Row>
        <Row>
            <Col>
                {errorState?.length > 0 && promptState?.length > 0 ? (
                    <Alert key='danger' variant='danger'>{errorState}</Alert>
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
