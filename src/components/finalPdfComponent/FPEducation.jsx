import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEductaion } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import DateInputComponent from "./elements/DateInputComponent";
import AddNew from "./elements/AddNew";
import Save from "./elements/Save";
import { updateDocument } from "../../Firebase/firestore";
import { toast } from "react-toastify";

const FPEductaion = () => {
  const data = useSelector((state) => state.user.resumeData.education.data);
  const doc_id = useSelector((state) => state.user.id);
  const resume_data = useSelector((state) => state.user.resumeData);
  const [extand, setExtand] = useState(true);
  const dispatch = useDispatch();
  const [education, setEducation] = useState([
    {
      degree: "",
      subject: "",
      collegeName: "",
      start_date: "",
      end_date: "",
      city: "",
      marks: "",
    },
  ]);
  useEffect(()=>{
    if(data.length){
      setEducation(()=>[...data]);
    }
  },[])
  const addSkills = () => {
    setEducation((prevState) => [
      ...prevState,
      {
        degree: "",
        subject: "",
        collegeName: "",
        start_date: "",
        end_date: "",
        city: "",
        marks: "",
      },
    ]);
  };
  const removeSkills = () => {
    setEducation(() => {
      return education.slice(0, -1);
    });
  };
  const updateEducations = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(education));
    newArray[key.idx][e.target.name] = e.target.value;
    setEducation(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  
  const handleClick = () => {
    dispatch(
      updateEductaion({
        data: education,
        title: "Education",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.education = {
      data: education,
      title: "Education",
    };

    updateDocument(doc_id, { resume: new_resume_data });
    toast.success("Data has been updated");
  };
  return (
    <div className="form shadow-lg  w-[98%] sm:w-[90%]">
      <h1 className=" text-2xl sm:text-3xl  font-bold  align-middle text-start pl-4 sm:pl-10 py-2 sm:py-5 bg-green-400 text-gray-100 flex justify-between">
        Education Info
        <span
          className="h-9 w-9 inline-block mr-5 transition-all duration-150"
          onClick={() => {
            setExtand(!extand);
          }}
        >
          {extand ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
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
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </span>
      </h1>
      <div className={(extand ? "block" : "hidden") + " formContainer "}>
        {education.map((work, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit pl-4 sm:pl-10 sm:pt-4"
            >
              <InputComponent
                labelName={"Degree"}
                elname={"degree"}
                value={work.degree}
                updateFunction={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"Subjects"}
                elname={"subject"}
                value={work.subject}
                updateFunction={updateEducations}
                idx={idx}
              />

              <InputComponent
                labelName={"College Name"}
                elname={"collegeName"}
                value={work.collegeName}
                updateFunction={updateEducations}
                idx={idx}
              />

              <InputComponent
                labelName={"City"}
                elname={"city"}
                value={work.city}
                updateFunction={updateEducations}
                idx={idx}
              />
              <DateInputComponent
                labelName={"Start date"}
                elname={"start_date"}
                value={work.start_date}
                updateFunction={updateEducations}
                idx={idx}
              />
              <DateInputComponent
                labelName={"End date"}
                elname={"end_date"}
                value={work.end_date}
                updateFunction={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"Marks"}
                elname={"marks"}
                value={work.marks}
                updateFunction={updateEducations}
                idx={idx}
              />
            </div>
          );
        })}
        <div className="pl-4 sm:pl-10">
          <AddNew add={addSkills} remove={removeSkills} lis={education} />
        </div>

        <div className="flex justify-center sm:justify-start pb-3">
          <Save handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default FPEductaion;
