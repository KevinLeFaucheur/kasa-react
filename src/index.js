import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';

import { Home } from './pages/Home/Home';
import { Lodging } from './pages/Lodging/Lodging';
import { About } from './pages/About/About'
import { Error } from './pages/Error/Error'
import { Header } from './components/Header/Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/lodging' element={<Lodging />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
