

const initialState={
    countries:[],
}

function rootReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return{
                ...state,
                countries:payload
            }
            ;
    
        default:
           return {...state}
    }
}

export default rootReducer