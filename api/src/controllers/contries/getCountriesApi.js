//AXIOS PROMISE(ASYNC -AWAIT)

const axios = require("axios");
const e = require("express");
const { Activity , Country } = require("../../db");

const getContriesApi=async()=>{
    try {
        const {data}=await axios.get('https://restcountries.com/v3/all')
        const contries=data.map((country)=>(
            {
            id: country.cca3,
            name: country.name.common,
            image: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : 'Undefined capital city',
            subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
            area: country.area,
            population: country.population
            }
        ))
        await Country.bulkCreate(contries)
        return contries;      
    } catch (err) {
        return new Error("Error: "+e)
    }
}

module.exports={ getContriesApi }

//FETCH Y PROMISE (.THEN .CATCH)

// const fetch = require('node-fetch');
// const e = require("express");
// const {  Country } = require("../../db");

// const getContriesApi=()=>{
    
//         let countries;
//         fetch('https://restcountries.com/v3/all')
//         .then(response=>response.json())
//         .then(json=>{countries=json})
//         let countriesMap=countries.map((country)=>(
//             {
//             id: country.cca3,
//             name: country.name.common,
//             image: country.flags[1],
//             continent: country.continents[0],
//             capital: country.capital ? country.capital[0] : 'Undefined capital city',
//             subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
//             area: country.area,
//             population: country.population
//             }
//         ))
//         .catch(err=>{ return new Error('Error: '+err)})
//         let countriesApi;
//          Country.bulkCreate(countriesMap)
//          .then(response=>response.json())
//          .then(json=>countriesApi=json)
//          .catch(error=>{ return new Error('Error: '+error)})
//         return countriesApi;        
//     }


// module.exports={ getContriesApi }