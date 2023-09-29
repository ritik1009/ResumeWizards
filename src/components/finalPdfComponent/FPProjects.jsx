import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProjects } from '../../states/userSlice';
import InputComponent from "./elements/InputComponent";
import TextInputComponent from "./elements/TextInputComponent";
import DateInputComponent from "./elements/DateInputComponent";
import AddNew from "./elements/AddNew";
import Save from './elements/Save';
import { updateDocument } from '../../Firebase/firestore';

const FPProjects = () => {
  const data = useSelector((state) => state.user.resumeData.Projects.data);
  const doc_id = useSelector((state) => state.user.id);
  const resume_data = useSelector((state) => state.user.resumeData);
  const [Project, setProject] = useState([
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
      techStack: "",
    },
  ]);
  const addSkills = () => {
    setProject((prevState) => [
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
        techStack: "",
      },
    ]);
  };
  useEffect(() => {
    if (data.length) {
      setProject(() => [...data]);
    }
  }, []);
  const removeSkills = () => {
    setProject(() => {
      return Project.slice(0, -1);
    });
  };
  const updateProject = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(Project));
    if (e.target.name === "Github") {
      newArray[key.idx]["links"][0].link = e.target.value;
    } else if (e.target.name === "Live") {
      newArray[key.idx]["links"][1].link = e.target.value;
    } else {
      newArray[key.idx][e.target.name] = e.target.value;
    }
    setProject(newArray);
    // setSkills([key][e.target.name] = e.target.value)
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!Project[0].name === "") {
      dispatch(
        updateProjects({
          data: Project,
          title: "Project",
        })
      );
    }
    const new_resume_data = { ...resume_data };
    new_resume_data.Project = Project;

    updateDocument(doc_id, { resume: new_resume_data });
  };
  
  return (
    <div className="form shadow-lg pb-8 w-[90%]">
      <h1 className="text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Projects Info
      </h1>
      <div className="formContainer">
        {Project.map((project, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-5 gap-y-3 p-2 pb-4 border border-1 border-inherit"
            >
              <InputComponent
                labelName={"Project Name"}
                elname={"name"}
                value={project.name}
                updateFunction={updateProject}
                idx={idx}
              />
              <InputComponent
                labelName={"Tech Stack"}
                elname={"techStack"}
                value={project.techStack}
                updateFunction={updateProject}
                idx={idx}
              />
              <DateInputComponent
                labelName={"Start Date"}
                elname={"start_date"}
                value={project.start_date}
                updateFunction={updateProject}
                idx={idx}
              />
              <DateInputComponent
                labelName={"End Date"}
                elname={"end_date"}
                value={project.end_date}
                updateFunction={updateProject}
                idx={idx}
              />
              <TextInputComponent
                labelName={"Description"}
                elname={"description"}
                value={project.description}
                updateFunction={updateProject}
                idx={idx}
              />

              {project.links.map((links,idx) => {
                return (
                  <div key={idx}>
                    <InputComponent
                      labelName={links.name}
                      elname={links.name}
                      value={links.link}
                      updateFunction={updateProject}
                      idx={idx}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <AddNew add={addSkills} remove={removeSkills} lis={Project} />
        <Save handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FPProjects