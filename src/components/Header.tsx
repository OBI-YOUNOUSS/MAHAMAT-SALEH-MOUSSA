import { useState } from "react"
import { Link } from 'react-router-dom';

function Header() {
    const [nav, setNav] = useState(false)
    
    const handleLinkClick = () => {
        setNav(false) // Ferme le menu après un clic
    }

    return (
      <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center group">
            <div>
              <h2 className="font-bold text-blue-800 group-hover:text-flag-blue transition-colors">Mahamat Saleh Moussa</h2>
              <p className="text-xs text-blue-600">Député du 5e arrondissement <br /> Coordinateur de Tchad D'abord</p>
            </div>
          </Link>
          
          {/* Menu mobile amélioré */}
          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-50 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-4">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  aria-current="page"
                  onClick={handleLinkClick}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/biographie"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  onClick={handleLinkClick}
                >
                  Biographie
                </Link>
              </li>
              <li>
                <Link
                  to="/engagement"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  onClick={handleLinkClick}
                >
                  Engagement
                </Link>
              </li>
              <li>
                <Link
                  to="/actualites"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  onClick={handleLinkClick}
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  onClick={handleLinkClick}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-gray-800 rounded hover:bg-blue-50 md:bg-transparent md:text-black md:p-0 md:hover:bg-transparent md:hover:text-blue-700 transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bouton hamburger */}
          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header;