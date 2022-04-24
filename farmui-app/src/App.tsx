import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddPlants from './pages/AddPlants';
import EditPlanet from './pages/EditPlanet';
import PlantsList from './pages/PlantsList';
import PlantDetail from './pages/PlantDetail';



function App() {
  return (
    <div className="App">
      <Header/>
        <Login/>
        <Register/>
        <Dashboard/>
        <AddPlants/>
        <EditPlanet/>
        <PlantsList/>
        <PlantDetail/>
      <Footer/>

    </div>
  );
}

export default App;
