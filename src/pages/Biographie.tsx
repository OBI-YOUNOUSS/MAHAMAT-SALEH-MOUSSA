import { Link } from "react-router-dom";
import portrait from "../assets/imgBIO.jpg";

const Biographie = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* En-tête */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Biographie</h1>
          <p className="text-xl">Parcours et engagements de Mahamat Saleh Moussa</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo et informations */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={portrait} 
                alt="Mahamat Saleh Moussa"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mahamat Saleh Moussa</h2>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Fonction:</span>
                    Député du 5e Arrondissement de N'Djamena
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Coordination:</span>
                    Plateforme "Tchad d'Abord"
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Engagement:</span>
                    Défense des droits citoyens
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Parcours Politique</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg">2024 - Présent</h4>
                  <p className="text-gray-700">Coordinateur National de la Plateforme "Tchad d'Abord"</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg">2022 - Présent</h4>
                  <p className="text-gray-700">Député élu du 5e Arrondissement de N'Djamena</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-lg">2018 - 2022</h4>
                  <p className="text-gray-700">Conseiller Municipal - Engagement local et développement communautaire</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Vision et Missions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Promotion du développement local durable
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Défense des intérêts des citoyens du 5e Arrondissement
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Renforcement de la démocratie participative
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Coordination des actions de la plateforme "Tchad d'Abord"
                </li>
              </ul>
            </div>

            <Link to="/engagement">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Découvrir mes engagements
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biographie;