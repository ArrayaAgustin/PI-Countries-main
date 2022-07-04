import axios  from 'axios';
import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import s from '../style/ActivityForm.module.css'

const ActivityForm = () => {

 let paises=useSelector((state)=>state.countries)
 let navigate = useNavigate(); 
 
 
  
  const[errors,setErrors]=useState({
    name:'*Require',
    duration:'*Require',
    difficulty:'Select the difficulty',
    season:'Select the season',
    countries:'You must select a country'

  })

const [inputs,setInputs]=useState({
  name:'',
  difficulty:'',
  duration:'',
  season:'select',
  countries:[]
})

function validateName(value){
 if(/[^A-Za-z0-9\s]+/.test(value)){
  setErrors({...errors,name:'* The name can have only letters, numbers and spaces'})
 }
 else if(value===''){
   setErrors({...errors,name:'* This field is required'})
    }
   else if(value.trim()==='')
   {
    setErrors({...errors,name:`you can't just put spaces`})
   }
    else {
    setErrors({...errors,name:''})
   }
   setInputs({...inputs,name:value})
  }
  
function validateDuration(value){
 
  if(/[^0-9]+/.test(value)){
    setErrors({...errors,duration:'*only numbers are accepted'})
   }
  if(value==='')  setErrors({...errors,duration:'*Require'})
  else if(value<1 || value>24) 
      {
        setErrors({...errors,duration:'*the range is from 1 to 24 hours'})
       
      }  
      else {
        setErrors({...errors,duration:''})
      }
     
   setInputs({...inputs,duration:value})  
}  



 
  function handleDifficulty(e){
    
    setInputs({...inputs,difficulty:e.target.value})
    setErrors({...errors,difficulty:''})
  } 

  function handleSeason(e){
    e.target.value===''?
    setErrors({...errors,season:'select a season'})
    : setErrors({...errors,season:''})
    
    setInputs({...inputs,season:e.target.value})
    
  } 

  function selectCountry(e){
    if(!(inputs.countries.includes(e.target.value)||e.target.value==='select'))
    {
      setInputs({...inputs,countries:[...inputs.countries,e.target.value]})
      setErrors({...errors,countries:''})
    }
   
  }

  function  removeCountry(e){
    e.preventDefault();
    if(inputs.countries.length===1){setErrors({...errors,countries:'you must select a country'})}
    let aux=inputs.countries
    aux=aux.filter((c)=>c!==e.target.value)
    setInputs({...inputs,countries:aux})
    
  }
 
   async function createActivity(e) {
    e.preventDefault();
    try {
      let activity={
        name:inputs.name,
        difficulty:inputs.difficulty,
        duration:parseFloat(inputs.duration),
        season:inputs.season,
        countries:inputs.countries
      }
      let post=await axios.post(`http://localhost:3001/activities`,activity)

      alert(post.data)
      
      navigate('/home')
		
    } catch (err) {
      alert(err)
    }
  
  }


  return (
    <div className={s.fondo}>
    <div className={s.container}>
    <div >
			<Link to="/home">
				<button id='back-home' className=''>
					Go back
				</button>
			</Link>
		
      <form className={s.form}>
      <h3 className=''>CREATE A ACTIVITY</h3>
        <div>
          <label className={s.nameLabel} htmlFor="name">NAME</label>
          <input 
          className=''
          key='name'
          name='name'  
          type="text" 
          value={inputs.name}
          placeholder="Name of the activity..."
          onChange={(e)=>validateName(e.target.value)}
          />
          {!errors.name?null:<span className={s.error}>{errors.name}</span>}
        </div>
        <div>
          <label className={s.nameLabel}htmlFor="duration">DURATION</label>
          <input 
          key='duration'
          name='duration'
          className={errors.duration&'danger'} 
          type="number" 
          value={inputs.duration}
          placeholder="Duration 1-24(hours)..."
          onChange={(e)=>validateDuration(e.target.value)}
          />
          {!errors.duration?null:<span className={s.error}>{errors.duration}</span>}
        </div>
        <div>
         <label className={s.nameLabel} htmlFor="dificulty">DIFFICULTY</label> 
         <label htmlFor="dificulty1" for="1">1</label>
        <input onChange={handleDifficulty} type="radio" name="dificulty" id="dificulty1" value="1" />
       
        <input onChange={handleDifficulty} type="radio" name="dificulty" id="dificulty2" value="2" />
       <label htmlFor="dificulty2" for="1">2</label>
       <input onChange={handleDifficulty} type="radio" name="dificulty" id="dificulty3" value="3" />
       <label htmlFor="dificulty3" for="1">3</label>
       <input onChange={handleDifficulty} type="radio" name="dificulty" id="dificulty4" value="4" />
       <label htmlFor="dificulty4"for="1">4</label>
       <input onChange={handleDifficulty} type="radio" name="dificulty" id="dificulty5" value="5" />
       <label htmlFor="dificulty5" for="1">5</label>
       {!errors.difficulty?null:<span className={s.error}>{errors.difficulty}</span>}
        </div>
        
        <div>
              <label className={s.nameLabel}>SEASON </label>
              <select key='season' onChange={handleSeason}>
                <option value="" disabled="">
                  -Select Season-
                </option>
                <option key='summer'value="Summer">Summer</option>
                <option  key='winter'value="Winter">Winter</option>
                <option  key='autumn'value="Autumn">Autumn</option>
                <option  key='spring'value="Spring">Spring</option>
              </select>
              {!errors.season?null:<span className={s.error}>{errors.season}</span>}  
          </div>
          <div>
          <label className={s.nameLabel} htmlFor="selectCountry">SELECT COUNTRIES</label>
            <select key='paises'onChange={selectCountry} >
            <option key='select'value='select'>-Select Country-</option>
            {paises=paises.map((p)=>
             <option key={p.name}value={p.name}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <h3>COUNTRIES</h3>
            {!errors.countries?null:<span className={s.error}>{errors.countries}</span>} 
                {
                 inputs.countries.map((c)=>
                 <div>
                  <label>{c}</label>
                   <button className={s.btnRemove}value={c}	onClick={ removeCountry}>
						     	X
						     </button>
                 </div>
               
                 )
                 }
                 
          
          </div>
        

       

        <br></br>
        <input id='created'onClick={(e)=>createActivity(e)} type='submit'disabled={errors.name||
                                      errors.duration||
                                      errors.difficulty||
                                      errors.season||
                                      inputs.countries.length===0
                                     }/>
      </form>
    </div>
    </div>
    </div>  
  )
}

export default ActivityForm