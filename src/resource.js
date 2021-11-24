



import axios from "axios";
import React from "react";

const baseURL = "https://bu55kxaqik.execute-api.us-east-1.amazonaws.com/task_master";

export default function Resource() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data.result);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Data</h1>
      <p>Data</p>
    </div>
  );
}