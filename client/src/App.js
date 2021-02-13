import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/notifications', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setNotifications(response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <span>Your new notifications: {notifications.length}</span>
    </div>
  );
}

export default App;
