import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProjects } from '../states/userSlice';
import InputComponent from "./InputComponent";
import TextInputComponent from "./TextInputComponent";
import DateInputComponent from "./DateInputComponent";
import ButtonNextPrev from "./ButtonNextPrev";
import AddNew from "./AddNew";

const Projects = ({ currentPage }) => {
  const data = useSelector((state) => state.user.Projects.data);
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
  const handleNextClick = () => {
    dispatch(
      updateProjects({
        data: Project,
        title: "Project",
      })
    );
    currentPage("Skills");
  };
  const handlePrevClick = () => {
    dispatch(
      updateProjects({
        data: Project,
        title: "Project",
      })
    );
    currentPage("WorkHistory");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-gray-100">
        Projects Info
      </h1>
      <div className="formContainer">
        {Project.map((project, idx) => {
          return (
            <div
              key={idx}
              className="grid sm:grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4 border border-1 border-inherit"
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

              {project.links.map((links) => {
                return (
                  <>
                    <InputComponent
                      labelName={links.name}
                      elname={links.name}
                      value={links.link}
                      updateFunction={updateProject}
                      idx={idx}
                    />
                  </>
                );
              })}
            </div>
          );
        })}
        <AddNew add={addSkills} remove={removeSkills} lis={Project} />
        <ButtonNextPrev
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Projects