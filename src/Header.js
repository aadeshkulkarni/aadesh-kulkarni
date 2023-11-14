import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [active, setActiveTab] = useState("/");
  const navigate = useNavigate();
  const onTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab);
    setShow(false);
  };
  return (
    <div className="fixed bg-white top-0 left-0 w-screen h-[100px] border-b border-gray-100 flex justify-between items-center px-4 py-2">
      <div onClick={() => setShow(!show)} className="md:hidden absolute top-4 right-4 text-5xl">
        ⚟
      </div>
      <div className="text-2xl font-bold">Aadesh Kulkarni</div>
      {show && (
        <div className="w-screen h-screen bg-white absolute top-0 left-0 flex justify-center items-center">
          <div onClick={() => setShow(!show)} className="absolute text-5xl top-4 right-4">
            ⤫
          </div>
          <ul className="list-none text-2xl">
            <li className={`cursor-pointer p-4 border-b border-gray-100 ${active === "/" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/")}>
              Home
            </li>
            <li className={`cursor-pointer p-4 border-b border-gray-100 ${active === "/about" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/about")}>
              About
            </li>
            <li className={`cursor-pointer p-4 border-b border-gray-100 ${active === "/projects" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/projects")}>
              Projects
            </li>
            <li className={`cursor-pointer p-4 border-b border-gray-100 ${active === "/contact" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/contact")}>
              Contact
            </li>
          </ul>
        </div>
      )}
      <ul className="hidden md:flex list-none">
        <li className={`cursor-pointer px-4 font-bold ${active === "/" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/")}>
          Home
        </li>
        <li className={`cursor-pointer px-4 font-bold ${active === "/about" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/about")}>
          About
        </li>
        <li className={`cursor-pointer px-4 font-bold ${active === "/projects" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/projects")}>
          Projects
        </li>
        <li className={`cursor-pointer px-4 font-bold ${active === "/contact" ? "text-blue-600" : "text-gray-800"}`} onClick={() => onTabChange("/contact")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
