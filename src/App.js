import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from "./data";
import { ListContainer, ListItem } from "./styles";
import { DragHandle } from "./partials/DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// import './App.css';

// The REST API endpoint

const baseURL = "https://bu55kxaqik.execute-api.us-east-1.amazonaws.com/task_master";
const data_post_url2 = "https://bu55kxaqik.execute-api.us-east-1.amazonaws.com/devops_resource_inventory_post/{event_object}";

const App = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);
  

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const {data } = await axios.get(baseURL);
    console.log(data.result)
    setPosts(data.result);
  };


  const putData = async (event)=>{
    // await axios.get(postURL,{event});
    const { data } = await axios.get( data_post_url2 ,{
      params: {
        event_obj: JSON.stringify( event )
      }
    } );
    
    // await axios.post(postURL,{event}).then(function (response) {
    //   console.log("response" ,response);
    // });

  }

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
    console.log("yst" , posts);

  }, []);

  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            posts.splice(desI, 0, posts.splice(srcI, 1)[0]);
            List.saveList(posts);
            console.log("drag" , JSON.stringify(posts));
            
            putData(posts)


          }
        }}
      >
        <ListContainer>
          <h1>The List</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {posts.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <DragHandle {...provided.dragHandleProps} />
                        <span>{item.resource_type} Count ::{item.count}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );

  
};

export default App;