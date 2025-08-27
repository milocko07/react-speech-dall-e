import OpenAI from "openai";

// Initialize OpenAI client with v5 API
const openai = new OpenAI({
    apiKey: 'paste here open AI key',
    dangerouslyAllowBrowser: true // Required for client-side usage
});

export const OpenAIService = async (prompt) => {
    try {
        const response = await openai.images.generate({
            prompt: prompt,
            model: "dall-e-3",
            n: 1,
            size: "1024x1024",
        });
        return response;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw error;
    }
};
