import React from 'react'
import './PostList.css'
import PostItem from './PostItem'

 const PostList=(props)=> {
    if(props.item.length === 0){
        return(
            <h2> posts not found </h2>
        )
    }
    return(
        <ul>
            <li>
                {
                    props.item.map(post => {
                        return <PostItem
                        key={post.id}
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        creatorId= {post.creator}
                        />
                    })
                }
            </li>
        </ul>
    )
}
export default PostList