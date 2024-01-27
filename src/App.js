import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './NavBar';
import './App.css';
import { useState } from 'react';

function App() {
  const [vis, setVis] = useState(false);

  function onClickHandler() {
    setVis(vis === false ? true : false);
  }
  

  return (
    <>
      <header className='primary-header flex'>
        <div>
          <img src='./samplelogo.svg' alt='logo' className='logo'></img>
        </div>
        <button className='mobile-nav-toggle' onClick={onClickHandler} aria-controls='primary-navigation' aria-expanded={vis ? 'true' : 'false'}>
          <span className='sr-only'></span>
        </button>
        <NavBar vis={vis}/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
