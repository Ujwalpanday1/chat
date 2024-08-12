import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, useState, useEffect } from "react";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import './tailwind.css';
import { loadChat } from "./services/apiServices";
import LoadingPage from "./pages/LoadingPage";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await loadChat();
      if (userData) {
        setIsVerified(true);
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <LoadingPage/>; 
  }

  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes isVerified={isVerified} />}>
          <Route path="/" element={<Home setIsVerified={setIsVerified} />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Route>

        {/* Public Route */}
        <Route path="/login" element={<Login setIsVerified={setIsVerified} />} />
      </Routes>
    </Router>
  );
}

export default App;
