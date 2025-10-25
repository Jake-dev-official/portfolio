import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/jake-dev" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jerry-anane-0abbb1263/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {currentYear} JAKE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
