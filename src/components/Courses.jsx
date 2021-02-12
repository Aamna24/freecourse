
import React, { useEffect, useState, Component } from 'react';

import posts from '../common/posts';
import postLoading from '../common/postLoading'
import { apiEndpoint } from '../config.json'

const Courses=()=>{
    const PostLoading = postLoading(posts);
    const [appState , setAppState] = useState({
        loading: false,
        posts: null
    })

    useEffect(()=>{
        setAppState({ loading: true});
        const apiURL = apiEndpoint + "/course/"
        
        fetch(apiURL)
        .then((data)=>data.json())
        .then((posts)=>{
            setAppState({ loading: false, posts: posts});
        })
    }, [setAppState])
    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">Our Courses</h1>
    <p class="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
        
        <PostLoading isLoading={appState.loading} posts={appState.posts}/>
        </div>
    )
}
export default Courses;