import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterContinent,filterActivity } from '../redux/actions'
import '../style/FilterContinentActivity.module.css'


function FilterContinentActivity() {

 const dispatch = useDispatch()
 const countries = useSelector(state => state.countries)


 
 const [currentContinent, setCurrentContinent] = useState('All');
 const [currentActivity, setCurrentActivity] = useState('All')
   
 //Continentes
 let continentsList = countries.map(country => country.continent)
 let continents=[...new Set(continentsList)]
// Actividades
let activitiesList = countries.map(country => country.Activities.map((a)=>a.name))
 let activies=[...new Set(activitiesList.flat(1))]

function filtrar(e){
  var element = document.getElementById("inputSearch");
   element.value='';
    dispatch(filterContinent(currentContinent))
    dispatch(filterActivity(currentActivity))
}
  function handleContinent(e){
   setCurrentContinent(e.target.value)
  }
  function handleActivies(e){
  setCurrentActivity(e.target.value)
  }
    


  return (
 
    <div>
            <div>
                <div className='select'>
                    <h3>CONTINENT</h3>
                    <select onChange={e => handleContinent(e)}>
                    <option key='All'value='All' selected='selected'>All</option>
                     {continents=continents.map(cont =>
                     <option key={cont} value={cont}>{cont}</option>
                     )
                     }  
                        
                </select> 
                </div>
               <div>
                <h3>ACTIVITY</h3>
                 <select onChange={e => handleActivies(e)}>
                    <option key='All'value='All' selected='selected'>All</option>
                     {activies=activies.map(activity =>
                     <option key={activity} value={activity}>{activity}</option>
                     )
                     }  
                        
                </select>
               </div>
               
                <button name='filtrar'value={currentContinent} onClick={filtrar}>Filtrar</button>
            </div>
        </div>
  )
}

export default FilterContinentActivity
