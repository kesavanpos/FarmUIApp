import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Footer from './components/Footer';
import FarmRouter from './router';



function App() {
  return (
    <div className="App">
      <Header/>
       <FarmRouter/>
      <Footer/>

    </div>
  );
}

export default App;
