import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkHistory } from '../../states/userSlice';
import InputComponent from './elements/InputComponent';
import DateInputComponent from './elements/DateInputComponent';
import TextInputComponent from './elements/TextInputComponent';
import AddNew from './elements/AddNew';
import Save from './elements/Save';
import { updateDocument } from '../../Firebase/firestore';

const FPWorkHistory = () => {
  const data = useSelector((state) => state.user.resumeData.work_History.data);
  const doc_id = useSelector((state) => state.user.id);
  const resume_data = useSelector((state) => state.user.resumeData);
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
  const handleClick = () => {
    dispatch(
      updateWorkHistory({
        data: workHistory,
        title: "Employment History",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.work_History = workHistory;

    updateDocument(doc_id, { resume: new_resume_data });
  };
  return (
    <div className="form shadow-lg pb-8 w-[90%]">
      <h1 className="text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Work Experince
      </h1>
      <div className="formContainer">
        {workHistory.map((work, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit"
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
        <Save handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FPWorkHistory