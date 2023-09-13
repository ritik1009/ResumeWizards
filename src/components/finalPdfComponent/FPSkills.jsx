import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import AddNew from "./elements/AddNew";
import Save from "./elements/Save";

const FPSkills = () => {
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
  const handleClick = () => {
    console.log("Skills", skills);
    dispatch(
      updateSkills({
        data: skills,
        title: "Skills",
      })
    );
  };
  return (
    <div className="form shadow-lg pb-8 w-[90%]">
      <h1 className="text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Skills Info
      </h1>
      <div className="formContainer">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit"
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
        <AddNew add={addSkills} remove={removeSkills} lis={skills} />
        <Save handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FPSkills;
