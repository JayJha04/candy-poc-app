import { HfInference } from '@huggingface/inference';

// Define HF_TOKEN in your environment variables
const HF_TOKEN = "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";

// Initialize Hugging Face Inference Client
const inference = new HfInference(HF_TOKEN);

const repoId = "ajibawa-2023/Uncensored-Frank-Llama-3-8B";

// Function to call the LLM model using Hugging Face's Inference Client
export async function callLLM(prompt: string): Promise<string> {
    try {
        const response = await inference.textGeneration({
            model: repoId,
            inputs: prompt,
        });

        return response.generated_text;
    } catch (error) {
        console.error('Error calling Hugging Face API:', error);
        throw error;
    }
}

// Main execution
// (async () => {
//     const prompt = "how are you today";

//     try {
//         const result = await callLLM(prompt);
//         console.log(result);
//     } catch (error) {
//         console.error('Error generating text:', error);
//     }
// })();
