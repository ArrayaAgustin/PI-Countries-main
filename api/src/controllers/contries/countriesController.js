const {getContriesApi}=require("./getCountriesApi")
const{getContriesDb}=require("./getCountriesDb")

const getCountriesAll=async(param)=>{
  
 
 let countries=await getContriesDb(param)
 
  return countries
}

module.exports={ getCountriesAll }