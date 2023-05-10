import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Home } from './sheets/homeS/home';
import { Base } from './sheets/baseS/base';
import { Upper } from './sheets/upperS/upper';
import { Statistic } from './sheets/statisticS/statistic';
import { Logic } from './sheets/logicS/logic';
import { Footer } from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/base' element={<Base />} />
        <Route path="/upper" element={<Upper />} />
        <Route path="/statistics" element={<Statistic />} />
        <Route path="/logics" element={<Logic />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
