const {getContriesApi}=require("./getCountriesApi")
const{getContriesDb}=require("./getCountriesDb")

const getCountriesAll=async(param)=>{
    //llamada primero a la DB
 
 let countries=await getContriesDb(param)
    // si no tengo cargada la DB llamo a la api y obtengo la info
// if(countries.length===0)await getContriesApi()
// if(countries){
//   countries=countries.sort((a,b)=>{
//     if(a.name>b.name) return 1
//     if(a.name<b.name) return -1
//     return 0
//   })
// }

  return countries
}

module.exports={ getCountriesAll }