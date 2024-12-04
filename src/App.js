import React, { useState, useEffect } from 'react';
import RealTimeGraph from './components/RealTimeGraph';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // Store logged-in user's name

  useEffect(() => {
    console.log("Updated userName in App:", userName);
  }, [userName]);

  const handleLoginSuccess = (userName) => {
    console.log("App-->", userName);
    setUserName(userName); // Set the logged-in user's name
    setIsLoggedIn(true); // Transition to the dashboard
  };
  return (
    <div className='App'>
      {isLoggedIn ? (
        <Dashboard userName={userName} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
