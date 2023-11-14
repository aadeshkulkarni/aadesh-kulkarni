import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const submitHandler = () => {
    if (message.trim() !== "") {
      setSuccess("Your message has been recorded.");
      setMessage("")
    } else {
      setError("Invalid message");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col justify-center items-center md:flex-row text-md">
          <input
            value={message}
            onChange={(e) => {
              setError("");
              setSuccess("");
              setMessage(e.target.value);
            }}
            type="text"
            placeholder="Write your message here..."
            className="w-full p-4 rounded-lg border border-gray-300"
          />
          <button onClick={submitHandler} className="mt-4 md:mt-0 ml-4 p-4 w-[140px] rounded-full bg-blue-600 text-white uppercase font-bold tracking-wider">
            Submit
          </button>
        </div>
        {error && <div className="text-sm text-red-700 p-2 text-center">{error}</div>}
        {success && <div className="text-sm text-green-700 p-2 text-center">{success}</div>}
      </div>
    </div>
  );
};

export default Contact;
