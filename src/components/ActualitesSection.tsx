import { Link } from "react-router-dom";
import { useActualites } from '../hooks/useActualites';

interface ActualitesSectionProps {
  titre?: string;
  sousTitre?: string;
  maxItems?: number;
  showViewAll?: boolean;
}

const ActualitesSection = ({ 
  titre = "Dernières Actualités",
  sousTitre = "Mes activités récentes en tant que député du 5e Arrondissement",
  maxItems = 3,
  showViewAll = true
}: ActualitesSectionProps) => {
  
  const { getActualitesRecentes, toutesLesActualites } = useActualites();
  
  // Récupère automatiquement les plus récentes
  const actualitesRecentes = getActualitesRecentes(maxItems);

  const getCategorieColor = (categorie: string) => {
    const colors: { [key: string]: string } = {
      'Développement': 'bg-blue-600',
      'Politique': 'bg-green-600',
      'Parlement': 'bg-purple-600',
      'Jeunesse': 'bg-yellow-600',
      'default': 'bg-gray-600'
    };
    return colors[categorie] || colors['default'];
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {titre}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {sousTitre}
          </p>
        </div>

        {/* Grille des actualités récentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {actualitesRecentes.map((actu) => (
            <article key={actu.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={actu.image} 
                  alt={actu.titre}
                  className="w-full h-70 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getCategorieColor(actu.categorie)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {actu.categorie}
                  </span>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{actu.date}</span>
                  <span className="font-medium">Par {actu.auteur}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300 line-clamp-2">
                  {actu.titre}
                </h3>
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {actu.description}
                </p>
                
                <Link 
                  to={`/actualites/${actu.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  Lire la suite
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bouton Voir tout */}
        {showViewAll && (
          <div className="text-center">
            <Link 
              to="/actualites"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Voir toutes les actualités ({toutesLesActualites.length})
            </Link>
          </div>
        )}

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Restez informé
            </h3>
            <p className="text-gray-600 mb-6">
              Recevez mes actualités et engagements directement par email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActualitesSection;