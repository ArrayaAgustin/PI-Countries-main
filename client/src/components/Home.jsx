import React,{useState,useEffect} from 'react'
import{useDispatch,useSelector}from 'react-redux'
import{getAllCountries} from '../redux/actions/index.js'
import Countries from './Countries'
import Filters from './Filters.jsx';
import Paginate from './Paginate';

import '../style/Home.css'
import NavBar from './NavBar.jsx';


function Home() {
  const dispatch=useDispatch();
  const countries=useSelector((state)=>state.copyCountries);
  const order=useSelector((state)=>state.order)
  const filter=useSelector((state)=>state.filter)
  
  //paginacion

    const [currentPage, setCurrentPage] =  useState(1);
    const [countriesByPage] = useState(10);
    const lastCountry = currentPage * countriesByPage;
    const firstCountry = lastCountry - countriesByPage;
  
   let currentCountriesInPage
   if(currentPage===1) currentCountriesInPage= countries.slice(firstCountry, lastCountry-1)
  else{
    currentCountriesInPage= countries.slice(firstCountry-1, lastCountry-1)
  }

   const pagination = (pagNumber)=>{setCurrentPage(pagNumber)}


   useEffect(()=>{
    dispatch(getAllCountries())
    
  },[dispatch])
   
  useEffect(()=>{
   setCurrentPage(1)
  },[order,filter])

  
  return (
  
     <div>
      <NavBar/>
      <div className='home-container'>
             <div>
             <h1 className='titles'> {order?<p>, ORDER BY:{order}</p>:null}</h1>
             <h1 className='titles'> {filter?<p>, SEARCH "{filter}"</p>:null}</h1>
             <Filters/>
             </div>
           
            
            <div className='countries-paginado'>
               <div>
                  <Paginate
                  countriesByPage={countriesByPage}
                  allCountries={countries.length}
                  pagination={pagination}/>
                </div>
                  <div className='titles'>
                    <h1 className='titles'>COUNTRIES</h1>
                  
                   
                  {currentCountriesInPage.length!==0?
                  <Countries Countries={currentCountriesInPage}/>
                  :<h1> NO RESULTS</h1>}
                  </div>
                
            </div>
      </div>

   
      </div>
   

  )
}

export default Home