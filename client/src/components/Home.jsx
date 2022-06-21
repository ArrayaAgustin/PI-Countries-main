import React,{useState,useEffect} from 'react'
import{useDispatch,useSelector}from 'react-redux'
import{getAllCountries} from '../redux/actions/index.js'
import Countries from './Countries'



function Home() {
  const dispatch=useDispatch();
  const countries=useSelector((state)=>state.countries);

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  
  return (
    <div>
    
       <div>
        <Countries Countries={countries}/>
       </div>
    </div>
   

  )
}

export default Home