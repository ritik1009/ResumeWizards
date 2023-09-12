import { useState } from "react";
import "./App.css";
import Eductaion from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Course from "./components/Course";
import WorkHistory from "./components/WorkHistory";
import Projects from './components/Projects';
import Skills from "./components/Skills";
import PDFFile from "./components/formTemplate/PDFFile_dict";
import ReactPDF, { Link } from "@react-pdf/renderer";
import Links from "./components/Links";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

function App() {
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
      return <PDFFile />;
    } else if (currentPage == "Links") {
      return <Links currentPage={setCurrentPage} />;
    }
  }
  return (
    <>
      <div className="formContainer mx-aut h-min-screen flex items-center justify-center">
        <div className="opacity-1 w-11/12">{page()}</div>
      </div>
    </>
  );
}

export default App;
