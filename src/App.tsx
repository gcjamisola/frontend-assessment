import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import ExerciseOne from './components/exercise-1';
import ExerciseTwo from './components/exercise-2';

import './assets/scss/main.scss'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ExerciseOne />} />
      <Route path='exercise-1' element={<ExerciseOne />} />
      <Route path='exercise-2' element={<ExerciseTwo />} />
    </Routes>

    <nav className="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <Link to="/exercise-1">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Exercise#1</a>
              </li>
            </Link>
            <Link to="/exercise-2">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Exercise#2</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>


  </BrowserRouter>
);

export default App
