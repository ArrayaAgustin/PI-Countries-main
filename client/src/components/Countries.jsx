import React from 'react'
import Country from './Country'
import '../style/Countries.css'

function Countries({Countries}) {
  
  return (
    <div className='Countries-container'>
      <div className='Countries'>
        {Countries&&Countries.map((country)=>{
          
            return(
            
            <Country 
            key={country.id}
            id={country.id}
            name={country.name}
            image={country.image}
            continent={country.continent}
            population={country.population}
            activities={country.Activities}
            />
           
            
            )
            
          })}

      </div>
     
    </div>
  )
}

export default Countries