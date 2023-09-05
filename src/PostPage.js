import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PostPage = ({posts,handleDelete,handleEdit}) => {

  const {id} = useParams();
  const post = posts.find(post => post.id.toString() === id);
  return (
    <main className='PostPage'>
       <article className='Post'>
        {
        post && 
        <>
          <h2>{post.title}</h2>
          <p  className='postDate'>{post.datetime}</p>
          <p  className='postBody'>{post.postBody}</p>
          <Link to={`/edit/${id}`} >
            <button>Edit Post</button></Link>
          <button onClick={() =>handleDelete(post.id)}>Delete Post</button>

        </>
        }
        {
          !post && 
          <>
            <h2>Post Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nesciunt, perspiciatis aut minima laborum vitae alias dolor quibusdam optio? Placeat voluptatem maiores molestiae libero, ipsum molestias qui nobis ratione quasi!</p>  
          </>

        }
        </article>  
    </main>
  )
}
