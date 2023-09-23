import { useEffect, useState } from 'react'
import PersonalInfo from '../components/formPages/PersonalInfo';
import Eductaion from '../components/formPages/Education';
import Course from '../components/formPages/Course';
import WorkHistory from '../components/formPages/WorkHistory';
import Projects from '../components/formPages/Projects';
import Skills from '../components/formPages/Skills';
import Links from '../components/formPages/Links';
import { useDispatch, useSelector } from 'react-redux';
import ResumeName from '../components/formPages/ResumeName';

const ResumeForm = () => {
  const data = useSelector((state) => state.user.resumeData);
  const user_id = useSelector((state) => state.user.currentUser.uid);
  const resume_name = useSelector((state) => state.user.resumeName);
  const dispatch = useDispatch();
  
  const template_name = useSelector((state) => state.user.templateName);
    const [currentPage, setCurrentPage] = useState("ResumeName");
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
        return <Projects currentPage={setCurrentPage}/>;
      } else if (currentPage == "Skills") {
        return <Skills currentPage={setCurrentPage} />;
      } else if (currentPage == "Links") {
        return <Links currentPage={setCurrentPage} />;
      }else if(currentPage == "ResumeName"){
        return <ResumeName currentPage={setCurrentPage} />;
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