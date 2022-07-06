import React from "react";
import { Route, Routes} from 'react-router-dom'

import ActivityForm from "./components/ActivityForm";
import Home from './components/Home';

import  Details  from "./components/Details.jsx";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

function App() {
  return (
     <div>
  
    <Routes> 
    <Route path="/" element={<Landing/>}/>  
    <Route path="/home" element={<Home/>}/>
    <Route path="/home/:id" element={<Details />}/>
    <Route path="/activity" element={<ActivityForm />}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
