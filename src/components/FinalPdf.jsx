import { PDFViewer } from '@react-pdf/renderer'
import PDFFile from './formTemplate/PDFFile_dict'
import FPPersonalInfo from './finalPdfComponent/FPPersonalInfo';
import FPLink from './finalPdfComponent/FPLink';
import FPEductaion from './finalPdfComponent/FPEducation';
import FPWorkHistory from './finalPdfComponent/FPWorkHistory';
import FPCourse from './finalPdfComponent/FPCourse';
import FPProjects from './finalPdfComponent/FPProjects';
import FPSkills from './finalPdfComponent/FPSkills';
import { useSelector } from "react-redux";

const FinalPdf = () => {
  const data = useSelector((state) => state.user);
  return (
    <div className="flex gap-3">
      <div className="w-3/4 grid gap-y-2 overflow-y-scroll h-screen">
        <FPPersonalInfo />
        <FPLink />
        <FPEductaion />
        <FPWorkHistory/>
        <FPCourse/>
        <FPProjects/>
        <FPSkills/>
      </div>
      <div className="bg-green-400 w-1/2 sm:w-full h-screen">
        <PDFViewer showToolbar={false} className="w-full h-screen bg-black">
          <PDFFile data={data}/>
        </PDFViewer>
      </div>
    </div>
  );
}

export default FinalPdf