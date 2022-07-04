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
             payload: [info,name]
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
export function orderAlpha(order){  //ASC o DESC
  return async function(dispatch){
    try {
     
      return dispatch({
        type:'ORDER_ALPHA',
        payload:order
      })
    } catch (err) {
      return err
    }
  }
}
export function orderPopulation(order){  //MAY o MEN
  return async function(dispatch){
    try {
     
      return dispatch({
        type:'ORDER_POPULATION',
        payload:order
      })
    } catch (err) {
      return err
    }
  }
}


export function filterContinent(continent){  
  return async function(dispatch){
    try {
      console.log('PAYLOAD FILTERCONTINENT:'+continent)
      return dispatch({
        type:'FILTER_CONTINENT',
        payload:continent
      })
    } catch (err) {
      return err
    }
  }
}
export function filterActivity(activity){  //MAY o MEN
  return async function(dispatch){
    try {
      console.log('PAYLOAD FILTERACTIVITY:'+activity)
      return dispatch({
        type:'FILTER_ACTIVITY',
        payload:activity
      })
    } catch (err) {
      return err
    }
  }
}

export function postActivity(activity){
  return async function(dispatch){
    try {
      let post=await axios.post(`http://localhost:3001/activity`,activity)
      post=post.data
      return dispatch({
        type:'POST_ACTIVITY',
        payload:post
      })
    } catch (err) {
      return err
    }
  }
}

