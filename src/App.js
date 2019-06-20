import React from 'react';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import './style/common.scss'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
