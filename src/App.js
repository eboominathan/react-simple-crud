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
import api from "api/posts";

function App() {


  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState([]);
  const [postBody, setPostBody] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');

  }
  const handleDelete = (id) => {
    const allPosts = posts.filter((post) => post.id!== id);
    setPosts(allPosts);
    navigate('/');
  }


  useEffect(() => {
    const filterResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filterResults.reverse());
  }, [posts, search])

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
           handleDelete={handleDelete}
           />} />
        </Route>
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Missing />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
