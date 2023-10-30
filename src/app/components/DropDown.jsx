"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import "./DropDown.css";
import Image from "next/image";
const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsOpen(false); // Ẩn dropdown sau khi nhấp vào một mục
      };

  const show = () => {
    if (theme === "light") {
      return <Image src="/sun.png" alt="light" width={16} height={16} />;
    } else if (theme === "dark") {
      return <Image src="/moon.png" alt="dark" width={16} height={16} />;
    } else if (theme === "system") {
      return <Image src="/contrast.png" alt="system" width={16} height={16} />;
    }
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="fixed bottom-3 right-3">
      <div className="relative inline-block text-left">
      <button
        className="btn flex items-center gap-1 text-black rounded-lg relative cursor-pointer bg-[#0A58CA] px-[12px] py-[8px]"
        onClick={handleToggle}
      >
        <span className=" inline-block w-[16px] h-[16px]">
          {show()}
        </span>
        <img
          src="/drop-down-arrow.png"
          alt="light"
          width={8}
          height={4}
          className={`inline-block invert-[94%] sepia-[100%] saturate-[26%] hue-rotate-[92deg] brightness-[107%] contrast-[106%] ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform transform`}
        />
      </button>
      <ul
        className={`dark:bg-[#212529] dark:text-white py-[16px] rounded-lg shadow-2xl list absolute top-[-160px] right-0 origin-bottom w-[158px] text-black bg-white text-left transition-transform transform ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <button 
        onClick={() => {
            setTheme('light'); 
            handleItemClick();
            }} className="flex w-[100%] h-[32px] items-center gap-2 p-[10px] hover:text-white hover:bg-blue-600">
          <img src="/sun.png" alt="light" width={16} height={16} className="inline-block" />
          <span>Sáng</span>
        </button>
        <button onClick={() => {
            setTheme('dark'); 
            handleItemClick();
            }} 
            className="flex w-[100%] h-[32px] items-center gap-2 p-[10px] hover:text-white hover:bg-blue-600">
          <img src="/moon.png" alt="dark" width={16} height={16} className="inline-block" />
          <span>Tối</span>
        </button>
        <button onClick={() => {
            setTheme('system'); 
            handleItemClick();
            }} 
            className="flex w-[100%] h-[32px] items-center gap-2 p-[10px] hover:text-white hover:bg-blue-600">
          <img src="/contrast.png" alt="system" width={16} height={16} className="inline-block" />
          <span>Tự động</span>
        </button>
      </ul>
    </div>
    </div>
  );
};

export default DropDown;
