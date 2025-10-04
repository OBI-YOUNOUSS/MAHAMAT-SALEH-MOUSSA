import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - Présentation */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mahamat Saleh Moussa</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Député du 5e Arrondissement de N'Djamena et Coordinateur de la plateforme 
              "Tchad d'Abord". Engagé pour le développement durable, la justice sociale 
              et l'émergence d'un Tchad prospère et uni.
            </p>
            <div className="flex space-x-4">
      {/* Facebook */}
      <a
        href="hhttps://www.facebook.com/moussa.mahamatsaleh.395"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition duration-300 text-white"
      >
        <FaFacebookF size={20} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/VOTRE_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-800 p-2 rounded transition duration-300 text-white"
      >
        <FaXTwitter size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/VOTRE_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded transition duration-300 text-white"
      >
        <FaInstagram size={20} />
      </a>

      {/* Email */}
      <a
        href="mailto:vous@exemple.com"
        className="bg-red-600 hover:bg-red-700 p-2 rounded transition duration-300 text-white"
      >
        <MdEmail size={20} />
      </a>
    </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/biographie" className="text-gray-300 hover:text-white transition duration-300">
                  Biographie
                </Link>
              </li>
              <li>
                <Link to="/engagement" className="text-gray-300 hover:text-white transition duration-300">
                  Engagement
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-white transition duration-300">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-300 hover:text-white transition duration-300">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">🏛️</span>
                <span>Assemblée Nationale du Tchad</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>contact@mahamatsalehmoussa.td</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>+235 XX XX XX XX</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>5e Arrondissement, N'Djamena</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Mahamat Saleh Moussa. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-300 hover:text-white text-sm transition duration-300">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-gray-300 hover:text-white text-sm transition duration-300">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;