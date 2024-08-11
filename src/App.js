import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { lazy,useState,useEffect } from "react";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import Cookies from "js-cookie";
import './tailwind.css'

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));


function App() {


const [user, setUser] = useState(false)


useEffect(() => {
  const token =Cookies.get('token')
  if (!token) {       
    setUser(false)
  } else {
   
    setUser(true);
  }
}, []);

  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Route>

        {/* Public Route */}
        <Route path="/login" element={
          <ProtectedRoutes user={!user} redirect={"/"}>
            <Login setUser={setUser} />
          </ProtectedRoutes>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
