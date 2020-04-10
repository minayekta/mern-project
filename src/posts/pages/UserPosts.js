import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../commponents/PostList'

const posts = [{
    id:'p1',
    title:'Post Title',
    description:'Post Description',
    image:'',
    creator:'u1'
},
{
   id:'p2',
   title:'Post Title 2',
   description:'Post Description 2',
   image:'',
   creator:'u2'
},

]
 const UserPosts = () => {
    const userId = useParams().userId
    const uplodedPosts = posts.filter((post)=> post.creator==userId)
    
    return (
        <PostList item={uplodedPosts}/>
    )
}
export default UserPosts