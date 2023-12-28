import React from 'react';
import './App.css';
import Header from './modules/header';
import Footer from './modules/footer';
import AllCharacters from './modules/characters/all';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="app-content">
      <AllCharacters />
     </div>
     <Footer />
    </div>
  );
}

export default App;
