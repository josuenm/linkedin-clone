import "./App.scss";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Widget } from "./components/Widget";
import { Publish } from "./components/Publish";
import { Login } from "./components/Login"
import { Register } from "./components/Register"

import { useDispatch } from "react-redux";
import { loggout, login} from "./features/userSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firebase"
import { useEffect, useState } from "react";


function App() {

  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  useEffect(() =>  {
    
    auth.onAuthStateChanged((userAuth) => {

      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

        setUser(true)
      } else {
        // user is not logged in
        dispatch(loggout())
        setUser(false)
      }
    })
    
  },[dispatch])

  // Check if user is logged in and redirect to login page or feed page
  if(user === true) {
    if(window.location.pathname !== '/feed') window.location.pathname = '/feed'
  } else if(user === false) {
    if(window.location.pathname !== '/login' && window.location.pathname !== '/register') {
      window.location.pathname = '/login'
    }
  }

  // Check if user is logged in
  if(user) {

    // IS LOGGED IN!
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Publish />
            <div className="app__body">
              <Sidebar />
              <div className="body__container">
                <Routes>
                  <Route path="/feed" element={<Feed />} />
                </Routes>
                <Widget />
              </div>
            </div>
        </div>
      </BrowserRouter>
    )
  } else {

    // NOT LOGGED IN!
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
