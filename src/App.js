import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBlock from './modules/HeaderBlock';
import CardPage from './modules/CardPage';
import AboutPage from './modules/AboutPage';

import './App.css'
import AddCoursePage from './modules/AddCoursePage';
import AuthPage from './modules/AuthPage';
import UsersPage from './modules/UsersPage';
import CoursePage from './modules/CoursePage';
import ListCoursePage from './modules/ListCoursePage';

function App() {
  return (
    <BrowserRouter>
      <HeaderBlock />
      <div className='body'>
        <Routes>
          <Route path='/' element={<CardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/addCource" element={<AddCoursePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/courses/" element={<ListCoursePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;