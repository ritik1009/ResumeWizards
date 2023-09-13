import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from '../../states/userSlice';
import InputComponent from "./elements/InputComponent";
import TextInputComponent from './elements/TextInputComponent';
import DateInputComponent from './elements/DateInputComponent';
import AddNew from './elements/AddNew';
import Save from './elements/Save';

const FPCourse = () => {
  const data = useSelector((state) => state.user.course.data);
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
    console.log("Inside the updateCourse",key.idx,e.target.name)
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
  };
  return (
    <div className="form shadow-lg pb-8 w-[90%]">
      <h1 className="text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Course Info
      </h1>
      <div className="formContainer ">
        {course.map((courses, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit"
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
        <AddNew add={addSkills} remove={removeSkills} lis={course} />
        <Save handleClick={handleClick} />
      </div>
    </div>
  );
}

export default FPCourse