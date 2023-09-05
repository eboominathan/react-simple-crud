import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const EditPost = ({
  posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {

  const { id } = useParams();
  const post = posts.find(edit => (edit.id).toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);

    }
  }, [post, setEditBody, setEditTitle])
  return (
    <main className='NewPost'>
      {
        editTitle &&
        <>
          <h2>Edit edit</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title : </label>
            <input
              type="text"
              id='editTitle'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder='Enter Title'
              required
            />
            <label htmlFor="editBody">Body : </label>
            <textarea
              id='editBody'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              placeholder='Enter Body'
              required
            />
            <button
              onClick={() => handleEdit(id)}
              type='submit'
            >Update</button>
          </form>
        </>
      }
    </main>
  )
}
