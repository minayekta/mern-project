import React from 'react'
import PostList from '../commponents/PostList'
 const UserPosts = () => {
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
    return (
        <PostList item={posts}/>
    )
}
export default UserPosts