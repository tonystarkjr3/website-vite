import React from 'react';
import { Link } from 'react-router-dom';

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

    <footer className="bg-gray-200 text-center p-4">
      © {new Date().getFullYear()} My Portfolio
    </footer>
  </div>
);

export default Layout;
