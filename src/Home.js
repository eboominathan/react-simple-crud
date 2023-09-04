import React from 'react'
import { Feed } from './Feed'

export const Home = ({posts,setPosts}) => {
  return (
    <>
          { posts.length ? (
            <Feed posts={posts}  setPosts = {setPosts} />
          ) : (
            <p style={{marginTop:"2rem"}}>No post to display</p>
          )
        }
    </>
  )
}
