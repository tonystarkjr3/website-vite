// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link to="/" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>

    <main className="flex-grow container mx-auto p-6">
      {children}
    </main>

    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anupam-pokharel-onebuddingnerd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tonystarkjr3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          {/* Contact (internal) */}
          <Link
            to="/contact"
            aria-label="Contact"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <HiOutlineMail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
