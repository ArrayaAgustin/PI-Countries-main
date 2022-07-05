import React from 'react'
import { connect} from 'react-redux'
import { orderPopulation,orderAlpha} from '../redux/actions'
import s from '../style/FilterOrder.module.css'

class FilterOrder extends React.Component{
 
  constructor(props){
   super(props)
   this.handleClickAlpha=this.handleClickAlpha.bind(this);
   this.handleClickPop=this.handleClickPop.bind(this)
  }


  handleClickAlpha(e){
   e.preventDefault();
   this.props.orderAlpha(e.target.name)
   }

  handleClickPop(e){
   e.preventDefault();
   this.props.orderPopulation(e.target.name)
   }

render(){
  return (
    
        <div>
       
        <div>
           <button className={s.butt}value='ASC' name='ASC' onClick={(e)=>this.handleClickAlpha(e)}>A-Z</button>
           
        </div>
        <div>
        <button className={s.butt} value='DESC' name='DESC' onClick={(e)=>this.handleClickAlpha(e)}>Z-A</button>
        </div>
        <div>
        <button className={s.butt}value='MEN' name='MEN' onClick={(e)=>this.handleClickPop(e)}>MENOR POPULATION</button>
        </div>
        <div>
         
           <button className={s.butt}  value='MAY' name='MAY' onClick={(e)=>this.handleClickPop(e)}>MAYOR POPULATION</button>
        </div>
       
        </div>
   
  )
 }  
}

export default connect(null,{orderPopulation,orderAlpha})(FilterOrder)

// import React from 'react'
// import { useDispatch} from 'react-redux'
// import { orderPopulation,orderAlpha} from '../redux/actions'
// import s from '../style/FilterOrder.module.css'
// function FilterOrder() {
 

// const dispatch=useDispatch()

//  function handleClickAlpha(e){
//         dispatch(orderAlpha(e.target.name))
        
//         }
//  function handleClickPop(e){
//          dispatch(orderPopulation(e.target.name))
//          }

//   return (
    
//         <div>
       
//         <div>
//            <button className={s.butt}value='ASC' name='ASC' onClick={handleClickAlpha}>A-Z</button>
           
//         </div>
//         <div>
//         <button className={s.butt} value='DESC' name='DESC' onClick={handleClickAlpha}>Z-A</button>
//         </div>
//         <div>
//         <button className={s.butt}value='MEN' name='MEN' onClick={handleClickPop}>MENOR POPULATION</button>
//         </div>
//         <div>
         
//            <button className={s.butt}  value='MAY' name='MAY' onClick={handleClickPop}>MAYOR POPULATION</button>
//         </div>
       
//         </div>
   
//   )  
// }

// export default FilterOrder