import React, { useState } from 'react'
import TargetCursor from './TargetCursor'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <nav className="w-full fixed z-50 backdrop-blur-sm  bg-white/20 flex items-center justify-between h-[10vh] shadow-2xl pr-8 md:px-10">
        <TargetCursor spinDuration={4} hideDefaultCursor={''} />

        {/* Logo visible left on mobile and desktop */}
        <div className='w-1/2   md:flex justify-start items-start h-full'>
            
          <img
            
            src="https://github.com/imdeeep/clubSite/blob/main/client/public/images/logo1.png?raw=true"
            alt="logo"
            className="h-15 hidden md:block md:h-full"
          />
        <img 
            src="https://abhyudaya-official-website.vercel.app/_next/static/media/abhyudaya-logo.1cdeec32.svg"
            alt="logo"
            className="h-full md:hidden md:h-full"
          />
        
     
          
        </div>
        
        {/* Desktop navLinks */}
        <div className="hidden md:flex gap-5 w-1/2 md:w-1/2 items-center justify-end h-full">
          <Link to={"/"} className='hover:text-2xl cursor-target text-lg hover:text-zinc-900 text-zinc-500 transition-all duration-200'>
          Home
          </Link>
          {[ 'About', 'Contact', 'Register'].map((link) => (
            <a
              key={link}

              href={`#${link.toLowerCase() } `}
              className="hover:text-2xl cursor-target text-lg hover:text-zinc-900 text-zinc-500 transition-all duration-200"
            >
              {link}
            </a>
          ))}
          <Link to={"/guidelines"} className='hover:text-2xl hidden cursor-target text-lg hover:text-zinc-900 text-zinc-500 transition-all duration-200'>
          Guidlines
          </Link>
          <Link to={"/phases"} className='hover:text-2xl cursor-target text-lg hover:text-zinc-900 text-zinc-500 transition-all duration-200'>
          Phases
          </Link>
        </div>

        {/* Hamburger icon on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 flex flex-col justify-between items-center z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-zinc-700 transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-3' : ''
            }`}
          />
          <span
            className={`block h-1 w-full bg-zinc-700 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-1 w-full bg-zinc-700 transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-3' : ''
            }`}
          />
        </button>
      </nav>

      {/* Overlay menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:hidden bg-white bg-opacity-30 backdrop-blur-md transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         
        <nav className="flex flex-col justify-center items-center h-full gap-10">
         <Link to={'/'} className="text-3xl text-zinc-800 hover:text-zinc-900  transition-colors duration-200">
          Home
          </Link>
          {[ 'About', 'Contact', 'Register'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-zinc-800 hover:text-zinc-900  transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <Link to={'/phases'} className="text-3xl text-zinc-800 hover:text-zinc-900  transition-colors duration-200">
          Phases
          </Link>
          <Link to={'/guidelines'} className="text-3xl hidden  text-zinc-800 hover:text-zinc-900  transition-colors duration-200">
          Guidelines
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
