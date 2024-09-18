"use client"

import { useState } from "react";
import { callLLM } from "./services/query";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async (input: string) => {
    const res = await callLLM(input);
    setInputValue("");
  }


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Chat Application
            </div>
            <div className="card-body">
              <div
                className="message-container border p-3 mb-3"
                style={{ height: '300px', overflowY: 'scroll' }}
              >
                {messages.length > 0 ? (
                  messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                      <strong>User:</strong> {msg}
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
                  onChange={(e) => { setInputValue(e.target.value) }}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSend}
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
