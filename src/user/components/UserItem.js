import React from 'react'
import './UserItem.css';
import {Link} from 'react-router-dom'
 const UserItem = props =>{
   return(
       <li>
       <Link to={`/${props.id}/posts`}>
           <div>
               <img src={props.image} alt={props.name}/>
           </div>
           <div>
               <h2> {props.name}</h2>
               <h3> {props.postCount}</h3>
           </div>
           </Link>
       </li>
   )
}
export default UserItem