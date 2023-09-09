import { useState } from 'react';
import './App.css'
import Eductaion from './components/Education';
import PersonalInfo from './components/PersonalInfo'

function App() {
  const [currentPage,setCurrentPage] = useState("PersonalInfo")
  function page(){
    if (currentPage == "PersonalInfo") {
      return (
        <PersonalInfo
          currentPage={setCurrentPage}
        />
      );
    }else if(currentPage == "Education"){
      return (
        <Eductaion
          currentPage={setCurrentPage}
        />
      );
    }
  }
  return (
    <>
      <div className="formContainer mx-aut h-min-screen flex items-center justify-center">
        <div className=" opacity-1">
          {page()}
        </div>
      </div>
    </>
  );
}

export default App
