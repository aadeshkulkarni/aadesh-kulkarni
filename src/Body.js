import React from "react";

const Body = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col md:grid md:grid-cols-12 md:w-1/2">
        <div className="md:col-span-8 flex justify-center items-center md:items-start flex-col p-4">
          <h3 className="text-2xl md:text-4xl font-bold py-4 px-2">Sr. Frontend Engineer</h3>
          <p className="text-lg">A passionate frontend developer based in Thane, India. I build fast, highly scalable, performant & responsive web apps.</p>
          </div>
        <div className="md:col-span-4">
          <img src="./aadesh-kulkarni.png" alt="aadesh kulkarni" className="w-64 h-64 rounded-full border border-black border-spacing-4" />
        </div>
      </div>
    </div>
  );
};

export default Body;
