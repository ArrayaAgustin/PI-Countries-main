import React from 'react'
import './../style/Country.css'
import {Link} from 'react-router-dom'
function Country({id,name,image,continent,population,activities}) {
  return (
    <div className='container'>
     
      <div key={id}>
            <Link exact to={`/home/${id}`}>
            <img src={image} alt='imgURL'className='img'/>
           
            
                <h1>{id}</h1> 
                <h1 className='titulo'>{name}</h1>
                <p className='contenido'>Continent:{continent}</p> 
                {/* <p className='contenido'> population:{population}</p>
                <ul>
                        {activities?.map(activity => {
                            return(
                                <li key={activity.name}>Activities: {activity.name}</li>
                                )
                            })} 
                 </ul> */}
            </Link>
        </div> 
     
         
    </div>
  )
}

export default Country