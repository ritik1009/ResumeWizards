import PDFFile from "./formTemplate/PDFFile_dict";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateResumeData } from "../states/userSlice";
const ResumeButton = ({data}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = ()=>{
      if(data){
        dispatch(updateResumeData({data:data.resume}))
      }else{
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
      }
      navigate("/resumeForm");
    }
  return (
    <div className="h-60 w-52 bg-[#dee2e6] rounded-lg flex justify-center items-center cursor-pointer" onClick={handleClick}>
      {!data?
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>:<p>{data.name}</p>}
    </div>
  );
}

export default ResumeButton