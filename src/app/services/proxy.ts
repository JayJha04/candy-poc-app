// pages/api/your-api-route.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type, X-Token-Auth, X-Custom-Header'
    );

    // Handle preflight request (OPTIONS method)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Handle the actual request here
    res.status(200).json({ message: 'CORS enabled!' });
}
