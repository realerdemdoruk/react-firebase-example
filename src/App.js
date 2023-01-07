import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { auth } from './firabase';
import Home from './components/Home';
// import { initializeApp } from 'firebase/app';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <Home user={user} /> : <Login setUser={setUser} />}</div>;
}

export default App;
