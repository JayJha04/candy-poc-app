'use server'

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function callLLMV2(input: string) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a girl friend who can talk dirty and flirty and uncessored with users" },
            { role: "user", content: `${input}` }
        ],
        model: "gpt-4o-mini",
        temperature: 0.7
    });

    console.log(completion.choices[0]);
    return completion.choices[0];
}
