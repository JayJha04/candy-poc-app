// import axios from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         console.log("i am in handler");
//         const HF_TOKEN = process.env.HF_TOKEN ?? "your-fallback-token";
//         const apiUrl = `https://api.sambanova.ai/v1/chat/completions`;

//         try {
//             const response = await axios.post(apiUrl, req.body, {
//                 headers: {
//                     Authorization: `Bearer ${HF_TOKEN}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             console.log(response.data);
//             return res.status(200).json(response.data);
//         } catch (error: any) {
//             console.error('Error calling Hugging Face API:', error);

//             // Return proper error response
//             return res.status(500).json({ message: 'Internal server error', error: error.message });
//         }
//     } else {
//         // If the method is not POST, return 405 (Method Not Allowed)
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }
