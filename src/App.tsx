import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Biographie from './pages/Biographie';
import Layout from './layouts/layout';
import Engagement from './pages/Engagement';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';
import ActualiteDetail from './pages/ActualiteDetail';
import Reflexions from './pages/Reflexions';
import ReflexionDetail from './pages/ReflexionDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<ActualiteDetail />} />
          <Route path="/reflexions" element={<Reflexions />} />
          <Route path="/reflexions/:id" element={<ReflexionDetail />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;