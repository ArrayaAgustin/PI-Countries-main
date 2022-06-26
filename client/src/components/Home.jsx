import React,{useState,useEffect} from 'react'
import{useDispatch,useSelector}from 'react-redux'
import{getAllCountries,getCountriesName} from '../redux/actions/index.js'
import Countries from './Countries'
import Filters from './Filters.jsx';
import Paginate from './Paginate';

import '../style/Home.css'


function Home() {
  const dispatch=useDispatch();
  const countries=useSelector((state)=>state.countries);
  const setInput=useSelector((state)=>state.setInput)
  //paginacion
    const [currentPage, setCurrentPage] =  useState(1);
    const [countriesByPage] = useState(10);
    const lastCountry = currentPage * countriesByPage;
    const firstCountry = lastCountry - countriesByPage;

   const currentCountriesInPage= countries.slice(firstCountry, lastCountry)

   const pagination = (pagNumber)=>{setCurrentPage(pagNumber)}

 
  useEffect(()=>{
    dispatch(getCountriesName(setInput))
  },[dispatch,setInput])

  
  return (
  
     
      <div className='home-container'>
            <Filters/>
            <div className='countries-paginado'>
                  <div>
                  <Countries Countries={currentCountriesInPage}/>
                  </div>
                <div>
                  <Paginate
                  countriesByPage={countriesByPage}
                  allCountries={countries.length}
                  pagination={pagination}/>
                </div>
            </div>
      </div>

   
    
   

  )
}

export default Home