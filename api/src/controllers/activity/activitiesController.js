const axios = require("axios");
const e = require("express");
const {Op, json}=require("sequelize")
const { Activity , Country} = require("../../db");

const createActivity=async(name,difficulty,duration,season,countries)=>{
   
try {
      

      if(!name,!difficulty,!duration,!season,!countries){
       return "Necesita todos los campos"
      }
      if(difficulty >5 && difficulty<1)
      return "la dificultad debe ser un numero entre 1-5"
    
     let countriesActivities=await Country.findAll({where: { name: countries },
                                          attributes:["name"] ,       
                                          include:{model:Activity,
                                            attributes:["name"],
                                            through:{
                                                    attributes:[]
                                                    }}
                                         })
 
      countriesActivitiesjson=JSON.parse(JSON.stringify(countriesActivities))
      let aux=[];
       for (let i = 0; i < countriesActivitiesjson.length; i++) {
        let actividades=countriesActivitiesjson[i]['Activities'].map(a=>a.name)
        console.log(actividades)
        if(!actividades.includes(name)){
          aux.push(countriesActivitiesjson[i]['name'])
        }
       }
       console.log('aux:'+aux)
       let countriesFinal = await Country.findAll({where: { name: aux }})
       
       if(countriesFinal.length===0) return `Ya existe esa actividad en ${countries.toString()} ` 
       
       const activity=await Activity.create(
          {name:name,
           difficulty:difficulty,
           duration:duration,
           season:season
          })
        
        await activity.addCountry(countriesFinal)
        return `Actividad Creada con exito en ${aux.toString()}`
     
    
    
} catch (err) {
    console.log("Error: "+err)    
  }
}



// const getActivity=async(name)=>{
//     try {
//       const activities=Activity.findAll(
        
//         {include:{ model:Country,
//                    attributes:["name"],
//                    through:{
//                            attributes:[]
//                            }
//                  }
//         })  
//     } catch (err) {
//        console.log("Error: "+err) 
//     }
// }




module.exports={createActivity}