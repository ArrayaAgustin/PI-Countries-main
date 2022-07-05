
import React from 'react'
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
   
 constructor(props){
   super(props)
   this.state={}
 
  }
  
  render() {
    return (
      <div className='notfound'>
        <h1>Not Found, 404 </h1>
        <Link to="/home"><h2>Go back HOME</h2></Link>
      </div>
    )
  }
 
}
