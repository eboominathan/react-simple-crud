import React from 'react'

export const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
   <main className='NewPost'>
    <h2>New Post</h2>
        <form className='newPostForm' onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="postTitle">Title : </label>
            <input 
            type="text"
             id='postTitle'
             value={postTitle}
             onChange={(e) => setPostTitle(e.target.value)}
             placeholder='Enter Title'
             required
              />
              <label htmlFor="postBody">Body : </label>
              <textarea 
              id='postBody'
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              placeholder='Enter Body'
              required
              />
              <button
                type='submit'
                
              >Submit</button>
        </form>
   </main>
  )
}
