import { Link } from "react-router-dom";
import { useActualites } from '../hooks/useActualites';

const Actualites = () => {
  const { toutesLesActualites, getActualitesRecentes } = useActualites();
  
  // Sur la page actualités, on montre toutes les actualités triées par date
  const actualitesTriees = getActualitesRecentes(toutesLesActualites.length);

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
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-xl">Toutes mes activités et engagements récents</p>
          <div className="mt-4 text-blue-200">
            {toutesLesActualites.length} actualité(s) publiée(s)
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Grille de toutes les actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {actualitesTriees.map((actu) => (
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

        {/* Pas de bouton "Voir tout" sur la page actualités */}
      </div>
    </div>
  );
};

export default Actualites;