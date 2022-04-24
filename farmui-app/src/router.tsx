import {Routes,Route} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddPlants from './pages/AddPlants';
import EditPlanet from './pages/EditPlanet';
import PlantsList from './pages/PlantsList';
import PlantDetail from './pages/PlantDetail';

const FarmRouter = () =>{
    return(
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/addplant" element={<AddPlants />}/>

            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/editplanet" element={<EditPlanet />}/>
            <Route path="/plantslist" element={<PlantsList />}/>

            <Route path="/plantsdetail" element={<PlantDetail />}/>

        </Routes>
    )
}

export default FarmRouter;