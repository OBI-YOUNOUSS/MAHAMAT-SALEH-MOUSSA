import { useState, useRef } from "react";
import sale1 from "../assets/imgaAN.jpg";
import sale2 from "../assets/imgAN.png";
import sale3 from "../assets/imgParlmt1.jpg";
import sale4 from "../assets/imgMF6.jpg";
import sale5 from "../assets/imgMF4.jpg";
import sale6 from "../assets/imgMF5.jpg";
import sale7 from "../assets/imgMF1.jpg";
import sale8 from "../assets/imgEP.jpg";
import sale9 from "../assets/imgMF2.jpg";
import temoignageAN from "../assets/temoignageAN.mp4";
import projetBN from "../assets/projetBenety.mp4";

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const galleries = [
    {
      id: 1,
      title: "Activités Parlementaires",
      images: [sale1, sale2, sale3],
      description: "Séances à l'Assemblée Nationale et travaux législatifs"
    },
    {
      id: 2,
      title: "Rencontres Citoyennes",
      images: [sale4, sale5, sale6],
      description: "Échanges avec la population du 5e Arrondissement"
    },
    {
      id: 3,
      title: "Événements Publics",
      images: [sale7, sale8, sale9],
      description: "Participation aux événements communautaires et nationaux"
    }
  ];

  // Nouveau tableau pour les vidéos
  const videos = [
    {
      id: 1,
      title: "Intervention à l'Assemblée Nationale",
      videoUrl: temoignageAN,
      description: "Temoignage sur la qualité de connexion Internet au Tchad"
    },
    {
      id: 2,
      title: "Le Projet Benety Nadjat",
      videoUrl: projetBN,
      description: "Raison pour laquelle j'ai initié ce projet"
    },
    {
      id: 3,
      title: "Rencontre avec les jeunes",
      videoUrl: "https://example.com/video3.mp4",
      description: "Échanges avec la jeunesse du quartier"
    },
    {
      id: 4,
      title: "Interview média",
      videoUrl: "https://example.com/video4.mp4",
      description: "Entretien exclusif sur nos projets"
    }
  ];

  const handleVideoClick = (videoUrl: string, index: number) => {
    // Arrêter la lecture de la vidéo miniature
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* En-tête */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie Photos</h1>
          <p className="text-xl">Moments forts de mon engagement politique et citoyen</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{gallery.title}</h2>
              <p className="text-gray-600 text-lg">{gallery.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {gallery.images.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${gallery.title} ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      👁️ Voir
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Vidéos section - MODIFIÉE */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Vidéos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                {/* Vidéo visible directement */}
                <div className="aspect-video bg-black relative">
                  <video 
                    ref={el => { videoRefs.current[index] = el; }}
                    controls
                    muted
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Empêche le déclenchement du clic sur le parent
                    }}
                    src={video.videoUrl}
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                  
                  {/* Overlay pour ouvrir en grand */}
                  <div 
                    className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => handleVideoClick(video.videoUrl, index)}
                  >
                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 bg-black bg-opacity-50 rounded-full p-3">
                      🔍 Agrandir
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <button 
                    className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300"
                    onClick={() => handleVideoClick(video.videoUrl, index)}
                  >
                    Regarder en grand
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal pour image agrandie */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Agrandi"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Modal pour vidéos */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="max-w-4xl w-full bg-black rounded-lg overflow-hidden">
            <video 
              controls 
              autoPlay
              className="w-full aspect-video"
              src={selectedVideo}
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galerie;