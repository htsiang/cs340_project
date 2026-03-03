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
import UpdateSessionWithTreatments from './pages/UpdateSessionWithTreatments';

// Define the backend port and URL for API requests
// code credit from class template
// source URL: https://canvas.oregonstate.edu/courses/2031764/pages/exploration-web-application-technology-2?module_item_id=26243419
const backendPort = 13139;  // Use the port you assigned to the backend server, this would normally go in a .env file
const backendURL = `http://classwork.engr.oregonstate.edu:${backendPort}`;

function App() {
  const [sessionToEdit, setSessionToEdit] = useState();

  return (
    <>
      <div className='app'>
        <Router>
          <Navigation />
          <header>
            <h1>Shining Pearl Spa Database</h1>
          </header>
          <Routes>
            <Route path='/' element={<Trainers backendURL={backendURL}/>}></Route>
            <Route path='/pokemon' element={<Pokemon  backendURL={backendURL}/>}></Route>
            <Route path='/treatments' element={<Treatments  backendURL={backendURL}/>}></Route>
            <Route path='/sessions' element={<Sessions backendURL={backendURL} setSessionToEdit={setSessionToEdit}/>}></Route>
            <Route path='/sessionshastreatments' element={<SessionsHasTreatments backendURL={backendURL}/>}></Route>
            <Route path='/addSession' element={<AddSessionsHasTreatments backendURL={backendURL}/>}></Route>
            <Route path='/updateSession' element={<UpdateSessionWithTreatments backendURL={backendURL} sessionToEdit={sessionToEdit}/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
