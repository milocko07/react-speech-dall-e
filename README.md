# React Speech Dall-E Image Generator

A React application that generates images using OpenAI's latest DALL-E 3 API, with speech-to-text capabilities.

<img width="1134" height="913" alt="image" src="https://github.com/user-attachments/assets/6eb52a80-945b-49da-a12e-094b6e5ab4f1" />

## Features

- **🎨 DALL-E 3 Image Generation**: Latest image generation model with quality and style options
  - Standard and HD quality options
  - Natural and vivid style preferences
  - 1024x1024 high-resolution images
- **🎤 Speech-to-Text Input**: Voice input for both image generation
- **🔄 Real-time Prompt Streaming**: Seamless communication between components
- **📱 Responsive UI**: Bootstrap-based modern interface with tabbed navigation

## Latest OpenAI Models Used

- **DALL-E 3** (`dall-e-3`) - Latest image generation model

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Create a `.env` file in the root directory with your OpenAI API key:
   ```
   REACT_APP_OPENAI_API_KEY=your_actual_openai_api_key_here
   ```
   
   **Important:** Never commit your actual API key to version control!

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Image Generation (DALL-E 3)
1. Type or speak your image description in the text area
2. Click "Generate Dall-e Image" to create the 
image
3. The generated image will appear below

### Speech Input
- Use the speech recognition component to input prompts by voice
- Supports multiple languages (default: Spanish-Colombia)

## Security Notes

- API keys are stored in environment variables
- The app uses `dangerouslyAllowBrowser: true` for client-side OpenAI API calls
- Consider implementing a backend proxy for production use

## Dependencies

- React 18.2.0
- OpenAI API v5 (latest)
- React Bootstrap
- RxJS for state management
- React Speech Recognition

## Troubleshooting

If you encounter issues:
1. Ensure your OpenAI API key is valid and has sufficient credits
2. Check that all environment variables are properly set
3. Verify your OpenAI account has access to DALL-E 3
4. Make sure you have enough API credits for the models you want to use

## API Model Costs

- **DALL-E 3**: $0.040 per image (Standard), $0.080 per image (HD)
