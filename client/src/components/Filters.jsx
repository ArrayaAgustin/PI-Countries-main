import React, { } from 'react'
import {  } from 'react-redux'
import {   } from '../redux/actions'
import s from '../style/Filters.module.css'
import FilterContinentActivity from './FilterContinentActivity'
import FilterOrder from './FilterOrder'

function Filters() {




  return (
    <div>
      
        <div className={s.filterContainer}>
        <div className={s.order}>
          <h2>ORDER BY:</h2>
          <FilterOrder/>
          </div>
        <div className={s.filter}>
        <h2 >FILTER:</h2>
        <FilterContinentActivity/>
        </div>
        
      
        </div>
    </div>
  
  )
}

export default Filters