"use client";

import { useState } from "react";
import callLLMV1 from "./services/queryV1";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]); // specify the type of messages
  const [error, setError] = useState<string | null>(null); // for handling errors

  const handleSend = async (input: string) => {
    if (!input.trim()) return; // prevent sending empty or whitespace-only messages

    setError(null); // reset any previous errors

    try {
      console.log('Sending message to LLM:', input); // log input before the API call
      //const res = await callLLM(input); // assuming res is a string response
      //const res = await callLLMV1(input);
      const result = await callLLMV1(input);
      const res = result.choices[0].message.content;
      console.log(res);
      if (res) {
        // Update the messages, escaping HTML for user input and rendering HTML for LLM response
        setMessages((prevMessages) => [
          ...prevMessages,
          `<strong>User:</strong> ${escapeHtml(input)}`,
          `<strong>AI:</strong> ${res}`
        ]); // update the messages
        console.log('LLM Response:', res); // log the response to the console
      } else {
        console.log('LLM returned no response.');
        setError('LLM returned no response. Please try again.'); // show error if no response
      }
    } catch (err) {
      console.error('Error calling LLM:', err); // catch and log errors
      setError('An error occurred while processing your message.');
    }
    setInputValue(""); // clear the input
  };

  // Function to escape HTML to prevent XSS attacks
  const escapeHtml = (text: string) => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Chat Application
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div
                className="message-container border p-3 mb-3"
                style={{ height: '300px', overflowY: 'scroll' }}
              >
                {messages.length > 0 ? (
                  messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                      <div dangerouslySetInnerHTML={{ __html: msg }} />
                    </div>
                  ))
                ) : (
                  <div>No messages yet!</div>
                )}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleSend(inputValue)} // pass the inputValue
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
