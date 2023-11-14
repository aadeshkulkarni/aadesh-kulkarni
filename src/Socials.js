import React from "react";

const Socials = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-white w-screen border-t border-gray-100">
      <div className="flex items-center justify-center p-4">
        <a href="https://github.com/aadeshkulkarni">
          <img src="./github.png" alt="github" className="w-10 h-10 mr-4 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/aadeshkulkarni/">
          <img src="./linkedin.png" alt="linkedin" className="w-10 h-10 mr-4 cursor-pointer" />
        </a>
        <a href="https://stackoverflow.com/users/8389274/aadesh">
          <img src="./stackoverflow.png" alt="stackoverflow" className="w-10 h-10 mr-4 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@AadeshKulkarni">
          <img src="./youtube.png" alt="youtube" className="w-10 h-10 mr-4 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
