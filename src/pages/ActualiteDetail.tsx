import { useParams, Link } from 'react-router-dom';
import { useActualites } from '../hooks/useActualites';

const ActualiteDetail = () => {
  const { id } = useParams();
  const { getActualiteById, getActualitesRecentes } = useActualites();
  
  const actualite = getActualiteById(Number(id));
  const actualitesSimilaires = getActualitesRecentes(3).filter(a => a.id !== Number(id));

  if (!actualite) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Actualité non trouvée</h1>
          <Link to="/actualites" className="text-blue-600 hover:text-blue-800">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link to="/actualites" className="hover:text-blue-600">Actualités</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{actualite.titre}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={actualite.image} 
              alt={actualite.titre}
              className="w-full h-70 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{actualite.date}</span>
                <span className="font-medium">Par {actualite.auteur}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {actualite.titre}
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  {actualite.description}
                </p>
                <p>Contenu détaillé de l'actualité à venir...</p>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actualités récentes</h3>
              <div className="space-y-4">
                {actualitesSimilaires.map(actu => (
                  <Link 
                    key={actu.id} 
                    to={`/actualites/${actu.id}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition duration-300 border-b border-gray-100"
                  >
                    <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1">
                      {actu.titre}
                    </h4>
                    <p className="text-sm text-gray-600">{actu.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ActualiteDetail;