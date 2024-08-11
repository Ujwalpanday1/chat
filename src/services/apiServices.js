

import axios from "axios";

const backendUri="http://localhost:5000/"
const searchSuggestion=async(name)=>{
    try {
        const response = await axios.get(`${backendUri}getUser/${name}`);
        return response.data; // Return the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return null or handle the error as needed
      }
    
}

const loadChat=async()=>{
  try{
    const response=await axios.get(`${backendUri}`,{withCredentials:true})
    const data=response.data;
    return data;
  }
  catch(err){
    //make then reload again
    console.log(err)
  }
}

const loadMsg=async(id)=>{
  try{
      const response=await axios.get(`${backendUri}select/${id}`,{withCredentials:true})
      const data=response.data
      return data;
  }
  catch(err){
    console.log(err)
  }
}
export {searchSuggestion,loadChat,loadMsg}