// import PDFFile from "./formTemplate/PDFFile_dict";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateResumeData } from "../states/userSlice";
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Template_1 from "./formTemplate/Template_1";
const ResumeButton = ({data}) => {
    const [options,setOptions] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("Inside Resume Button 1")

    // Handle the hover effect
    const changeBcakground = (e)=>{
      e.target.style.background = "gray"
      e.target.style.color = "white"
    }
    const defaultColor = (e) => {
      e.target.style.background = "transparent";
      e.target.style.color = "black";
    };
    

    // Handeling the duplicate function
    const duplicateFunc = ()=>{
      dispatch(updateResumeData({ data: data.resume }));
      navigate("/resumeForm");
    }


    // craeting a new blank resume
    const handleClick = ()=>{
        dispatch(
          updateResumeData({
            data: {
              personalInfo: {
                firstName: "",
                lastName: "",
                job_position: "",
                phone_number: "",
                email_address: "",
                city: "",
                country: "",
                summary: "",
              },
              links: {
                title: "Links",
                data: {},
              },
              skills: {
                title: "Skills",
                data: [],
              },
              work_History: {
                title: "Employment history",
                data: [],
              },
              Projects: {
                title: "Projects",
                data: [],
              },
              education: {
                title: "Education",
                data: [],
              },
              course: {
                title: "Course",
                data: [],
              },
            },
          })
        );
      navigate("/resumeForm");
    }
  return (
    <div
      className="h-60 w-52 bg-[#dee2e6] rounded-lg flex justify-center items-center cursor-pointer"
      // onClick={handleClick}
    >
      {!data ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <p
          className="h-full w-full flex justify-center items-center font-bold"
          onClick={() => {
            setOptions(!options);
          }}
        >
          {!options ? (
            data.name
          ) : (
            <div className="flex flex-col justify-evenly items-center  h-full w-full overflow-hidden rounded-lg">
              <div
                onMouseEnter={changeBcakground}
                onMouseLeave={defaultColor}
                className="h-full w-full flex justify-center items-center font-bold overflow-hidden"
                onClick={duplicateFunc}
              >
                Duplicate
              </div>
              <div
                onMouseEnter={changeBcakground}
                onMouseLeave={defaultColor}
                className="h-full w-full flex justify-center items-center overflow-hidden"
              >
                <PDFDownloadLink
                  document={<Template_1 data={data.resume} />}
                  fileName="Resume.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      <p className="w-full font-bold">Loading document...</p>
                    ) : (
                      <p className="w-full font-bold">Download now!</p>
                    )
                  }
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </p>
      )}
    </div>
  );
}

export default ResumeButton