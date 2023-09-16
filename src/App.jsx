import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import ResumeForm from "./pages/ResumeForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Templates from "./pages/Templates";

function App() {
  return (
      <Router>
        <div className="min-h-screen flex justify-between flex-col">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/resumeForm" element={<ResumeForm /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SingUp />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
          <div className="self-end">
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
