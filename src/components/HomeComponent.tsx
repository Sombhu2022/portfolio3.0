"use client";
import React, { useState } from "react";
import Image from "next/image";
import dp from "../images/my_photo1.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BackgroundLines } from "./ui/background-line";

type Position = {
  top? : string;
  left? : string;
  bottom? : any ;
  right? : any ;
};

type PositionsState = {
  linkedin: Position;
  github: Position;
  twitter: Position;
  instagram: Position;
};

const HomeComponent: React.FC = () => {
  const [positions, setPositions] = useState<PositionsState>({
    linkedin: { top: "13%", left: "25%" },
    github: { bottom: "12%", left: "35%" },
    twitter: { top: "7%", right: "25%" },
    instagram: { bottom: "18%", right: "30%" },
  });

  const [dragging, setDragging] = useState<null | keyof PositionsState>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Start the drag operation
  const handleMouseDown = (icon: keyof PositionsState, e: React.MouseEvent) => {
    setDragging(icon);
    // Calculate offset between mouse position and icon position
    setOffset({
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top,
    });
  };

  // Handle mouse move (dragging the icon)
  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const newLeft = e.clientX - offset.x;
      const newTop = e.clientY - offset.y;
      
      setPositions((prev) => ({
        ...prev,
        [dragging]: {
          left: `${Math.min(Math.max(newLeft / window.innerWidth * 100, 5), 95)}%`,
          top: `${Math.min(Math.max(newTop / window.innerHeight * 100, 5), 95)}%`,
        },
      }));
    }
  };

  // End the drag operation
  const handleMouseUp = () => {
    setDragging(null);
  };

  // Add mousemove and mouseup event listeners when dragging
  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <BackgroundLines className="h-screen w-screen flex gap-5 flex-col items-center justify-center bg-transparent">
      <section className="z-10 h-full w-full flex gap-5 flex-col items-center justify-center bg-transparent relative">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/sombhu-das/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-blue-600 text-2xl hover:text-blue-800 transition-all cursor-move"
          style={positions.linkedin}
          onMouseDown={(e) => handleMouseDown("linkedin", e)}
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Sombhu2022"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-gray-500 text-2xl hover:text-gray-300 transition-all cursor-move"
          style={positions.github}
          onMouseDown={(e) => handleMouseDown("github", e)}
        >
          <FaGithub />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com/sombhudas"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-blue-400 text-2xl hover:text-blue-600 transition-all cursor-move"
          style={positions.twitter}
          onMouseDown={(e) => handleMouseDown("twitter", e)}
        >
          <FaTwitter />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://instagram.com/sombhudas"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-pink-500 text-2xl hover:text-pink-700 transition-all cursor-move"
          style={positions.instagram}
          onMouseDown={(e) => handleMouseDown("instagram", e)}
        >
          <FaInstagram />
        </a>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src={dp}
              alt="Sombhu Das"
              layout="responsive"
              width={224}
              height={224}
              className="object-cover"
            />
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Sombhu Das</h1>
          <p className="text-lg text-gray-700">Full Stack Developer</p>
        </div>
      </section>
    </BackgroundLines>
  );
};

export default HomeComponent;
