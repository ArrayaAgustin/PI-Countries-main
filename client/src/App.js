import React from "react";
import { Route, Routes} from 'react-router-dom'

import ActivityForm from "./components/ActivityForm";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import  Details  from "./components/Details.jsx";

function App() {
  return (
     <div>
      <NavBar></NavBar>
    <Routes>
    <Route exact path="/home" element={<Home />}/>
    <Route exact path="/home/:id" element={<Details />}/>
    <Route path="/activity" element={<ActivityForm />}/>
    </Routes>
    </div>
   
  );
}

export default App;
