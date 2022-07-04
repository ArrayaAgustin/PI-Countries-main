import React from 'react'

import {NavLink}from 'react-router-dom'
import s from '../style/NavBar.module.css'
import SearchBar from './SearchBar.jsx';

function NavBar() {

  return (

   <nav className={s.nav}>
       <ul className={s.ulNav}>
        <li className={s.liItem}> <NavLink  style={{ color: 'white', textDecoration: 'none' }} exact to={'/home'}  ><h1>Home</h1></NavLink></li>
        <li className={s.liItem}>  <NavLink style={{ color: 'white', textDecoration: 'none' }} exact to={'/activity'}  ><h1>New Activity</h1></NavLink></li>
        <li className={s.liItem}>  <NavLink style={{ color: 'white', textDecoration: 'none' }} exact to={'https://github.com/ArrayaAgustin/PI-Countries-main'}  >GitHub</NavLink>   </li>
        <li className={s.liItem}>  <SearchBar/></li>
       </ul>
               
   </nav>
  )
}

export default NavBar