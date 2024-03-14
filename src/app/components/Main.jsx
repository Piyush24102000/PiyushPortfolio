"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Main = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className="p-4 sm:ml-64 ">
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div
            className={`max-w-6xl mx-auto px-8 py-16 lg:py-24 lg:flex lg:items-center ${
              isMounted
                ? "opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="lg:w-1/2 lg:pr-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Hi, I'm <span className="text-blue-600">Piyush</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="block text-xl font-semibold text-gray-800 mb-2">
                  Full Stack Wizard | IT Consultant & Architecture
                </span>
                <span className="block text-lg text-gray-700 mb-4">
                  Passionate about crafting elegant solutions and driving
                  innovation.
                </span>
                <span className="block text-lg text-gray-700">
                  Specialized in:
                </span>
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Full Stack Development</li>
                <li> Scalable Systems</li>
                <li>Cloud & Devops</li>
              </ul>
              <span className="block text-lg text-gray-700">
                Let's collaborate and bring your ideas to life!
                <br />
                Connect with me at{" "}
                <a
                  href="mailto:Piyush20001024@gmail.com"
                  className="text-blue-500 underline"
                >
                  Piyush20001024@gmail.com
                </a>
              </span>
              <div className="flex space-x-4 text-2xl mt-4">
                <Link
                  href="www.linkedin.com/in/piyushtale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/Piyush24102000?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="mailto:Piyush20001024@gmail.com"
                  className="text-red-600 hover:text-red-700"
                >
                  <FaEnvelope />
                </Link>
              </div>
            </div>
            <div
              className={`lg:w-1/2 mt-12 lg:mt-0 ${
                isMounted
                  ? "opacity-100 transition-opacity duration-1000 delay-500"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://via.placeholder.com/800x600"
                alt="Portfolio"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
