import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // State for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for signup
  const [fName, setFName] = useState('');
  const [lName,setLName]=useState('')


  
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Handle login logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Registering:", { fName,lName, email, password });
    // Handle signup logic here
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-white min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-white to-gray-200 shadow-[0_10px_20px_rgba(255,0,0,0.5)] rounded px-8 py-6  w-full max-w-md">
        {isLogin ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                </div>
                
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
              </div>
              <div className="text-center">
                <span className="text-gray-600">Don't have an account?</span>
                <button type="button" onClick={toggleLogin} className="text-blue-600 hover:underline ml-1">Sign Up</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter first your name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)} // Update name state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)} // Update name state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
              </div>
              <div className="text-center">
                <span className="text-gray-600">Already have an account?</span>
                <button type="button" onClick={toggleLogin} className="text-blue-600 hover:underline ml-1">Login</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
