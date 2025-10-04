import { Link } from "react-router-dom";
import engagementImage from "../assets/logoTchadDAbord.jpg";

const Engagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* En-tête */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mon Engagement Politique</h1>
          <p className="text-xl">Plateforme "Tchad d'Abord" - Vision et Actions</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src={engagementImage} 
              alt="Engagement politique"
              className="w-full h-200 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Plateforme "Tchad d'Abord"</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En tant que Coordinateur de la plateforme "Tchad d'Abord", je m'engage à promouvoir 
              une vision nationale axée sur le développement durable, la justice sociale et 
              l'unité nationale.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Notre Devise</h3>
              <p className="text-blue-900 italic">"UNION-PAIX-PARTIE"</p>
            </div>
          </div>
        </div>

        {/* Objectifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Local</h3>
            <p className="text-gray-700">
              Amélioration des infrastructures, accès aux services de base et création d'emplois 
              dans le 5e Arrondissement.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Éducation et Formation</h3>
            <p className="text-gray-700">
              Promotion de l'éducation pour tous et développement des compétences professionnelles 
              des jeunes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Santé Publique</h3>
            <p className="text-gray-700">
              Renforcement du système de santé local et amélioration de l'accès aux soins pour 
              toutes les couches sociales.
            </p>
          </div>
        </div>

        {/* Actions concrètes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions Concrètes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Projets d'Infrastructure</h4>
                <p className="text-gray-700">Réhabilitation des routes et construction d'écoles dans le 5e Arrondissement</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-600 font-bold">02</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Programmes Jeunesse</h4>
                <p className="text-gray-700">Formation professionnelle et insertion des jeunes diplômés</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <span className="text-yellow-600 font-bold">03</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Initiatives Sociales</h4>
                <p className="text-gray-700">Soutien aux femmes entrepreneures et aux personnes vulnérables</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <span className="text-red-600 font-bold">04</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Dialogue Citoyen</h4>
                <p className="text-gray-700">Organisation régulière de rencontres avec la population</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/actualites">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Voir mes actualités récentes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Engagement;