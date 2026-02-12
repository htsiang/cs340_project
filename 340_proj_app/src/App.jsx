import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Trainers from './pages/Trainers';
import Pokemon from './pages/Pokemon';
import Treatments from './pages/Treatments';
import Sessions from './pages/Sessions';
import SessionsHasTreatments from './pages/SessionsHasTreatments';
import AddSessionsHasTreatments from './pages/AddSessionWithTreatments';

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navigation />
          <header>
            <h1>Shining Pearl Spa Database</h1>
          </header>
          <Routes>
            <Route path='/' element={<Trainers />}></Route>
            <Route path='/pokemon' element={<Pokemon />}></Route>
            <Route path='/treatments' element={<Treatments />}></Route>
            <Route path='/sessions' element={<Sessions />}></Route>
            <Route path='/sessionshastreatments' element={<SessionsHasTreatments/>}></Route>
            <Route path='/addSession' element={<AddSessionsHasTreatments/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
