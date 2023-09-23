import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ResumeForm from "./pages/ResumeForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Templates from "./pages/Templates";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FinalPdf from "./components/formPages/FinalPdf";

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(()=>{
    console.log("Currrrrrrrrrrr",currentUser)
    if(Object.keys(currentUser).length>1){
      setLoggedIn(true)
    }
  },[currentUser])
  return (
    <Router>
      <div className="min-h-screen flex justify-between flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            exact
            index
            path="/home"
            element={loggedIn ? <Home /> : <Navigate replace to="/login" />}
          />

          <Route
            path="/resumeForm"
            element={
              loggedIn ? <ResumeForm /> : <Navigate replace to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SingUp />} />

          <Route
            path="/templates"
            element={
              loggedIn ? <Templates /> : <Navigate replace to="/login" />
            }
          />
          <Route
            path="/finalpdf"
            element={
              loggedIn ? <FinalPdf /> : <Navigate replace to="/login" />
            }
          />
        </Routes>
        <div className="self-end">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
