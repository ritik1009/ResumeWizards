import PDFFile from "./formTemplate/PDFFile_dict";
import { useNavigate } from "react-router-dom";

const ResumeButton = () => {
    let navigate = useNavigate();
    const handleClick = ()=>{

    }
  return (
    <div className="h-60 w-52 bg-[#dee2e6] rounded-lg flex justify-center items-center cursor-pointer" onClick={()=>navigate("/resumeForm")}>
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
      </svg>
    </div>
  );
}

export default ResumeButton