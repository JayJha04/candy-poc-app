import { HfInference } from '@huggingface/inference';

// Define HF_TOKEN in your environment variables
const HF_TOKEN = process.env.HF_TOKEN || "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";

// Initialize Hugging Face Inference Client
const inference = new HfInference(HF_TOKEN);

const repoId = "jinaai/reader-lm-1.5b";

// Function to call the LLM model using Hugging Face's Inference Client
export async function callLLM(prompt: string): Promise<string> {
    try {
        const response = await inference.textGeneration({
            model: repoId,
            inputs: prompt,
            parameters: { max_new_tokens: 200 },
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
