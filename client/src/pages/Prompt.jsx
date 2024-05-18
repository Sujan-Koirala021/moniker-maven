import React, { useState } from 'react'

export default function Prompt() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message })
        });
        const data = await res.text();
        setResponse(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  return (
    <div>
        <div className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Moniker-Maven</h1>
        <p>This is a sample page content.</p>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="pd-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="button block" type="submit">Submit</button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700">
            <h2 className="text-2xl font-bold">Response:</h2>
            <pre>{response}</pre>
          </div>
        )}
      </div>

    </div>
  )
}
