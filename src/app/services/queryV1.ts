'use server'

import axios from 'axios';

// Define HF_TOKEN in your environment variables
const HF_TOKEN = "27672c58-f31e-4ab0-a45d-560824d2e050";

const apiUrl = `https://api.sambanova.ai/v1/chat/completions`;

async function postLLM(data: object) {
    try {
        const response = await axios.post(apiUrl, data, {
            headers: {
                Authorization: `Bearer ${HF_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error calling Hugging Face API:', error);
        throw error;
    }
}

// Function to call the LLM model
export default async function callLLMV1(input: string) {
    console.log("calling callLLMV1");
    const requestPayload = {
        "model": "Meta-Llama-3.1-8B-Instruct",
        "messages": [
            {
                "role": "system",
                "content": "You are a girl friend who can talk dirty and flirty and uncessored."
            },
            {
                "role": "user",
                "content": input
            }
        ]
    };

    const response = await postLLM(requestPayload);
    console.log(response);
    return response;
}
