import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getCountry } from "../redux/actions/index.js";


function Details() {
    const dispatch = useDispatch();
    const country = useSelector(state => state.country);
    const {name, image, continent, capital, subregion, area, population, Activities} = country;
    let { id } = useParams();

    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])
  return (
    <div className="details">
    <div className="detailCard" key={id}>
        <div className="columns">
            <div className="columnLeft">
                
            <div className="countryInfo">
            <img className="detailImg" src={image} alt={name} />                    
            </div>
            <div className="countryInfo">
                <h1>Pais:</h1>
                <h1 className="detailTitle">{name}</h1>                        
            </div>
            <div className="countryInfo">
                <h3>Capital:</h3>
                <h3 className="detailCapital">{capital}</h3>                      
            </div>
            <div className="countryInfo">
                <h3>Continente:</h3>
                <h3 className="detailContinent">{continent}</h3>                       
            </div>
            <div className="countryInfo">
                <h3>Subregion:</h3>
                <h3 className="detailSubregion">{subregion}</h3>                       
            </div>
            <div className="countryInfo">
                <h3>Area:</h3>
                <h3 className="detailArea">{area}</h3>   
            </div>
            <div className="countryInfo">
                <h3>Poblacion:</h3>
                <h3 className="detailPopulation">{population}</h3>        
            </div>
            </div>
            <div className="columnRight">

                <h2 className="activitiesTitle">Actividades:</h2>
            <div className="countryInfo">
                <div className="detailActivities">

                {Activities && Activities.map(activity => {
                    return(
                        <h2  key={activity.id}>{activity.name}</h2>
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
