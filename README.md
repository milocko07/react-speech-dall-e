# React Speech Dall-E Image Generator

A React application that generates images using OpenAI's latest DALL-E 3 API, with speech-to-text capabilities.

## Features

- **🎨 DALL-E 3 Image Generation**: Latest image generation model with quality and style options
  - Standard and HD quality options
  - Natural and vivid style preferences
  - 1024x1024 high-resolution images
- **🤖 GPT-4 Turbo Text Generation**: Latest text generation model for conversations and content creation
- **🎤 Speech-to-Text Input**: Voice input for both image and text generation
- **🔄 Real-time Prompt Streaming**: Seamless communication between components
- **📱 Responsive UI**: Bootstrap-based modern interface with tabbed navigation

## Latest OpenAI Models Used

- **DALL-E 3** (`dall-e-3`) - Latest image generation model
- **GPT-4 Turbo** (`gpt-4-1106-preview`) - Latest text generation model  
- **GPT-4 Vision** (`gpt-4-vision-preview`) - Latest vision analysis model

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
2. Choose quality (Standard/HD) and style (Natural/Vivid) preferences
3. Click "Generar Dall-e Imagen" to generate the image
4. The generated image will appear below the form

### Text Generation (GPT-4 Turbo)
1. Switch to the "GPT-4 Turbo Text Generation" tab
2. Enter your question or prompt
3. Click "Generate with GPT-4 Turbo"
4. View the AI-generated response

### Speech Input
- Use the speech recognition component to input prompts by voice
- Supports multiple languages (default: Spanish-Colombia)
- Works with both image and text generation

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
3. Verify your OpenAI account has access to DALL-E 3 and GPT-4 models
4. Make sure you have enough API credits for the models you want to use

## API Model Costs

- **DALL-E 3**: $0.040 per image (Standard), $0.080 per image (HD)
- **GPT-4 Turbo**: $0.01 per 1K input tokens, $0.03 per 1K output tokens
- **GPT-4 Vision**: $0.01 per 1K input tokens, $0.03 per 1K output tokens
