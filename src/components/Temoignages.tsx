const Temoignages = () => {
  const temoignages = [
    {
      id: 1,
      nom: "Fatimé Abderamane",
      role: "Commerçante, 5e Arrondissement",
      texte: "Grâce à l'action de M. Moussa, notre marché a été réhabilité. Il écoute vraiment les préoccupations des citoyens.",
      avatar: "👩"
    },
    {
      id: 2,
      nom: "Hassan Mahamat",
      role: "Jeune entrepreneur",
      texte: "Le programme d'appui aux jeunes entrepreneurs a changé ma vie. Merci pour cet engagement concret !",
      avatar: "👨"
    },
    {
      id: 3,
      nom: "Dr. Amina Ousmane",
      role: "Médecin chef de centre",
      texte: "Son soutien à notre centre de santé a permis d'améliorer l'accès aux soins pour des milliers de personnes.",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages des Citoyens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que disent les habitants du 5e Arrondissement sur mon action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((temoignage) => (
            <div key={temoignage.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4 text-center">{temoignage.avatar}</div>
              <div className="text-yellow-400 text-center mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 text-lg italic mb-6 text-center">
                "{temoignage.texte}"
              </p>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">{temoignage.nom}</h4>
                <p className="text-gray-600 text-sm">{temoignage.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Voir plus de témoignages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;