const axios = require("axios");
const e = require("express");
const {Op}=require("sequelize")
const { Activity , Country} = require("../../db");

const createActivity=async(name,difficulty,duration,season,countries)=>{
   
try {
    if(!name,!difficulty,!duration,!season,!countries){
        return "Necesita todos los campos"
    }
    if(difficulty >5 && difficulty<1)
     return "la dificultad debe ser un numero entre 1-5"
     let coun = await Country.findAll({where: { name: countries }})
    
    console.log("Countries:"+coun)
    if(!coun) return "Debe seleccionar un pais valido"      
    

     const activity=await Activity.create(
        {name:name,
         difficulty:difficulty,
         duration:duration,
         season:season
        })
     
      await activity.addCountry(coun)
      return "Actividad Creada con exito"

} catch (err) {
    console.log("Error: "+err)    
  }
}

const getActivities=async()=>{
    try {
      const activities=Activity.findAll(
        {include:{ model:Country,
                   attributes:["name"],
                   through:{
                           attributes:[]
                           }
                 }
        })  
    } catch (err) {
       console.log("Error: "+err) 
    }
}


module.exports={getActivities,createActivity}