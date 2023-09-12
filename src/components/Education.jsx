import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEductaion } from "../states/userSlice";
import InputComponent from "./InputComponent";
import ButtonNextPrev from "./ButtonNextPrev";
import DateInputComponent from "./DateInputComponent";
import AddNew from "./AddNew";

const Eductaion = ({currentPage}) => {
  const data = useSelector((state) => state.user.education.data);
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
  
  const handleNextClick = () => {
    dispatch(
      updateEductaion({
        data: education,
        title: "Education",
      })
    );
    currentPage('Course')

  };
  const handlePrevClick = () => {
    dispatch(
      updateEductaion({
        data: education,
        title: "Education",
      })
    );
    currentPage("Links");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className=" text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-gray-100">
        Education Info
      </h1>
      <div className="formContainer ">
        {education.map((work, idx) => {
          return (
            <div
              key={idx}
              className="grid sm:grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4 border border-1 border-inherit"
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
                placeholder={"collegeName"}
                elname={work.collegeName}
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
      </div>
      <AddNew add={addSkills} remove={removeSkills} lis={education} />
      <ButtonNextPrev
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </div>
  );
};

export default Eductaion;
