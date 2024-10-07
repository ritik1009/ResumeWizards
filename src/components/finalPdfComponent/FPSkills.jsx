import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import AddNew from "./elements/AddNew";
import Save from "./elements/Save";
import { updateDocument } from "../../Firebase/firestore";
import { toast } from "react-toastify";

const FPSkills = () => {
  const data = useSelector((state) => state.user.resumeData.skills.data);
  const [skills, setSkills] = useState([{ name: "", rating: 0 }]);
  const resume_data = useSelector((state) => state.user.resumeData);
  const doc_id = useSelector((state) => state.user.id);
  const [extand, setExtand] = useState(true);
  const addSkills = () => {
    setSkills((prevState) => [...prevState, { name: "", rating: 0 }]);
  };
  const removeSkills = () => {
    setSkills(() => {
      return skills.slice(0, -1);
    });
  };
  const updateSkill = (e, key) => {
    // let newArray = []
    // newArray = [...skills]
    let newArray = JSON.parse(JSON.stringify(skills));
    newArray[key.idx][e.target.name] = e.target.value;
    setSkills(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  useEffect(() => {
    if (data.length) {
      setSkills(() => [...data]);
    }
  }, []);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateSkills({
        data: skills,
        title: "Skills",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.skills = {
      data: skills,
      title: "Skills",
    };

    updateDocument(doc_id, { resume: new_resume_data });
    toast.success("Data has been updated");
  };
  return (
    <div className="form shadow-lg pb-0  w-[98%] sm:w-[90%]">
      <h1 className="text-2xl sm:text-3xl  font-bold align-middle text-start pl-4 sm:pl-10 py-2 sm:py-5 bg-green-400 text-gray-100 flex justify-between">
        Skills Info
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
      <div className={(extand ? "block" : "hidden") + " formContainer"}>
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit pl-4 sm:pl-10 sm:pt-4"
            >
              <InputComponent
                labelName={"Skill Name"}
                elname={"name"}
                value={skill.name}
                updateFunction={updateSkill}
                idx={idx}
              />
              <div className="formItem flex gap-1 md:gap-0  px-0 md:px-2 items-center justify-between">
                <label className="text-left whitespace-nowrap text-ellipsis overflow-hidden mr-1 w-1/3 md:w-auto md:mr-5 font-semibold text-xs sm:text-base ">
                  Rating
                </label>
                <input
                  className="formInput text-xs sm:text-base  px-2 sm:px-1 md:px-2 lg:px-3 py-1 w-2/4 sm:w-60  lg:w-60 bg-slate-200"
                  type="number"
                  placeholder={"5"}
                  name="rating"
                  min={0}
                  max={5}
                  value={skill.rating}
                  onChange={(e) => updateSkill(e, { idx })}
                />
              </div>
            </div>
          );
        })}
        <div className="pl-4 sm:pl-10">
          <AddNew add={addSkills} remove={removeSkills} lis={skills} />
        </div>
        <div className="flex justify-center sm:justify-start pb-3">
          <Save handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default FPSkills;
