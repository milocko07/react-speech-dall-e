import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import PromptStream from '../streams/PromptStream';
import {OpenAIService} from '../services/OpenAIService';

export function ImageGenerator() {

    const [promptState, setPromptState] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    const [resultState, setResultState] = useState(null);
    const [errorState, setErrorState] = useState('');

    useEffect(() => {
        // Subscribe to the data stream
        const subscription = PromptStream.subscribe((value) => {
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
        PromptStream.next(e.target.value);
    };

    const generateDalleImage = async () => {
        setLoadingState(true);
        setResultState(null);
        setErrorState('');

        try{
            const apiResponse = await OpenAIService(promptState);
            // Render first image - updated for OpenAI v5 API
            setResultState(apiResponse.data[0].url);
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
                <Form.Label >Describe the image that you want:</Form.Label>
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
                    Generate Dall-E Image
                    {loadingState && (
                        <span>...
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    </span>
                    )}
                </Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {resultState?.length > 0 ? (
                    <Image 
                        src={resultState} 
                        thumbnail 
                        alt='pending to generate image' 
                        width={1024} height={1024} 
                    />
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
