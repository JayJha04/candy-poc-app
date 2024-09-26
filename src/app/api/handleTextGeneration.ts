// import axios from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     console.log("hello");
//     if (req.method == 'POST') {
//         console.log("i am in handler");
//         const HF_TOKEN = "27672c58-f31e-4ab0-a45d-560824d2e050";

//         const apiUrl = `https://api.sambanova.ai/v1/chat/completions`;

//         try {
//             const response = await axios.post(apiUrl, req.body, {
//                 headers: {
//                     Authorization: `Bearer ${HF_TOKEN}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             console.log(response.data);
//             return res.json(response.data);
//         } catch (error) {
//             console.error('Error calling Hugging Face API:', error);
//             throw error;
//         }
