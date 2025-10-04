import { Link } from "react-router-dom";

const Reflexions = () => {
  const toutesLesReflexions = [
    {
      id: 1,
      titre: "L'importance du développement local dans la politique nationale",
      date: "18 Décembre 2024",
      extrait: "Dans cette analyse, j'aborde les défis du développement local et comment une approche décentralisée peut bénéficier à l'ensemble du pays...",
      categorie: 'analyse',
      tempsLecture: "5 min",
      image: "/assets/analyse.jpg"
    },
    {
      id: 2,
      titre: "Jeunesse tchadienne : défis et opportunités pour l'avenir",
      date: "12 Décembre 2024",
      extrait: "Réflexion sur l'importance d'investir dans l'éducation et la formation professionnelle des jeunes pour bâtir un Tchad prospère...",
      categorie: 'tribune',
      tempsLecture: "4 min",
      image: "/assets/jeunesse.jpg"
    },
    {
      id: 3,
      titre: "La démocratie participative : un pilier pour notre nation",
      date: "8 Décembre 2024",
      extrait: "Comment impliquer davantage les citoyens dans les processus décisionnels pour renforcer notre démocratie et la transparence...",
      categorie: 'reflexion',
      tempsLecture: "6 min",
      image: "/assets/democratie.jpg"
    },
    {
      id: 4,
      titre: "Environnement et développement durable : trouver l'équilibre",
      date: "3 Décembre 2024",
      extrait: "Analyse des enjeux environnementaux au Tchad et des stratégies pour concilier développement économique et protection de l'environnement...",
      categorie: 'analyse',
      tempsLecture: "7 min",
      image: "/assets/environnement.jpg"
    },
    {
      id: 5,
      titre: "Le rôle de la femme dans le développement économique",
      date: "28 Novembre 2024",
      extrait: "Analyse de la contribution essentielle des femmes à l'économie tchadienne et des mesures pour renforcer leur autonomisation...",
      categorie: 'analyse',
      tempsLecture: "6 min",
      image: "/assets/femmes.jpg"
    },
    {
      id: 6,
      titre: "Santé publique : enjeux et perspectives pour le Tchad",
      date: "22 Novembre 2024",
      extrait: "Réflexion sur les défis du système de santé tchadien et les pistes d'amélioration pour une couverture sanitaire universelle...",
      categorie: 'reflexion',
      tempsLecture: "8 min",
      image: "/assets/sante.jpg"
    }
  ];

  const getCategorieColor = (categorie: string) => {
    const colors = {
      'analyse': 'bg-blue-100 text-blue-800 border-blue-200',
      'tribune': 'bg-green-100 text-green-800 border-green-200',
      'reflexion': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[categorie as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategorieLabel = (categorie: string) => {
    const labels = {
      'analyse': 'Analyse Politique',
      'tribune': 'Tribune Libre',
      'reflexion': 'Réflexion Personnelle'
    };
    return labels[categorie as keyof typeof labels] || categorie;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Avis & Réflexions</h1>
          <p className="text-xl mb-2">Analyses approfondies et tribunes sur les enjeux nationaux</p>
          <div className="text-blue-200">
            {toutesLesReflexions.length} publication(s)
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Toutes
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300">
            Analyses
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300">
            Tribunes
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300">
            Réflexions
          </button>
        </div>
      </div>

      {/* Grille des réflexions */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toutesLesReflexions.map((reflexion) => (
            <article key={reflexion.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group border border-gray-100">
              {reflexion.image && (
                <img 
                  src={reflexion.image} 
                  alt={reflexion.titre}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategorieColor(reflexion.categorie)}`}>
                    {getCategorieLabel(reflexion.categorie)}
                  </span>
                  <span className="text-sm text-gray-500">{reflexion.tempsLecture}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300 line-clamp-2">
                  {reflexion.titre}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {reflexion.date}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {reflexion.extrait}
                </p>

                <Link 
                  to={`/reflexions/${reflexion.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  Lire la suite
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflexions;