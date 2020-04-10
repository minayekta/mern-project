import React from 'react'
import './PostItem.css'
import Button from '../../shared/FormElements/Button'

 const PostItem=(props)=> {
   return(
       <li>
           <div>
               <img src={props.image} alt={props.title}/>
           </div>
           <div>
               <h2>{props.title}</h2>
               <h3> {props.description}</h3>
           </div>
           <div>
               <Button> Delete </Button>
           </div>
       </li>
   )
}
export default PostItem