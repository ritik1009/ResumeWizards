import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Template_1 from './formTemplate/Template_1'
import FPPersonalInfo from './finalPdfComponent/FPPersonalInfo';
import FPLink from './finalPdfComponent/FPLink';
import FPEductaion from './finalPdfComponent/FPEducation';
import FPWorkHistory from './finalPdfComponent/FPWorkHistory';
import FPCourse from './finalPdfComponent/FPCourse';
import FPProjects from './finalPdfComponent/FPProjects';
import FPSkills from './finalPdfComponent/FPSkills';
import { useSelector } from "react-redux";

const FinalPdf = () => {
  const data = useSelector((state) => state.user.resumeData);
  return (
    <div>
      <div className="flex gap-3">
        <div className="w-3/4 grid gap-y-2 overflow-y-scroll h-screen">
          <FPPersonalInfo />
          <FPLink />
          <FPEductaion />
          <FPWorkHistory />
          <FPCourse />
          <FPProjects />
          <FPSkills />
        </div>
        <div className="bg-green-400 w-1/2 sm:w-full h-screen">
          <PDFViewer showToolbar={false} className="w-full h-screen bg-black">
            <Template_1 data={data} />
          </PDFViewer>
        </div>
      </div>
      <PDFDownloadLink
        document={<Template_1 data={data} />}
        fileName="Resume.pdf"
        className="mt-4"
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <p className="w-full bg-green-500 text-xl p-3 text-white mt-4 text-center font-bold">
              Loading document...
            </p>
          ) : (
            <p className="w-full bg-green-500 text-xl p-3 text-white mt-4 text-center font-bold">Download now!</p>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default FinalPdf