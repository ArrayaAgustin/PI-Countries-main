import React from 'react'

import {NavLink}from 'react-router-dom'
import '../style/NavBar.css'
import SearchBar from './SearchBar.jsx';

function NavBar() {

  

  
  return (

   <nav >
   
       <NavLink className={'nav-link'} exact to={'/home'}  >Home</NavLink>
       <NavLink className={'nav-link'} exact to={'/activity'}  >New Activity</NavLink>
       <NavLink className={'nav-link'} exact to={'https://github.com/ArrayaAgustin/PI-Countries-main'}  >GitHub</NavLink>
       <div class="animation start-home"></div>
       <SearchBar/>
               
   </nav>
  )
}

export default NavBar