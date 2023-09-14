import React, { useState } from 'react'
import PersonalInfo from '../components/PersonalInfo';
import Eductaion from '../components/Education';
import Course from '../components/Course';
import WorkHistory from '../components/WorkHistory';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import FinalPdf from '../components/FinalPdf';
import Links from '../components/Links';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResumeForm = () => {
    const [currentPage, setCurrentPage] = useState("PersonalInfo");
    function page() {
      if (currentPage == "PersonalInfo") {
        return <PersonalInfo currentPage={setCurrentPage} />;
      } else if (currentPage == "Education") {
        return <Eductaion currentPage={setCurrentPage} />;
      } else if (currentPage == "Course") {
        return <Course currentPage={setCurrentPage} />;
      } else if (currentPage == "WorkHistory") {
        return <WorkHistory currentPage={setCurrentPage} />;
      } else if (currentPage == "Projects") {
        return <Projects currentPage={setCurrentPage} />;
      } else if (currentPage == "Skills") {
        return <Skills currentPage={setCurrentPage} />;
      } else if (currentPage == "Completed") {
        return <FinalPdf />;
      } else if (currentPage == "Links") {
        return <Links currentPage={setCurrentPage} />;
      }
    }
  return (
    <div className="">
      <div className="formContainer mx-aut h-min-screen flex items-center justify-center">
        <div className=" w-11/12">{page()}</div>
      </div>
    </div>
  );
}

export default ResumeForm