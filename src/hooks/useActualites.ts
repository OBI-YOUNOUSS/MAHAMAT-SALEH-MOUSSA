import { useState } from 'react';
import imgS1 from '../assets/imgSalirité.jpg';
import imgS2 from '../assets/imgAT2.jpg';
import imgS3 from '../assets/imgaAN.jpg';

export interface Actualite {
  id: number;
  titre: string;
  date: string;
  image: string;
  description: string;
  categorie: string;
  auteur: string;
}

// DONNÉES CENTRALISÉES - Les mêmes pour tout le site
const toutesLesActualites: Actualite[] = [
  {
    id: 1,
    titre: "Lancement de l'opération d’assainissement dans le 5e Arrondissement",
    date: "15 Décembre 2024",
    image: imgS1,
    description: "Ce matin, nous avons pris part, aux côtés des autorités municipales, à une opération d’assainissement visant à redonner à ce lieu de repos toute sa dignité, son caractère sacré et mémoriel.Nous saluons la mobilisation massive de la population de N’Djamena, venue exprimer son soutien à la décision salutaire du Maréchal Mahamat Idriss Deby Itno, Président de la République, Chef de l’État, visant à protéger les lieux de culte et les cimetières. Nos remerciements vont également au Maire de la ville de N’Djamena et à notre Maire du 5ᵉ arrondissement. À la suite des engagements pris par le Maire de la ville, nous sommes convaincus que ce site historique et sacré sera prochainement clôturé.Respect et hommage à nos morts.",
    categorie: "Développement",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 2,
    titre: "Réunion de coordination de la plateforme Tchad d'Abord",
    date: "10 Décembre 2024",
    image: imgS2,
    description: "La 𝗣𝗹𝗮𝘁𝗲𝗳𝗼𝗿𝗺𝗲 𝗰𝗶𝘁𝗼𝘆𝗲𝗻𝗻𝗲 𝗟𝗲 𝗧𝗰𝗵𝗮𝗱 a entamé ce matin son 𝗔𝘀𝘀𝗲𝗺𝗯𝗹é𝗲 𝗚é𝗻é𝗿𝗮𝗹𝗲 𝗘𝘅𝘁𝗿𝗮𝗼𝗿𝗱𝗶𝗻𝗮𝗶𝗿𝗲 à l’Hôtel Radisson Blu de N'Djamena.  Avec la participation de 𝟳𝟭 𝗮𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗶𝗼𝗻𝘀 𝗱𝗲 𝗹𝗮 𝘀𝗼𝗰𝗶é𝘁é 𝗰𝗶�𝗼𝘆𝗲𝗻𝗻𝗲 𝗮𝗳𝗳𝗶𝗹𝗶é𝗲𝘀 et des 𝟭𝟲 𝗰𝗲𝗹𝗹𝘂𝗹𝗲𝘀 𝗽𝗿𝗼𝘃𝗶𝗻𝗰𝗶𝗮𝗹𝗲𝘀 𝗶𝗺𝗽𝗹𝗮𝗻𝘁é𝗲𝘀 à 𝗹’𝗶𝗻𝘁é𝗿𝗶𝗲𝘂𝗿 𝗱𝘂 𝗽𝗮𝘆𝘀, les membres débattront de la 𝗽𝗿𝗼𝗽𝗼𝘀𝗶𝘁𝗶𝗼𝗻 𝗲𝘁 𝘃𝗮𝗹𝗶𝗱𝗮𝘁𝗶𝗼𝗻 𝗱𝘂 𝗣𝗿𝗶𝘅 𝗾𝘂𝗶𝗻𝗾𝘂𝗲𝗻𝗻𝗮𝗹 \"𝗣𝗿𝗶𝘅 𝗱’𝗢𝗿, 𝗖𝗶𝘁𝗼𝘆𝗲𝗻 𝗠𝗼𝗱è𝗹𝗲\",ainsi que de la 𝗱é𝘀𝗶𝗴𝗻𝗮𝘁𝗶𝗼𝗻 𝗱𝘂 𝗿é𝗰𝗶𝗽𝗶𝗲𝗻𝗱𝗮𝗶𝗿𝗲 𝗱𝗲 𝗰𝗲𝘁𝘁𝗲 𝗱𝗶𝘀𝘁𝗶𝗻𝗰𝘁𝗶𝗼𝗻, dans le cadre d’un processus transparent.  ",
    categorie: "Politique",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 3,
    titre: "Séance de travail à l'Assemblée Nationale",
    date: "5 Décembre 2024",
    image: imgS3,
    description: "Participation active aux débats parlementaires.   Il est regrettable de voir certains parlementaires venir simplement valider leur présence pour les jetons, puis quitter la salle en plein débat, sous prétexte qu’ils s’opposent à la révision constitutionnelle.Pour impressionner qui ?Le peuple observe. Le sérieux ne se prouve pas par l'absence, mais par le courage d’affronter le débat. ( i  autre but 🥅)",
    categorie: "Parlement",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 4,
    titre: "Intervention à l'Assemblée Nationale sur le budget",
    date: "20 Décembre 2024",
    image: "/assets/imgMF6.jpg",
    description: "Discours important sur l'allocation des ressources pour le développement local.",
    categorie: "Parlement",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 5,
    titre: "Inauguration du nouveau centre de santé",
    date: "18 Décembre 2024",
    image: "/assets/im2.jpeg",
    description: "Cérémonie d'inauguration du centre de santé rénové dans le 5e Arrondissement.",
    categorie: "Développement",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 6,
    titre: "Rencontre avec les jeunes entrepreneurs",
    date: "12 Décembre 2024",
    image: "/assets/im3.jpeg",
    description: "Échanges fructueux sur les défis et opportunités pour la jeunesse entrepreneurale.",
    categorie: "Jeunesse",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 7,
    titre: "Rencontre avec les jeunes entrepreneurs",
    date: "12 Décembre 2024",
    image: "/assets/im3.jpeg",
    description: "Échanges fructueux sur les défis et opportunités pour la jeunesse entrepreneurale.",
    categorie: "Jeunesse",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 1,
    titre: "Rencontre avec les jeunes entrepreneurs",
    date: "12 Décembre 2024",
    image: "/assets/im3.jpeg",
    description: "Échanges fructueux sur les défis et opportunités pour la jeunesse entrepreneurale.",
    categorie: "Jeunesse",
    auteur: "Mahamat Saleh Moussa"
  },
  {
    id: 1,
    titre: "Lancement du projet de développement communautaire",
    date: "15 Décembre 2024",
    image: "/assets/imgLPC.jpg",
    description: "Lancement officiel du programme de développement des infrastructures dans le 5e Arrondissement.",
    categorie: "Développement",
    auteur: "Mahamat Saleh Moussa"
  },
];

export const useActualites = () => {
  const [actualites] = useState<Actualite[]>(toutesLesActualites);

  // Récupère les actualités les plus récentes (triées par date)
  const getActualitesRecentes = (limit: number = 3) => {
    return [...actualites]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  // Récupère une actualité par son ID
  const getActualiteById = (id: number) => {
    return actualites.find(actu => actu.id === id);
  };

  return {
    toutesLesActualites: actualites,
    getActualitesRecentes,
    getActualiteById
  };
};