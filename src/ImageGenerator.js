import React, { useEffect, useState } from 'react';

import { Configuration, OpenAIApi } from "openai";
// import "./App.css";
import dataStream from './dataStream';

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
        const subscription = dataStream
        .subscribe((value) => {
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
    };

    const generateDalleImage = async () => {
        debugger;
        // setPlaceholder(`Search ${prompt}..`);
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
            <p>Describe la imágen:</p>
            <textarea
                className="app-input"
                placeholder={promptState}
                value={promptState}
                onChange={(e) => changePromptInput(e)}
                rows="10"
                cols="40"
            />
            <button onClick={generateDalleImage}>Generate Dall-e Image</button>

            {
                resultState?.length > 0 ? (
                    <img className="result-image" src={resultState} alt="result" width={512} height={512} />
                ) 
            : ( 
                <></> 
            )}

        </div>
    );
}
