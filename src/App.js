import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
