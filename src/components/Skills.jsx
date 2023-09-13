import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../states/userSlice";
import InputComponent from "./InputComponent";
import ButtonNextPrev from "./ButtonNextPrev";
import AddNew from "./AddNew";

const Skills = ({ currentPage }) => {
  const data = useSelector((state) => state.user.skills.data);
  const [skills, setSkills] = useState([{ name: "", rating: 0 }]);
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
  const handleNextClick = () => {
    console.log("Skills", skills);
    dispatch(
      updateSkills({
        data: skills,
        title: "Skills",
      })
    );
    currentPage("Completed");
  };
  const handlePrevClick = () => {
    console.log("Skills", skills);
    dispatch(
      updateSkills({
        data: skills,
        title: "Skills",
      })
    );
    currentPage("Projects");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-gray-100">
        Skills Info
      </h1>
      <div className="formContainer">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="grid sm:grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4 border border-1 border-inherit"
            >
              <InputComponent
                labelName={"Skill Name"}
                elname={"name"}
                value={skill.name}
                updateFunction={updateSkill}
                idx={idx}
              />
              <div className="formItem flex md:gap-0 lg:gap-1 px-1 md:px-3 lg:px-5 xl:px-10 items-center justify-between">
                <label className="mr-1 md:mr-5 font-semibold text-sm sm:text-sm md:text-lg">
                  Rating
                </label>
                <input
                  className="formInput text-sm md:text-lg px-2 sm:px-1 md:px-2 lg:px-3 py-1 w-1/2 sm:w-fit  lg:w-72 bg-slate-200  sm:text-sm"
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
        <AddNew add={addSkills} remove={removeSkills} lis={skills} />
        <ButtonNextPrev
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Skills;
