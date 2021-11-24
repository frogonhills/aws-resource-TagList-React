import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './App.css';

// The REST API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const baseURL = "https://bu55kxaqik.execute-api.us-east-1.amazonaws.com/task_master";

const App = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(baseURL);
    console.log(data.result)
    setPosts(data.result);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
    console.log("yst" , posts);

  }, []);

  return (
    <div className="wrapper">
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post) => (
            <div className="post">
              <h2>{post.id} </h2>
               <h2>{post.count} </h2>
              <h2>{post.resource_type} </h2>

            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );
};

export default App;