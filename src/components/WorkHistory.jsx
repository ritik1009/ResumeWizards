import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkHistory } from '../states/userSlice';
import InputComponent from './InputComponent';
import DateInputComponent from './DateInputComponent';
import TextInputComponent from './TextInputComponent';
import AddNew from './AddNew';
import ButtonNextPrev from './ButtonNextPrev';

const WorkHistory = ({ currentPage }) => {
  const data = useSelector((state) => state.user.resumeData.work_History.data);
  const [workHistory, setWorkHistory] = useState([
    {
      position: "",
      companyName: "",
      location: "",
      start_date: "",
      end_date: "",
      description: "",
    },
  ]);
  const addSkills = () => {
    setWorkHistory((prevState) => [
      ...prevState,
      {
        position: "",
        companyName: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
      },
    ]);
  };
  useEffect(() => {
    if (data.length) {
      setWorkHistory(() => [...data]);
    }
  }, []);
  const removeSkills = () => {
    setWorkHistory(() => {
      return workHistory.slice(0, -1);
    });
  };
  const updateWork = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(workHistory));
    newArray[key.idx][e.target.name] = e.target.value;
    setWorkHistory(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  const dispatch = useDispatch();
  const handleNextClick = () => {
    dispatch(
      updateWorkHistory({
        data: workHistory,
        title: "Employment History",
      })
    );
    currentPage("Projects");
  };
  const handlePrevClick = () => {
    dispatch(
      updateWorkHistory({
        data: workHistory,
        title: "Employment History",
      })
    );
    currentPage("Course");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-gray-100">
        Work Experince
      </h1>
      <div className="formContainer">
        {workHistory.map((work, idx) => {
          return (
            <div
              key={idx}
              className="grid sm:grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4 border border-1 border-inherit"
            >
              <InputComponent
                labelName={"Position"}
                elname={"position"}
                value={work.position}
                updateFunction={updateWork}
                idx={idx}
              />
              <InputComponent
                labelName={"Company Name"}
                elname={"companyName"}
                value={work.companyName}
                updateFunction={updateWork}
                idx={idx}
              />
              <InputComponent
                labelName={"Loaction"}
                elname={"location"}
                value={work.location}
                updateFunction={updateWork}
                idx={idx}
              />
              <DateInputComponent
                labelName={"Start date"}
                elname={"start_date"}
                value={work.start_date}
                updateFunction={updateWork}
                idx={idx}
              />
              <DateInputComponent
                labelName={"End Date"}
                elname={"end_date"}
                value={work.end_date}
                updateFunction={updateWork}
                idx={idx}
              />
              {/* <label>Description</label>
              <input
                className="formInput"
                type="text"
                placeholder={"Description"}
                name="description"
                value={work.description}
                onChange={(e) => updateWork(e, { idx })}
              /> */}
              <TextInputComponent
                labelName={"Description"}
                elname={"description"}
                value={work.description}
                updateFunction={updateWork}
                idx={idx}
              />
            </div>
          );
        })}
        <AddNew add={addSkills} remove={removeSkills} lis={workHistory} />
        <ButtonNextPrev
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default WorkHistory