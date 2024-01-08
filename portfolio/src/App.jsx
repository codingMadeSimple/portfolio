import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap';
import BootstrapNavBar from './Components/BootstrapNavBar';
import LandingPage from './Components/LandingPage';

function App() {

  return (
    <div>
      {/* <LandingPage/> */}
      <BootstrapNavBar/>
    </div>
  );
}

export default App;
