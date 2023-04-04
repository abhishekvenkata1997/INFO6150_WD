import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../PostCard'

import CardBody from './post_card/CardBody'
import CardHeader from './post_card/CardHeader'
import CardFooter from './post_card/CardFooter'
const Posts = () => {
    const {homePosts} = useSelector(state=>state)
    return (
        <div className='posts'>
           {
            homePosts.posts.map(post => (
                <PostCard key={post._id} post={post}/>
            ))
           }
        </div>
    )
}
export default Posts