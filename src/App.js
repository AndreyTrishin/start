import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBlock from './HeaderBlock';
import CardPage from './CardPage';
import AboutPage from './AboutPage';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <HeaderBlock />
      <div className='body'>
        <Routes>
          <Route path='/' element={<CardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;