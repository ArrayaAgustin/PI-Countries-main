import React from 'react'
import './../style/Country.css'
import {Link} from 'react-router-dom'
function Country({id,name,image,continent,population,activities}) {
  return (
    <div className='container'>
     
       <div key={id}>
       <Link exact to={`/home/${id}`}>
        <div>
        <img src={image} alt='imgURL'className='img'/>
        <h2 className='titulo'>{name}</h2>
        <p className='contenido'>{continent}</p> 
        </div>
      
       </Link>
      </div> 
 
        
  </div>
  )
}

export default Country