# React-Dall-E

This app demonstrates how to connect a React app (using hooks) to the [DALL-E OpenAI API](https://platform.openai.com/docs/guides/images/introduction) to generate images based on audio and textual prompts,  allowing users to record the voice, transform it as input in a text prompt, send it to the DALL-E API, and display the generated image in the UI.

![Demo-1-Result](https://github.com/milocko07/react-dall-e/assets/37205551/c99a5349-a78e-4acd-b515-29f1bca7db4e)

# Installation

Clone the repository to your local machine.

Navigate to the project directory (main root).

Install the dependencies by running the following command:

```console
npm install
```
Wait for it.

# Packages used

```console
npx create-react-app react-dall-e
```
```console
npm i react-speech-recognition
```
```console
npm i rxjs
```
```console
npm i openai
```
```console
npm i react-bootstrap
```

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

1. Enable your mic to speech and click the button "Habla" (talk in english) or enter a manual text prompt in the text area field
2. Click on the "Generar Dall-e Imagen" (Generate Dall-e image in english) button.
3. The app will send the text prompt to the DALL-E image API and display the generated image just bellow.

# Limitations

Please note the following limitations and considerations when using the React-DALL-E app:

1. The DALL-E API has usage limits, including the number of requests per minute and the total number of tokens used. Ensure you review and understand the usage limits set by OpenAI to avoid exceeding them.
2. The app relies on an internet connection to communicate with the DALL-E API. Make sure you have a stable internet connection while using the app.
3. The quality and style of the generated images are influenced by the pre-trained model and the prompts provided. Experiment with different prompts to achieve desired results.

# Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or would like to add new features, feel free to open an issue or submit a pull request to the GitHub repository.

# License

The React-DALL-E app is licensed under the **MIT License**.

# Acknowledgments

1. This app is based on the DALL-E OpenAI API and utilizes the power of React for the user interface.
2. Special thanks to the OpenAI team for their efforts in developing the DALL-E model and making it available for experimentation.
3. [How to Generate Images using React and the Dall-E 2 API – React and OpenAI API Tutorial.](https://www.freecodecamp.org/news/generate-images-using-react-and-dall-e-api-react-and-openai-api-tutorial/)
4. [Build a React App Using DALL-E API.](https://betterprogramming.pub/build-a-react-app-using-dall-e-api-bd15d5d67b31)
