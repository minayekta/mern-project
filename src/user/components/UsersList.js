import React from 'react'
import './UsersList.css';
import './UserItem.css';
import UserItem from './UserItem' 

const UsersList = (props) => {
    if( props.items.length === 0){
        return (
            <div className="center">
                <h2> User Not Found</h2>
            </div>
        )
    }
    return(
        <li>
            <ul>
                {
                    props.items.map(user=>{
                        return <UserItem key={user.id}
                        id={user.id}
                        image={user.image}
                        name ={user.name}
                        postCount = {user.posts}/>
                    })
                }
            </ul>
        </li>
    )
}
export default UsersList