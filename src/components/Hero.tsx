import { Link } from "react-router-dom";
import myBackgroundImage from "../assets/mimg.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${myBackgroundImage})` }}
    >
      <div className="absolute inset-0 opacity-70" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Mahamat Saleh Moussa
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Député du 5e Arrondissement de N'Djamena
        </h2>
        
        <h3 className="text-xl md:text-2xl mb-6">
          Coordinateur de la Plateforme "Tchad d'Abord"
        </h3>

        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Engagé pour le développement durable, la justice sociale et l'émergence 
          d'un Tchad prospère et uni. Ensemble, bâtissons l'avenir de notre nation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/biographie">
            <button className="bg-white hover:bg-blue-100 text-blue-800 font-semibold px-8 py-3 rounded-full transition duration-300 text-lg">
              Découvrir mon parcours
            </button>
          </Link>
          <Link to="/engagement">
            <button className="bg-transparent hover:bg-white hover:text-blue-800 text-white font-semibold px-8 py-3 rounded-full border-2 border-white transition duration-300 text-lg">
              Mon engagement politique
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;