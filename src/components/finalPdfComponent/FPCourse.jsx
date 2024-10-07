import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from '../../states/userSlice';
import InputComponent from "./elements/InputComponent";
import TextInputComponent from './elements/TextInputComponent';
import DateInputComponent from './elements/DateInputComponent';
import AddNew from './elements/AddNew';
import Save from './elements/Save';
import { updateDocument } from '../../Firebase/firestore';
import { toast } from 'react-toastify';

const FPCourse = () => {
  const data = useSelector((state) => state.user.resumeData.course.data);
  const resume_data = useSelector((state) => state.user.resumeData);
  const [extand, setExtand] = useState(true);
  const doc_id = useSelector((state) => state.user.id);
  const [course, setCourse] = useState([
    {
      name: "",
      start_date: "",
      description: "",
      links: [
        {
          name: "Github",
          link: "",
        },
        {
          name: "Live",
          link: "",
        },
      ],
      end_date: "",
      fromWhere: "",
    },
  ]);
  useEffect(() => {
    if (data.length) {
      setCourse(() => [...data]);
    }
  }, []);
  const addSkills = () => {
    setCourse((prevState) => [
      ...prevState,
      {
        name: "",
        start_date: "",
        description: "",
        links: [
          {
            name: "Github",
            link: "",
          },
          {
            name: "Live",
            link: "",
          },
        ],
        end_date: "",
        fromWhere: "",
      },
    ]);
  };
  const removeSkills =()=>{
    setCourse(()=>{
      return course.slice(0, -1);
    })
  }
  const updateCourses = (e, key) => {
    const newArray = [...course];
    if (e.target.name === "Github") {
      newArray[key.idx]["links"][0].link = e.target.value;
    } else if (e.target.name === "Live") {
      newArray[key.idx]["links"][1].link = e.target.value;
    } else {
      newArray[key.idx][e.target.name] = e.target.value;
    }
    setCourse(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateCourse({
        data: course,
        title: "Course",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.course = {
      data: course,
      title: "Course",
    };
    updateDocument(doc_id, { resume: new_resume_data });
    toast.success("Data has been updated");
  };
  return (
    <div className="form shadow-lg pb-0 w-[98%] sm:w-[90%]">
      <h1 className="text-2xl sm:text-3xl  font-bold  align-middle text-start pl-4 sm:pl-10 py-2 sm:py-5 bg-green-400 text-gray-100 flex justify-between">
        Course Info
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
        {course.map((courses, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit pl-4 sm:pl-10 sm:pt-4"
            >
              <InputComponent
                labelName={"Course Name"}
                elname={"name"}
                value={courses.name}
                updateFunction={updateCourses}
                idx={idx}
              />
              <InputComponent
                labelName={"From Where"}
                elname={"fromWhere"}
                value={courses.fromWhere}
                updateFunction={updateCourses}
                idx={idx}
              />
              <DateInputComponent
                labelName={"Start Date"}
                elname={"start_date"}
                value={courses.start_date}
                updateFunction={updateCourses}
                idx={idx}
              />
              <DateInputComponent
                labelName={"End Date"}
                elname={"end_date"}
                value={courses.end_date}
                updateFunction={updateCourses}
                idx={idx}
              />
              <TextInputComponent
                labelName={"Description"}
                elname={"description"}
                value={courses.description}
                updateFunction={updateCourses}
                idx={idx}
              />

              {courses.links.map((links) => {
                return (
                  <>
                    <InputComponent
                      labelName={links.name}
                      elname={links.name}
                      value={links.link}
                      updateFunction={updateCourses}
                      idx={idx}
                    />
                  </>
                );
              })}
            </div>
          );
        })}
        <div className='pl-4 sm:pl-10'>
          <AddNew add={addSkills} remove={removeSkills} lis={course} />
        </div>
        <div className="flex justify-center sm:justify-start pb-3 flex-col items-center">
          <Save handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default FPCourse