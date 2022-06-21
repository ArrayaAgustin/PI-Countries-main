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
        Country.bulkCreate(contries)
        return contries;      
    } catch (err) {
        return new Error("Error: "+e)
    }
}

module.exports={ getContriesApi }