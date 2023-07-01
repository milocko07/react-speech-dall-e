# React-Dall-E

This app demonstrates how to connect a React app (using hooks) to the [DALL-E OpenAI API](https://platform.openai.com/docs/guides/images/introduction) to generate images based on audio and textual prompts. The app allows users to record the voice, transform it as input in a text prompt, send it to the DALL-E API, and display the generated image in the UI.

# Installation

Clone the repository to your local machine.

Navigate to the project directory (main root).

Install the dependencies by running the following command:

```console
npm install
```
Wait for it.

# Configuration

Before running the app, you need to set up the configuration for the DALL-E OpenAI API.

1. Create an account on the OpenAI [web page](https://platform.openai.com/) and create an API key
   Note: You will need to pay it for some credits to use API keys.
3. Copy that new key in a secure location and paste it into the apiKey property value that is located in the **src/Services/OpenAIService.js** file.

![image](https://github.com/milocko07/react-dall-e/assets/37205551/d93b9287-64dd-45cc-ac7e-2cc287d0a8a6)

# Usage

To start the React-DALL-E app, run the following command:

```console
npm start
```

This command starts the development server, and the app will be accessible at http://localhost:3000 in your browser.

Once the app is running, follow these steps to generate an image:

Enter a text prompt in the input field.
Click the "Generate Image" button.
The app will send the text prompt to the DALL-E API and display the generated image in the app's interface.
