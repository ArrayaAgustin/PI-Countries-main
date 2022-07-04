import React from 'react'
import { useDispatch} from 'react-redux'
import { orderPopulation,orderAlpha} from '../redux/actions'
import s from '../style/FilterOrder.module.css'
function FilterOrder() {
 

const dispatch=useDispatch()

 function handleClickAlpha(e){
        dispatch(orderAlpha(e.target.name))
        
        }
 function handleClickPop(e){
         dispatch(orderPopulation(e.target.name))
         }

  return (
    
        <div>
       
        <div>
           <button className={s.butt}value='ASC' name='ASC' onClick={handleClickAlpha}>A-Z</button>
           
        </div>
        <div>
        <button className={s.butt} value='DESC' name='DESC' onClick={handleClickAlpha}>Z-A</button>
        </div>
        <div>
        <button className={s.butt}value='MEN' name='MEN' onClick={handleClickPop}>MENOR POPULATION</button>
        </div>
        <div>
         
           <button className={s.butt}  value='MAY' name='MAY' onClick={handleClickPop}>MAYOR POPULATION</button>
        </div>
       
        </div>
   
  )  
}

export default FilterOrder