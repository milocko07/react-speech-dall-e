import { Configuration, CreateImageRequestSizeEnum, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '',
});

const openai = new OpenAIApi(configuration);

export const OpenAIService = async (prompt) => {
    return await openai.createImage({
            prompt: prompt,
            n: 1, // The number of images to generate. Must be between 1 and 10.
            size:  CreateImageRequestSizeEnum._512x512,
    });
};
  