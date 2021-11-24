

import axios from "axios";
import React from "react";
const baseURL = "https://bu55kxaqik.execute-api.us-east-1.amazonaws.com/task_master";


const List = {
  

  getList: async function () {


    let list = {};
     axios.get(baseURL).then(function(result){

      list = result.data.result;
      console.log("trump" ,list);
      

    });
    

    return list ;
      
  
  },
  saveList: (list) => {
    localStorage.setItem("theList", JSON.stringify(list));
  },
};

export default List;




// return axios.get(baseURL).then((response) => {
      
//   // console.log(response.data.result);
//   return response.data.result
// });
