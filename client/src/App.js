import React from "react";
import { Route, Routes} from 'react-router-dom'

import ActivityForm from "./components/ActivityForm";
import Home from './components/Home';

import  Details  from "./components/Details.jsx";
import Landing from "./components/Landing";

function App() {
  return (
     <div>
  
    <Routes> 
    <Route path="/" element={<Landing/>}/>  
    <Route path="/home" element={<Home/>}/>
    <Route path="/home/:id" element={<Details />}/>
    <Route path="/activity" element={<ActivityForm />}/>
    <Route path="*" element={<h1>Not Found , 404</h1>}/>
    </Routes>
    </div>
   
  );
}

export default App;
