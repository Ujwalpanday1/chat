

import axios from "axios";

const backendUri="http://localhost:5000/getUser/"
const searchSuggestion=async(name)=>{
    try {
        const response = await axios.get(`${backendUri}${name}`);
        return response.data; // Return the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null or handle the error as needed
      }
    
}

const loadChat=()=>{

}
export {searchSuggestion,loadChat}