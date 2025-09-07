import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80, // Offset to prevent navbar overlap
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 10;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 py-2 bg-transparent font-sans">
      <nav
        className={`
          w-full max-w-7xl mx-auto
          transition-all duration-500 ease-in-out
          px-6 md:px-10
          flex items-center justify-between
          shadow-sm backdrop-blur-md
          ${isScrolled
            ? 'bg-white/80 h-16 rounded-3xl shadow-lg'
            : 'bg-white/90 h-20'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 3v2m0 14v2m8.66-10h-2M6.34 12H4m13.07 5.07l-1.41-1.41M6.34 6.34l-1.41 1.41m12.73 0l1.41-1.41M6.34 17.66l1.41-1.41M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
          <span className="text-3xl font-extrabold text-gray-900 font-serif">
            PromptifyAI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-semibold text-gray-700 font-sans">
          <button
            onClick={() => handleNavClick('home')}
            className="hover:text-blue-600 transition duration-200"
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-blue-600 transition duration-200"
          >
            Tentang AI
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-blue-600 transition duration-200"
          >
            Kontak
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 w-full max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-b-2xl shadow-md p-4 flex flex-col space-y-3 md:hidden animate-fade-in-down">
          <button
            onClick={() => handleNavClick('home')}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Tentang AI
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Kontak
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
