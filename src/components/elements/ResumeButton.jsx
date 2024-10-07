// import PDFFile from "./formTemplate/PDFFile_dict";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateId, updateResumeData, updateResumeName } from "../../states/userSlice";
import { useState } from "react";
import { ContactPageOutlined } from "@mui/icons-material";
const ResumeButton = ({data}) => {
    const [options,setOptions] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();

    // Handle the hover effect
    const changeBcakground = (e)=>{
      // e.target.style.background = "green"
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
    console.log("The Dtaa",data);
  return (
    <div
      className="h-60 w-[95%] mx-auto sm:h-[17rem]  sm:w-56 bg-[#dee2e6] rounded-lg flex justify-center items-center cursor-pointer"
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
        <div
          className={
            " h-full w-full text-lg sm:text-lg flex justify-center items-center font-bold group bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg"
          }
          onClick={() => {
            setOptions(!options);
          }}
        >
          {!options ? (
            <div className="relative w-[100%] h-[100%] text-center flex justify-center items-center">
              <p className="scale-100 group-hover:scale-125 transition-all duration-150 z-5">
                {data.name}
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-evenly items-center hover:scale-10  h-full w-full overflow-hidden  rounded-lg relative transition-all duration-150">
              <div
                onMouseEnter={changeBcakground}
                onMouseLeave={defaultColor}
                className="h-full w-full flex justify-center items-center font-bold overflow-hidden  border-b-4 border-white transition-all duration-150"
                onClick={duplicateFunc}
              >
                Duplicate
              </div>
              <div
                onMouseEnter={changeBcakground}
                onMouseLeave={defaultColor}
                className="h-full w-full flex justify-center items-center overflow-hidden"
                onClick={editFunc}
              >
                <p className=" font-bold">Edit</p>
              </div>
              <div
                className="h-6 w-6 absolute right-0 top-0 m-0 hover:text-white hover:scale-125 hover:rotate-180 transition-all duration-150"
                onClick={() => {
                  setOptions(!options);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ResumeButton