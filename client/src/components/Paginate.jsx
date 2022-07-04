import React from 'react'
import '../style/Paginate.css'
function Paginate({countriesByPage,allCountries,pagination}) {
 
  const pageNumbers =[]
     for (let i = 1; i <=Math.ceil(((allCountries+1)/countriesByPage)); i++) 
     { pageNumbers.push(i)}

 
return (
    
    <nav className='nav-pag'>
     <ul className="ul-pag">
      {pageNumbers && pageNumbers.map((num) => (
     <li className="li-pag" key={num}>
      <button className="btn-pag" onClick={() =>pagination(num)}>{num}</button>
     </li>))}  
     </ul>
   </nav>
    
  )
}

export default Paginate