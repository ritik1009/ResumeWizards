import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Template_1 from "../formTemplate/Template_1";
import FPPersonalInfo from "../finalPdfComponent/FPPersonalInfo";
import FPLink from "../finalPdfComponent/FPLink";
import FPEductaion from "../finalPdfComponent/FPEducation";
import FPWorkHistory from "../finalPdfComponent/FPWorkHistory";
import FPCourse from "../finalPdfComponent/FPCourse";
import FPProjects from "../finalPdfComponent/FPProjects";
import FPSkills from "../finalPdfComponent/FPSkills";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addResume } from "../../Firebase/firestore";
import { updateResume } from "../../states/userSlice";
import Template_2 from "../formTemplate/Template_2";
import Template_3 from "../formTemplate/tempalte_3";
import Template_4 from "../formTemplate/template_4";

const FinalPdf = () => {
  const data = useSelector((state) => state.user.resumeData);
  const user_id = useSelector((state) => state.user.currentUser.uid);
  const resume_name = useSelector((state) => state.user.resumeName);
  const template_name = useSelector((state) => state.user.templateName);
  const newResume = useSelector((state) => state.user.newResume);
  const dispatch = useDispatch();
  const templates = {
    template_1: <Template_1 data={data} />,
    template_2: <Template_2 data={data} />,
    template_3: <Template_3 data={data} />,
    template_4: <Template_4 data={data} />,
  };
  const selectedTemplate = () => {
    return templates["template_2"];
  };
  useEffect(() => {
    if (newResume) {
      addResume(user_id, resume_name, template_name, data, dispatch);
      dispatch(updateResume({ newResume: false }));
    }
  }, [user_id]);
  return (
    <div className=" w-[95%] mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-[100%] grid sm:gap-y-4 sm:overflow-y-scroll sm:h-screen">
          <FPPersonalInfo />
          <FPLink />
          <FPEductaion />
          <FPWorkHistory />
          <FPCourse />
          <FPProjects />
          <FPSkills />
        </div>
        <div className="bg-green-400 w-[99%] sm:w-full h-[30rem] sm:h-screen">
          <PDFViewer showToolbar={false} className="w-full h-[100%] sm:h-screen bg-black">
            {selectedTemplate()}
          </PDFViewer>
        </div>
      </div>
      <PDFDownloadLink
        document={selectedTemplate()}
        fileName="Resume.pdf"
        className="mt-4"
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <p className="w-full bg-green-500 text-xl p-3 text-white mt-4 text-center font-bold">
              Loading document...
            </p>
          ) : (
            <p className="w-full bg-green-500 text-xl p-3 text-white mt-4 text-center font-bold">
              Download now!
            </p>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default FinalPdf;
