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
    
     let countPost=await Country.findAll({where: { name: countries },
                                          attributes:["name"] ,       
                                          include:{model:Activity,
                                            attributes:["name"],
                                            through:{
                                                    attributes:[]
                                                    }}
                                         })
     
       console.log(JSON.stringify(countPost));
      let aux=[]
       for (let i = 0; i < countPost.length; i++) {
        let actividades=countPost[i]['Activities'].map(c=>c.name.toUpperCase());
        if(!actividades.includes(name.toUpperCase())) {
          aux.push(countPost[i]['name'])
        }
       }
       let coun = await Country.findAll({where: { name: aux }})
       console.log(coun)
       if(coun.length===0) return `Ya existe esa actividad en ${countries.toString()} ` 
       const activity=await Activity.create(
          {name:name,
           difficulty:difficulty,
           duration:duration,
           season:season
          })
        
        await activity.addCountry(coun)
        return `Actividad Creada con exito en ${aux.toString()}`
     
    return aux;
    
} catch (err) {
    console.log("Error: "+err)    
  }
}

// const createActivity=async(name,difficulty,duration,season,countries)=>{
   
//   try {
//       if(!name,!difficulty,!duration,!season,!countries){
//           return "Necesita todos los campos"
//       }
//       if(difficulty >5 && difficulty<1)
//        return "la dificultad debe ser un numero entre 1-5"
      
//        let coun = await Country.findAll({where: { name: countries }})
  
//        const activity=await Activity.create(
//           {name:name,
//            difficulty:difficulty,
//            duration:duration,
//            season:season
//           })
       
//         await activity.addCountry(counFinal)
//         return "Actividad Creada con exito"
  
//   } catch (err) {
//       console.log("Error: "+err)    
//     }
//   }

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