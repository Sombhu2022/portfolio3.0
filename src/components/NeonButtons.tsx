"use client";
import React, { useState, MouseEvent } from "react";
import { FaFileDownload, FaEnvelope } from "react-icons/fa";

const NeonButtons: React.FC = () => {
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="button_container flex gap-5 items-center">
      {/* Resume Button */}
      <a
        href="/Sombhu Resume.pdf"
        download="Sombhu_Das_Resume.pdf"
        className="relative px-5 py-3 flex items-center gap-2 border border-gray-800 rounded-full transition-all overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            top: hoverPosition.y,
            left: hoverPosition.x,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
        <FaFileDownload className="text-blue-500 relative z-10" />
        <span className="relative z-10">Resume</span>
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        className="relative px-5 py-3 flex items-center gap-2 border rounded-full border-gray-800 transition-all overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            top: hoverPosition.y,
            left: hoverPosition.x,
            transform: "translate(-50%, -50%)",
          }}
        ></span>
        <FaEnvelope className="text-purple-500 relative z-10" />
        <span className="relative z-10">Contact</span>
      </a>
    </div>
  );
};

export default NeonButtons;