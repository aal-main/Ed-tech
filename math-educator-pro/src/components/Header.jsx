import { useState } from 'react'
import logo from '/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="MainKnowledge logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-800">
              Main<span className="text-blue-600">Knowledge</span>
            </span>
          </a>

          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          <ul className={`md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
            <li><button onClick={() => scrollToSection('home')} className="block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-colors text-lg">Home</button></li>
            <li><button onClick={() => scrollToSection('courses')} className="block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-colors text-lg">Courses</button></li>
            <li><button onClick={() => scrollToSection('about')} className="block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-colors text-lg">About</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-colors text-lg">Contact</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header