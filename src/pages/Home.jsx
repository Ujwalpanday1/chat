
    import React, { useState } from 'react';
    import { searchSuggestion } from '../services/apiServices';
    const Home = ({  chatArray = [
      { _id: '1', fName: 'John', lName: 'Doe' },
      { _id: '2', fName: 'Jane', lName: 'Smith' },
      { _id: '3', fName: 'Alice', lName: 'Johnson' },
      { _id: '4', fName: 'Bob', lName: 'Williams' },
      { _id: '5', fName: 'Charlie', lName: 'Brown' },
    ]
     }) => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedContact, setSelectedContact] = useState(null);
      const [searchedResult,setSearchedResult]=useState([]);
    
      const handleSearchSuggestion=async(e)=>{
        setSearchTerm(e.target.value)
        if (e.target.value.trim() === '') {
          setSearchedResult([]); 
        }
        else{
          
          let data=await searchSuggestion(e.target.value);
          setSearchedResult(data)
          console.log(searchedResult)
        }
         
      }

      const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log('Searching for:', searchTerm);
      };
    
      const selectContact = (id) => {
        setSelectedContact(id);   
        // Handle contact selection logic
        console.log('Selected Contact ID:', id);
      };
    
      return (
        <div className='bg-gradient-to-r from-gray-400 to-gray-200 flex justify-center items-center min-h-screen'>
          <div className="flex flex-col h-[85vh] bg-white rounded-lg shadow-[0_10px_20px_rgba(255,0,0,0.5)] p-6 w-full max-w-6xl">
            <div className="top bg-gray-400 p-4 rounded-t-lg flex justify-between items-center flex-col sm:flex-row">
              <label className="text-white text-lg font-semibold">Welcome</label>
              <form className="searchForm flex items-center relative mt-2 sm:mt-0" onSubmit={handleSearch} id="searchForm">
                <input
                  className="p-2 rounded-l-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchSuggestion}
                  id="searchBox"
                  name="user"
                />
                <button type="submit" id="searchBtn" className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
                <div className="searchResult absolute bg-gray-700 text-white mt-24 rounded-lg shadow-lg w-full">
                  {
                    searchedResult.map((user)=>(
                      <button class=" bg-gray-300 w-full text-left text-blue-500 rounded hover:text-blue-700 p-4 border" 

                      onClick={() =>  { 
                        console.log("hey q");
                        selectContact(user._id)
                       }}>

                      {user.fName} {user.lName}
                  </button>
                    ))
                  }
                </div>
              </form>
            </div>
            <div className="main flex flex-col lg:flex-row flex-grow">
              <div className="sidebar bg-gray-200 w-full lg:w-1/4 p-4 flex flex-col  rounded-l-lg overflow-y-auto">
                <div className="sidebar-header mb-4 ">
                  <h2 className="text-gray-700 text-lg font-semibold">Contacts</h2>
                </div>
                <div className="flex-grow h-2 overflow-y-auto">
                  {chatArray.map((user) => (
                    <div key={user._id} className="contact flex items-center mb-4 p-2 bg-white rounded-lg shadow-md">
                      <img src="avatar.jpg" alt="Avatar" className="rounded-full w-12 h-12" />
                      <form className="flex-grow ml-4" onSubmit={(e) => { e.preventDefault(); selectContact(user._id); }}>
                        <button type="submit" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">
                          {user.fName} {user.lName}
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              </div>
              <div id="chat-area" className="flex-1 bg-gray-50 p-6 rounded-r-lg flex flex-col justify-between mt-4 lg:mt-0">
                {/* Chat area content goes here */}
                {selectedContact ? (
                  <p>Chat with: {selectedContact}</p>
                ) : (
                  <p>Select a contact to start chatting</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Home;
    
