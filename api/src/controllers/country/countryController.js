const axios=require("axios")
const {Country,Activity}= require("../../db")

const getCountry=async(id)=>{
  try {
    const country=await Country.findByPk(id,{
        include:{
                model:Activity,
                attributes: ["name"],
                through:{
                        attributes: [],
                        }
                }
    })
    return country
  } catch (err) {
    console.log("Error: "+err)
  }
}

module.exports={getCountry}