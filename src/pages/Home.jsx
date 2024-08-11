import React, { useEffect, useState ,useRef} from 'react';
import { loadChat, loadMsg, searchSuggestion } from '../services/apiServices';
import { io } from 'socket.io-client';
import avatar from '../assets/avatar.jpg';

const socket = io('http://localhost:5000');

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typedMsg, setTypedMsg] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchedResult, setSearchedResult] = useState([]);
  const [chatArray, setChatArray] = useState([]);
  const [user, setUser] = useState(null);
  const [msgData, setMsgData] = useState([]);
  const messagesEndRef=useRef(null)
  useEffect(()=>{
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  },[msgData])

  useEffect(() => {
    // Fetch user data only on component mount
    const fetchUserData = async () => {
      const userData = await loadChat();
      socket.emit('login', { userid: userData.user._id });
      setChatArray(userData.chatArray);
      setUser(userData.user);
    };

    fetchUserData();
  }, []);

  useEffect(()=>{
     
     socket.on('receivePrivateMsg', (data) => {
      
      if (user&&(data.sender==selectedContact._id)) {

          const newMessage = {
          receiver: user._id,
          sender: data.sender,
          message: data.message,
        };
        
        setMsgData((previousMsgData) => [...previousMsgData, newMessage]);
      }
    });
    return () => {
      socket.off('receivePrivateMsg');
    };
  },[user,selectedContact])
  


  const handleSearchSuggestion = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === '') {
      setSearchedResult([]);
    } else {
      const data = await searchSuggestion(e.target.value);
      setSearchedResult(data);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if(typedMsg!=''){
       
    if (!selectedContact || !user) return;

    socket.emit('privateMsg', { data: { sender: user._id, receiver: selectedContact._id, message: typedMsg } });

    const newMessage = {
      receiver: selectedContact._id,
      sender: user._id,
      message: typedMsg,
    };

    setTypedMsg('');
    setMsgData((previousMsgData) => [...previousMsgData, newMessage]);
    }
   
  };

  const selectContact = async (contact) => {
    const data = await loadMsg(contact._id);
    setTypedMsg('');
    setSearchTerm('');
    setSearchedResult([])
    setMsgData(data.messageArray);
    setSelectedContact(contact);
  };
    
      return (
        <div className='bg-gradient-to-r from-gray-400 to-gray-200 flex justify-center items-center min-h-screen'>
          <div className="flex flex-col h-[85vh] bg-gradient-to-r from-gray-400 to-gray-200 rounded-lg shadow-[0_10px_20px_rgba(255,0,0,1)] p-6 w-full max-w-6xl">
            <div className="top bg-gradient-to-r from-gray-400 to-gray-200 p-4 rounded-t-lg flex justify-between items-center flex-col sm:flex-row">
              <label className="text-white text-lg font-semibold">Welcome</label>
              <form className="searchForm flex items-center relative mt-2" onSubmit={handleSearch} id="searchForm">
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
                <div className="searchResult absolute bg-gray-700 text-white top-11 rounded-lg shadow-lg w-full">
                  {
                    searchedResult.map((user)=>(
                      <button key={user._id} className=" bg-gray-300 w-full text-left text-blue-500 rounded hover:text-blue-700 p-4 border" 

                      onClick={() =>  {
                        console.log("hey q");
                        selectContact(user)
                       }}>
                      {user.fName} {user.lName}
                  </button>
                    ))
                  }
                </div>
              </form>
            </div>
            <div className="main flex flex-row flex-grow w-full">
              <div className="sidebar bg-gray-100 h-full w-1/4 p-4 flex flex-col  rounded-l-lg overflow-y-auto">
                <div className="sidebar-header mb-4 ">
                  <h2 className="text-gray-700 text-lg font-semibold">Contacts</h2>
                </div>
                <div className="flex-grow h-2 overflow-y-auto">
                  {chatArray.map((user) => (
                    <div key={user._id} className="contact flex items-center mb-4 p-2 bg-white rounded-lg shadow-xl">
                      <img src={avatar} alt="Avatar" className="rounded-full w-12 h-12" />
                      <form className="flex-grow ml-4" onSubmit={(e) => { e.preventDefault(); selectContact(user); }}>
                        <button type="submit" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">
                          {user.fName} {user.lName}
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              </div>
              <div id="chat-area" className=" bg-gradient-to-r from-gray-200 to-white p-6 rounded-r-lg flex flex-col flex-grow w-2 lg:mt-0">
                {selectedContact ? (
                  <div className='flex flex-grow flex-col '>
                  <p>Chat with: {selectedContact.fName}</p>
                  <div className='flex-grow flex flex-col h-1 overflow-y-auto  mt-2 mb-2'>
                    {msgData.map((msg)=>(

                        msg.sender === user._id?(
                        <div key={msg._id} className='bg-gray-300 m-4 p-3 self-end rounded w-fit break-words max-w-[60%] ' >{msg.message}</div>
                        ):(
                        <div key={msg._id} className='bg-gray-300 m-4 p-3  rounded w-fit break-words max-w-[60%] ' >{msg.message}</div>
                        )
                ))} 
                <div ref={messagesEndRef}></div>
                  </div>
                  <form className="searchForm flex items-center relative mt-2 sm:mt-0 w-full" onSubmit={handleSend} id="searchForm">
                <input
                  className="p-2 grow rounded-l-lg border bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Type your msg here"
                  value={typedMsg}
                  onChange={(e)=>setTypedMsg(e.target.value)}
                  id="msgBox"
                  name="msg"
                />
                <button type="submit" id="sendBtn" className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </form>
                  </div>
                  
               
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
    
