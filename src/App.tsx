import React from 'react';
import './App.css';
import Header from './modules/header';
import Footer from './modules/footer';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="app-content"></div>
     <Footer />
    </div>
  );
}

export default App;
