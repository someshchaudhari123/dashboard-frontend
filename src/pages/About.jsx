// src/pages/About.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const About = () => {
  const profile = {
    name: "Somesh Chaudhari",
    email: "chaudharisomesh127@gmail.com",
    number: "+91 9145223212",
    github: "https://github.com/someshchaudhari123",
    linkedin: "https://www.linkedin.com/in/somesh-chaudhari-bb97471b6/",
    // image: "https://drive.google.com/drive/u/1/home", // ✅ Add your photo URL here later
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transition transform hover:scale-105">
        
        {/* Profile Image */}
        {profile.image ? (
          <img
            src={profile.image}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500 shadow-md flex items-center justify-center bg-gray-200 text-gray-500 text-xl font-bold">
            
          </div>
        )}

        {/* Name */}
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          {profile.name}
        </h1>
        <p className="text-gray-500 mb-6">Full Stack Developer</p>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-indigo-500 text-lg" />
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-700 hover:text-indigo-600"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-indigo-500 text-lg" />
            <a
              href={`tel:${profile.number}`}
              className="text-gray-700 hover:text-indigo-600"
            >
              {profile.number}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-20">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub"
            className="text-gray-700 hover:text-black text-5xl transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Connect on LinkedIn"
            className="text-gray-700 hover:text-blue-700 text-5xl transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
