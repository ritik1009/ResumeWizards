// import PDFFile from "./formTemplate/PDFFile_dict";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateId, updateResumeData, updateResumeName } from "../../states/userSlice";
import { useState } from "react";
import Template_1 from './../formTemplate/Template_1';
const ResumeButton = ({data}) => {
    const [options,setOptions] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();

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

    // Editing the Pdf
    const editFunc = ()=>{
      console.log("The data of 0-------",data)
      dispatch(updateResumeData({ data: data.resume }));
      dispatch(updateResumeName({resumeName:data.name,templateName:data.templateName}));
      dispatch(updateId({id:data.id}))
      navigate("/finalpdf");
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
                className="h-full w-full flex justify-center items-center overflow-hidden font-bold"
                onClick={editFunc}
              >
                Edit
              </div>
            </div>
          )}
        </p>
      )}
    </div>
  );
}

export default ResumeButton