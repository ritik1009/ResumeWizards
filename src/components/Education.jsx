import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEductaion } from "../states/userSlice";
import InputComponent from "./InputComponent";

const Eductaion = (currentPage) => {
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
  const updateEducations = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(education));
    newArray[key.idx][e.target.name] = e.target.value;
    setEducation(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateEductaion({
        data: education,
        title: "Education",
      })
    );
    currentPage('')

  };
  return (
    <div className="form shadow-lg">
      <h1 className="text-4xl font-bold mb-8 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Education Info
      </h1>
      <div className="formContainer ">
        {education.map((work, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4"
            >
              <InputComponent
                labelName={"Degree"}
                placeholder={"degree"}
                value={education.degree}
                updateEducations={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"Subjects"}
                placeholder={"subjects"}
                value={education.subject}
                updateEducations={updateEducations}
                idx={idx}
              />

              <InputComponent
                labelName={"College Name"}
                placeholder={"collegeName"}
                value={education.collegeName}
                updateEducations={updateEducations}
                idx={idx}
              />

              <InputComponent
                labelName={"City"}
                placeholder={"city"}
                value={education.city}
                updateEducations={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"Start date"}
                placeholder={"start_date"}
                value={education.start_date}
                updateEducations={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"End date"}
                placeholder={"end_date"}
                value={education.end_date}
                updateEducations={updateEducations}
                idx={idx}
              />
              <InputComponent
                labelName={"Marks"}
                placeholder={"marks"}
                value={education.marks}
                updateEducations={updateEducations}
                idx={idx}
              />
            </div>
          );
        })}
        </div>
        <button className="addSkill" onClick={addSkills}>
          Add More Degree
        </button>
        < div className="buttonsNextPrev">
          <button>Prev</button>
          <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
};

export default Eductaion;
