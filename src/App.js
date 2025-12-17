import { Routes, Route } from 'react-router-dom';
import AccueilPage from './pages/AccueilPage';
import AProposPage from './pages/AProposPage';
import ProjetsPage from './pages/ProjetsPage';
import CompetencesPage from './pages/CompetencesPage';
import SoftSkillsPage from './pages/SoftSkillsPage';
import ContactPage from './pages/ContactPage';

import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <main>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/apropos" element={<AProposPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/softskills" element={<SoftSkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
