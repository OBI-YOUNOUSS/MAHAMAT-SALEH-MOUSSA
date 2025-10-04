import { Link } from "react-router-dom";

interface Avis {
  id: number;
  titre: string;
  date: string;
  extrait: string;
  categorie: 'analyse' | 'tribune' | 'reflexion';
  tempsLecture: string;
}

const AvisReflexions = () => {
  const avisReflexions: Avis[] = [
    {
      id: 1,
      titre: "L'importance du développement local dans la politique nationale",
      date: "18 Décembre 2024",
      extrait: "Dans cette analyse, j'aborde les défis du développement local et comment une approche décentralisée peut bénéficier à l'ensemble du pays...",
      categorie: 'analyse',
      tempsLecture: "5 min"
    },
    {
      id: 2,
      titre: "Jeunesse tchadienne : défis et opportunités pour l'avenir",
      date: "12 Décembre 2024",
      extrait: "Réflexion sur l'importance d'investir dans l'éducation et la formation professionnelle des jeunes pour bâtir un Tchad prospère...",
      categorie: 'tribune',
      tempsLecture: "4 min"
    },
    {
      id: 3,
      titre: "La démocratie participative : un pilier pour notre nation",
      date: "8 Décembre 2024",
      extrait: "Comment impliquer davantage les citoyens dans les processus décisionnels pour renforcer notre démocratie et la transparence...",
      categorie: 'reflexion',
      tempsLecture: "6 min"
    },
    {
      id: 4,
      titre: "Environnement et développement durable : trouver l'équilibre",
      date: "3 Décembre 2024",
      extrait: "Analyse des enjeux environnementaux au Tchad et des stratégies pour concilier développement économique et protection de l'environnement...",
      categorie: 'analyse',
      tempsLecture: "7 min"
    }
  ];

  const getCategorieColor = (categorie: string) => {
    const colors = {
      'analyse': 'bg-blue-100 text-blue-800',
      'tribune': 'bg-green-100 text-green-800',
      'reflexion': 'bg-purple-100 text-purple-800'
    };
    return colors[categorie as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategorieLabel = (categorie: string) => {
    const labels = {
      'analyse': 'Analyse Politique',
      'tribune': 'Tribune Libre',
      'reflexion': 'Réflexion'
    };
    return labels[categorie as keyof typeof labels] || categorie;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avis & Réflexions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analyses, tribunes et réflexions sur les enjeux politiques, sociaux et économiques du Tchad
          </p>
        </div>

        {/* Grille des avis et réflexions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {avisReflexions.map((avis) => (
            <article key={avis.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group border border-gray-100">
              <div className="p-6">
                {/* En-tête de l'article */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategorieColor(avis.categorie)}`}>
                    {getCategorieLabel(avis.categorie)}
                  </span>
                  <span className="text-sm text-gray-500">{avis.tempsLecture}</span>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300 line-clamp-2">
                  {avis.titre}
                </h3>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {avis.date}
                </div>

                {/* Extrait */}
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {avis.extrait}
                </p>

                {/* Bouton Lire la suite */}
                <Link 
  to={`/reflexions/${avis.id}`}
  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300 group/read"
  onClick={(e) => {
    e.preventDefault();
    // Temporairement désactivé jusqu'à ce que les pages soient créées
    alert('Cette fonctionnalité sera bientôt disponible !');
  }}
>
                  Lire la réflexion complète
                  <svg className="w-4 h-4 ml-2 transform group-hover/read:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center border-l-4 border-blue-500">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-4">
            "La véritable politique est celle qui place l'humain au centre de ses préoccupations et qui œuvre pour le bien commun."
          </blockquote>
          <cite className="text-gray-600 font-semibold">- Mahamat Saleh Moussa</cite>
        </div>

        {/* Bouton Voir toutes les réflexions - Version temporaire */}
<div className="text-center">
  <button 
    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
    onClick={() => alert('Page des réflexions en cours de développement !')}
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
    Découvrir toutes mes réflexions
  </button>
</div>

        {/* Section newsletter spéciale pour les réflexions */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-12 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Recevez mes analyses</h3>
            <p className="mb-6 opacity-90">
              Inscrivez-vous pour recevoir mes dernières réflexions et analyses politiques directement dans votre boîte email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 whitespace-nowrap shadow-lg">
                S'inscrire
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              Désinscription possible à tout moment • Respect de votre vie privée
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisReflexions;