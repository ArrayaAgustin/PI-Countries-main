import axios from "axios";


export function getAllCountries(){
   return async function(dispatch){
    try {
        let info=await axios('http://localhost:3001/countries')
        info=info.data
        return dispatch(
            {
              type:'GET_ALL_COUNTRIES',
              payload: info
            })
    } catch (err) {
        return err
    }
   }
}
export function getCountriesName(name){
  return async function(dispatch){
   try {
        let info=await axios(`http://localhost:3001/countries/?name=${name}`)
        info=info.data
       return dispatch(
           {
             type:'GET_COUNTRIES_NAME',
             payload: info
           })
   } catch (err) {
       return err
   }
  }
}

export function getCountry(id){
  return async function(dispatch){
    try {
       let country=await axios(`http://localhost:3001/countries/${id}`)
        country=country.data
        return dispatch(
          {
           type:'GET_COUNTRY_ID',
           payload:country
          })
    } catch (err) {
      return err
    }
   
  }
}

