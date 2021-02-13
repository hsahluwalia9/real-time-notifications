import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';

function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:5000');
    socket.on("PUSH_NOTIFICATION", data => {
      setNotifications(data);
    });
    return () => socket.disconnect();
  }, []);
  return (
    <div className="App">
      <span>Your new notifications: {notifications.length}</span>
    </div>
  );
}

export default App;
