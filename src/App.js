import './App.css';
import React, { useEffect, useState } from 'react';
import { Headers } from './Headers';
import { Footer } from './Footer';
import { PostPage } from './PostPage';
import { Home } from './Home';
import Nav from './Nav';
import { NewPost } from './NewPost';
import { About } from './About';
import { Missing } from './Missing';
import { format } from 'date-fns';
import { Route, Routes, useNavigate } from 'react-router-dom';
//import { Link, Route, Routes } from 'react-router-dom';
//import { Post } from './Post';
//import { PostLayout } from './PostLayout';
import api from "./api/posts";
import { EditPost } from './EditPost';

function App() {


  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState([]);
  const [postBody, setPostBody] = useState([]);
  const [editTitle, setEditTitle] = useState([]);
  const [editBody, setEditBody] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts'); 
        setPosts(response.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchPosts();    
  }, [])

  
  useEffect(() => {
    
    const filterResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filterResults.reverse());
  }, [posts, search])





  const handleSubmit =  async (e) => {
    e.preventDefault();
 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try{
        const response = await api.post('/posts',newPost);        
        const allPosts = [...posts, response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
  }catch(err){
    console.log(err);
  } 

  }
  const handleEdit = async (id) => {

    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try{
        const response = await api.put(`/posts/${id}`,updatedPost);
        setPosts(posts.map(post => post.id === id ? {...response.data}:post));
        setEditTitle('');
        setEditBody('');
        navigate('/');
    }catch(err){
      console.log(err);
    }

  }
  const handleDelete = async (id) => {
    try{
        const response = await api.delete(`posts/${id}`);
        const allPosts = posts.filter((post) => post.id!== id);
        setPosts(allPosts);
        navigate('/');
    }catch(err){
      console.log(err);
    }
   
  }




  return (
    <div className="App">
      <Headers title="Sample App" />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes >
        <Route path='/' element={<Home
          posts={searchResults}
          setPosts={setPosts}
        />} />
        <Route path='post'>
          <Route
            index
            element={<NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />}
          />        
          <Route path=':id' element={<PostPage 
            posts={posts}
            handleEdit={handleEdit}
           handleDelete={handleDelete}
         
           
           />} />
        </Route>
        <Route path='/edit/:id'
           element={<EditPost 
            editBody={editBody}
            setEditBody={setEditBody}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            handleEdit={handleEdit}
            posts={posts}

           />}
           />
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Missing />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
