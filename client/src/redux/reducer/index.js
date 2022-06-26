

const initialState={
    countries:[],
    country:{},
    setInput:""
}

function rootReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return{
                ...state,
                countries:payload
            }
            ;
            case 'GET_COUNTRIES_NAME':
                return{
                    ...state,
                    countries:payload,
                    
                }
                ; 
            case 'GET_COUNTRY_ID':
                return{
                    ...state,
                    country:payload
                }
                ;    
    
        default:
           return {...state}
    }
}

export default rootReducer