'use client'

import { useState } from "react";
import query from "../services/imageGenerator";
import Image from "next/image";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [image, setImage] = useState("");


    const handleSend = async (input: string) => {
        if (!input.trim()) return; // prevent sending empty or whitespace-only messages

        try {
            console.log('Sending message to LLM:', input); // log input before the API call
            const result = await query(input);
            console.log(result);
            if (result) {
                // Update the messages, escaping HTML for user input and rendering HTML for LLM response
                setImage(result);

            } else {
                console.log('LLM returned no response.');
            }
        } catch (err) {
            console.error('Error calling LLM:', err); // catch and log errors
        }
        setInputValue(""); // clear the input
    };


    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="mb-3">
                            <label className="form-label fs-2 ps-4">Generate Image</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type a message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} rows={3}></textarea>
                        </div>
                        <div className="card-body">
                            {image && <Image src={image} alt="Generated from Hugging Face API" />}

                        </div>
                        <div className="d-grid d-block">
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                onClick={() => handleSend(inputValue)} // pass the inputValue
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
