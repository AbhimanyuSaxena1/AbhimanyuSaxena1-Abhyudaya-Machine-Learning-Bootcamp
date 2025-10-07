import React from 'react';
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ id }) => {
  return (
    <footer id={id} className="w-full bg-gray-900 py-8 px-5 md:px-10 border-t border-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-[pankh] text-2xl text-white">Machine Learning Bootcamp</h3>
          <p className="max-w-xs">
            Dive deep into ML concepts and projects with us. Stay curious, keep learning!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg text-white">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-blue-400">
            <a href="#home" className="hover:underline hover:text-blue-600">Home</a>
            <a href="#about" className="hover:underline hover:text-blue-600">About</a>
            <a href="#how-it-works" className="hover:underline hover:text-blue-600">How it Works</a>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg text-white">Contact</h4>
          <p>Email: abhyudayacodingclub@gmail.com</p>
          {/* <p>Phone: +1 (555) 123-4567</p> */}
          <div className="flex gap-4 mt-2">
            {/* X (formerly Twitter) */}
            <a href="https://x.com/abhyudaya_club" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FaXTwitter  className='h-6 w-6'/>


            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/abhyudayacodingclub/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.5A4 4 0 003.5 7.5v9a4 4 0 004 4h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.8 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/abhyudaya-coding-club/?viewAsMember=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.66h-3.55V9h3.41v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.57 0 4.22 2.35 4.22 5.41v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.11 20.45H3.57V9h3.54v11.45zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.45A1.77 1.77 0 001.77 24h20.45A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
       Made by <a href="https://www.instagram.com/saxena_abi/" className="text-blue-400 hover:text-blue-600">Abhimanyu Saxena</a>
      </div>
    </footer>
  );
};

export default Footer;
