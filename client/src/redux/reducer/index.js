

const initialState={
    countries:[],
    copyCountries:[],
    filterCountries:[],
    country:{},
    order:"",
    filter:"",
    pag:1
}

function rootReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return{
                ...state,
                countries:payload,
                copyCountries:payload    
            }
            ;
        case 'GET_COUNTRIES_NAME':
            return{
                ...state,
                copyCountries:payload[0],
                order:'',
                filter:payload[1]
                  
            }
            ; 
        case 'GET_COUNTRY_ID':
            return{
                ...state,
                country:payload
            }
            ; 
        case 'POST_ACTIVITY':
            return{
                ...state
            } ;

        case 'ORDER_ALPHA':
            let countriesAlpha=(payload==='ASC')?
            state.copyCountries.sort((a,b)=>{
                if(a.name>b.name)return 1
                if(a.name<b.name)return -1
                return 0
            })
            :state.copyCountries.sort((a,b)=>{
                if(a.name<b.name)return 1
                if(a.name>b.name)return -1
                return 0
            })
        return {
            ...state,
            copyCountries:countriesAlpha,
            order:payload,
            pag:1  
        };
        case 'ORDER_POPULATION':
            let countriesPopulation=(payload==='MEN')?
            state.copyCountries.sort((a,b)=>{
                if(a.population>b.population)return 1
                if(a.population<b.population)return -1
                return 0
            })
            :state.copyCountries.sort((a,b)=>{
                if(a.population<b.population)return 1
                if(a.population>b.population)return -1
                return 0
            })
        return {
            ...state,
            copyCountries:countriesPopulation,
            order:payload,
            pag:1
            
        }; 
        case 'FILTER_CONTINENT':
            let countriesFilter=(payload==='All')
            ?state.countries
           :state.countries.filter(c=> c.continent===payload)
            
            
        return {
            ...state,
            copyCountries:countriesFilter,
            order:'Sin order',
            pag:1
        };  
        case 'FILTER_ACTIVITY':
            const filteredActivity = payload === 'All' ?
                state.copyCountries :
                state.copyCountries.filter((c) => c.Activities && c.Activities.filter((a) =>
                    a.name === payload).length)
            console.log(filteredActivity)
            return {
                ...state,
                copyCountries: filteredActivity,
                order:'sin order',
                pag:1

            };
       
        default:
        return {...state}
    }
}

export default rootReducer