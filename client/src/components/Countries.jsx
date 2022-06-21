import React from 'react'
import Country from './Country'


function Countries({Countries}) {
  return (
    <div>
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
  )
}

export default Countries