import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-white/10 backdrop-blur-md border-b border-gray-200/20">
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      {/* Navigation Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur br-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'
          }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to="/">Home</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to="/movies">Movies</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to="/">Theaters</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to="/">Releases</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to="/favorite">Favorites</Link>
      </div>

      {/* Right Side: Search + Auth */}
      <div className="flex items-center gap-4 md:gap-6">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />

        {/* ❌ REMOVED: Incorrect Clerk MenuItems & UserButton.Action structure */}
        {/* 🔁 CHANGED: Corrected auth block */}
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <div className="flex items-center gap-4">
            {/* 🔁 CHANGED: My Bookings button added */}
            <button
              onClick={() => navigate('/my-bookings')}
              className="px-4 py-1 sm:px-6 sm:py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium"
            >
              My Bookings
            </button>
            {/* 🔁 CHANGED: Proper usage of Clerk's UserButton */}
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar
