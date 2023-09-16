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
import { useSelector } from 'react-redux';
import { addResume } from '../Firebase/firestore';

const ResumeForm = () => {
  const data = useSelector((state) => state.user.resumeData);
  const user_id = useSelector((state) => state.user.currentUser.uid);
    const [currentPage, setCurrentPage] = useState("PersonalInfo");
    async function page() {
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
        await addResume(user_id, "demo", data);
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