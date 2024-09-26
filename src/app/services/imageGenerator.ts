'use server'


// Helper function to convert Blob to Base64 string
const blobToBase64 = async (blob: Blob) => {
    // Convert the blob to an arrayBuffer
    const arrayBuffer = await blob.arrayBuffer();

    // Convert arrayBuffer to Buffer (Node.js specific)
    const buffer = Buffer.from(arrayBuffer);

    // Convert Buffer to Base64 string
    const base64Image = buffer.toString('base64');

    // Return the base64 string
    return `data:image/jpeg;base64,${base64Image}`;
};

export default async function query(data: string) {
    const req = { inputs: data };
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(req),
        }
    );
    const result = await response.blob();
    const res = await blobToBase64(result);
    console.log(res);
    return res;
}