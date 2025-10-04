import { useParams, Link } from 'react-router-dom';

const ReflexionDetail = () => {
  useParams();

  // Données simulées - à remplacer par vos vraies données
  const reflexion = {
    id: 1,
    titre: "L'importance du développement local dans la politique nationale",
    date: "18 Décembre 2024",
    categorie: 'analyse',
    contenu: `
      <p>Dans le contexte actuel de notre nation, le développement local représente un enjeu majeur pour l'avenir du Tchad. Cette analyse vise à explorer les mécanismes par lesquels une approche décentralisée peut bénéficier à l'ensemble du pays.</p>
      
      <h2>Le contexte actuel</h2>
      <p>Le Tchad fait face à de nombreux défis en matière de développement. Les inégalités territoriales persistent, et certaines régions bénéficient moins des fruits de la croissance nationale.</p>
      
      <h2>Les avantages du développement local</h2>
      <p>Une politique de développement local bien conçue permet :</p>
      <ul>
        <li>Une meilleure adaptation aux besoins spécifiques de chaque territoire</li>
        <li>Une implication accrue des populations dans les processus décisionnels</li>
        <li>Une optimisation des ressources disponibles</li>
      </ul>
      
      <h2>Perspectives d'avenir</h2>
      <p>En tant que député du 5e Arrondissement, je m'engage à porter cette vision au sein de l'Assemblée Nationale...</p>
    `,
    auteur: "Mahamat Saleh Moussa",
    tempsLecture: "5 min"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link to="/reflexions" className="hover:text-blue-600">Réflexions</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{reflexion.titre}</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {/* En-tête */}
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Analyse Politique
              </span>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500">{reflexion.date}</span>
                <span className="text-gray-500">{reflexion.tempsLecture} de lecture</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {reflexion.titre}
            </h1>

            {/* Auteur */}
            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                MS
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{reflexion.auteur}</p>
                <p className="text-gray-600 text-sm">Député du 5e Arrondissement</p>
              </div>
            </div>

            {/* Contenu */}
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: reflexion.contenu }}
            />

            {/* Partage */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Partager cette réflexion :</p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
                  Twitter
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation entre articles */}
        <div className="mt-8 flex justify-between">
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Réflexion précédente
          </button>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Réflexion suivante →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReflexionDetail;