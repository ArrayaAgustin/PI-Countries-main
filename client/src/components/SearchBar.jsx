import React, { useState} from "react";
import { getCountriesName,} from '../redux/actions/index.js'
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import s from '../style/SearchBar.module.css'




function SearchBar() {
  const dispatch=useDispatch()
  const [input,setInput]=useState("");
  
  

  useEffect(()=>{
  
     dispatch(getCountriesName(input))
     

     
   },[dispatch,input])

  const handleInputChange=(e)=>{
    setInput(e.target.value) 
  }
 

  return (
    <>
    <div className="">
     
       <input 
       className={s.input}
        id="inputSearch"
        type="text"
        placeholder="Search Countries..."
        onChange={handleInputChange}>
       </input>
       {/* <button
       name="Search"
       type="submit"
       value={input}
       //onClick={searchCountries}
       >Search</button> */}  
       
    </div>
   
    </>
  )
}

export default SearchBar