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