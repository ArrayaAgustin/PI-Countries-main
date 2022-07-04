import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {getCountry } from "../redux/actions/index.js";
import s from '../style/Details.module.css'
import imgDetail from '../source/detail-country.jpg'

function Details() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const country = useSelector(state => state.country);
    const {name, image, continent, capital, subregion, area, population, Activities} = country;
    let { id } = useParams();
  
    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

    const backHome=(e)=>{
        e.preventDefault();
        navigate('/home');
    }
  return (
   
    <div className={s.main}>
        
    <div className={s.detailCountry} key={id}>
        <div className={s.detailTitle}>
         <button  value='back' name='backHome'onClick={backHome} >GO BACK HOME</button>
         <h1 className={s.detailTitle}>DETAILS</h1>
        </div>
        <div className={s.columns}>
            <div className={s.columnLeft}>
                
            <div className={s.countryInfo}>
            <img className={s.img} src={image} alt='flag' />                    
            </div>
            <div className={s.countryInfo}>
                <h1>Pais:</h1>
                <h1 className="detailTitle">{name}</h1>                        
            </div>
            <div className={s.countryInfo}>
                
                <h3 className='detailCapital'>Capital:</h3>
                <h3 className="detailCapital">{capital}</h3>                            
            </div>
            <div className={s.countryInfo}>
                <h3>Continente:</h3>
                <h3 className="detailContinent">{continent}</h3>                       
            </div>
            <div className={s.countryInfo}>
                <h3>Subregion:</h3>
                <h3 className="detailSubregion">{subregion}</h3>                       
            </div>
            <div className={s.countryInfo}>
                <h3>Area:</h3>
                <h3 className="detailArea">{area}</h3>   
            </div>
            <div className={s.countryInfo}>
                <h3>Poblacion:</h3>
                <h3 className="detailPopulation">{population}</h3>        
            </div>
            </div>
            <div className={s.columnRigth}>
            <div className={s.activityInfo}>
            <img className={s.imgActivity} src={imgDetail} alt='fondo-detail' />                    
            </div>         
                <h1 className={s.activitiesTitle}>Activities:</h1>
            <div className="countryInfo">
                <div className="activities">

                {Activities && Activities.map((activity,index) => {
                    return(
                        <div className=''>
                          <h2  key={activity.id}>{index+1}-{activity.name}</h2>
                          <div className={s.detailActivity}>
                          <h3 className={s.detailActivity} key={activity.difficulty}> Difficulty: {activity.difficulty},</h3>
                          <h3 className={s.detailActivity} key={activity.duration}> Duration: {activity.duration} HS,</h3>
                          <h3 className={s.detailActivity} key={activity.season}> Season: {activity.season}</h3>
                          </div>
                          
                        </div>
                        
                        )
                    })}
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Details
