import Hero from '../components/Hero';
import Features from '../components/Features';
import Temoignages from '../components/Temoignages';
import ActualitesSection from '../components/ActualitesSection';
import AvisReflexions from '../components/AvisReflexions';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ActualitesSection 
        titre="Dernières Actualités"
        sousTitre="Suivez mes récentes activités parlementaires et engagements citoyens"
        maxItems={3}
        showViewAll={true}
      />
      <AvisReflexions />
      <Temoignages />
    </>
  );
};

export default Home;