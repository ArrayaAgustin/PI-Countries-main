import React, { useState} from "react";
import {getCountriesName} from '../redux/actions/index.js'
import {useDispatch} from 'react-redux'
import { useEffect } from "react";

//import { search } from "../../../api/src/routes/countryRouter.js";



function SearchBar() {

  const [input,setInput]=useState("");
  let dispatch=useDispatch()

  const handleInputChange=(e)=>{
    setInput(e.target.value)
    
  }
  useEffect(()=>{
    dispatch(getCountriesName(input))
  },[dispatch,input])

  // const searchCountries=(e)=>{
  //   e.preventDefault()
  //   dispatch(getCountriesName(input))
  //   setInput('')
  //   document.getElementById('inputSearch').value=''
  // }
  return (
    <>
    <div>
     <form id="searchName">
       <input 
        id="inputSearch"
        type="text"
        placeholder="Search Countries..."
        onChange={handleInputChange}>
       </input>
       <button
       name="Search"
       type="submit"
       value="Search"
       //onClick={searchCountries}
       >Search</button>

    </form>
      
       
    </div>
   
    </>
  )
}

export default SearchBar