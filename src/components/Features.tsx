import { Link } from "react-router-dom";
import imgAP from "../assets/imgAN.png";
import imgGC from "../assets/imgLPC.jpg";
import imgTDB from "../assets/imgTDB.png";
import imgTransparence from "../assets/imgMF6.jpg";

const Features = () => {
  const features = [
    {
      image: imgAP,
      title: "Action Parlementaire",
      description: "Travail législatif et représentation des citoyens du 5e Arrondissement à l'Assemblée Nationale",
      link: "/actualites",
      linkText: "Voir les actions"
    },
    {
      image: imgGC,
      title: "Engagement Communautaire",
      description: "Développement local et accompagnement des projets citoyens dans la circonscription",
      link: "/engagement",
      linkText: "Découvrir"
    },
    {
      image: imgTDB,
      title: "Plateforme Tchad d'Abord",
      description: "Coordination nationale pour un développement durable et une vision commune du Tchad",
      link: "/engagement",
      linkText: "En savoir plus"
    },
    {
      image: imgTransparence,
      title: "Transparence",
      description: "Communication régulière sur les actions menées et les résultats obtenus",
      link: "/actualites",
      linkText: "Suivre l'actualité"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Domaines d'Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les principaux axes de mon action politique et citoyenne 
            pour le développement du 5e Arrondissement et du Tchad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
              {/* Image pleine largeur avec hauteur fixe */}
              <div className="w-full h-70 overflow-hidden flex-shrink-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Contenu texte avec espacement égal */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1 transition-colors duration-200 mt-auto"
                >
                  {feature.linkText}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/biographie">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Découvrir mon parcours complet
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;