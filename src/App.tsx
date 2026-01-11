import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Kurs from './pages/Kurs';
import Prompty from './pages/Prompty';
import Warsztaty from './pages/Warsztaty';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/kurs" element={<Kurs />} />
        <Route path="/prompty" element={<Prompty />} />
        <Route path="/warsztaty" element={<Warsztaty />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  );
}

export default App;
