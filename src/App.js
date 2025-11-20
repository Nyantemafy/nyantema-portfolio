import { useState } from 'react';
import AccueilPage from './pages/AccueilPage';
import AProposPage from './pages/AProposPage';
import ProjetsPage from './pages/ProjetsPage';
import CompetencesPage from './pages/CompetencesPage';
import SoftSkillsPage from './pages/SoftSkillsPage';
import ContactPage from './pages/ContactPage';

import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Accueil');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'Accueil':
        return <AccueilPage />;
      case 'À propos':
        return <AProposPage />;
      case 'Projets':
        return <ProjetsPage />;
      case 'Compétences':
        return <CompetencesPage />;
      case 'Soft Skills':
        return <SoftSkillsPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <AccueilPage />;
    }
  };
  
  return (
    <div className="min-h-screen">
      <TopNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;