import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Apis() {

  
    const [post, setPost] = React.useState(null);
    const [count , setCount] = React.useState(1);

    React.useEffect(() => {
      axios.get(`${baseURL}/${count}`).then((response) => {
        setPost(response.data);
      });
    }, []);

    const onChange=()=>{


        console.log("pusss");
        axios.get(`${baseURL}/${count}`).then((response) => {
            setPost(response.data);
          });

    }
  
    function updatePost() {
      axios
        .put(`${baseURL}/1`, {
          title: "Hello World!",
          body: "This is an updated post."
        })
        .then((response) => {
          setPost(response.data);
        });
    }
  
    if (!post) return "No post!"
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>{count}</p>
        <button onClick={updatePost}>Update Post</button>
        <div className="buttons">
        <button type="button" className="btn" onClick={()=> {onChange() ;setCount(count -1)}} >Decrease</button>
        <button type="button" className="btn" onClick={()=> {onChange() ;setCount(1)}} >reset</button>
        <button type="button" className="btn" onClick={()=> {onChange() ;setCount(count +1)}} >increase</button>

      </div>
      </div>
    );
  }