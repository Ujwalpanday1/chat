import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { lazy,useState,useEffect } from "react";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import './tailwind.css'
import { loadChat } from "./services/apiServices";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));


function App() {


const [isVerified, setisVerified] = useState(false)
useEffect(() => {
  // Fetch user data only on component mount
  const fetchUserData = async () => {
    const userData = await loadChat();
    if(userData){
      setisVerified(true)
    }
    else
    setisVerified(false)
  };

  fetchUserData();
}, []);
  

  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes isVerified={isVerified} />}>
          <Route path="/" element={<Home setisVerified={setisVerified}/>} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Route>

        {/* Public Route */}
        <Route path="/login" element={
          <ProtectedRoutes isVerified={!isVerified} redirect={"/"}>
            <Login setUser={setisVerified} />
          </ProtectedRoutes>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
