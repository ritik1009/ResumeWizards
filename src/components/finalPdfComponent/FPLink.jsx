import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateLink } from '../../states/userSlice';
import InputComponent from './elements/InputComponent';
import Save from './elements/Save';
import { updateDocument } from '../../Firebase/firestore';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FPLink = () => {
  const data = useSelector((state) => state.user.resumeData.links.data);
  const doc_id = useSelector((state) => state.user.id);
  const resume_data = useSelector((state) => state.user.resumeData);
  const [extand, setExtand] = useState(true);
  const [allLinks, setallLinks] = useState({
    Github: "",
    Linkedin: "",
    Medium: "",
    Twitter: "",
  });
  useEffect(() => {
    if (data) {
      setallLinks(data);
    }
  }, []);
  const updateallLinks = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(allLinks));
    newArray[e.target.name] = e.target.value;
    setallLinks(newArray);
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("The New_all_links -----",allLinks)
    console.log("The dispatcjh ---", resume_data);
    dispatch(
      updateLink({
        data: allLinks,
        title: "Links",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.links = {
      data: allLinks,
      title: "Links",
    };
    updateDocument(doc_id, { resume: new_resume_data });
    toast.success("Data has been updated");
  };
  return (
    <div className="form shadow-lg pb-0 w-[98%] sm:w-[90%]">
      <h1 className=" text-2xl sm:text-3xl  font-bold align-middle text-start pl-4 sm:pl-10 py-2 sm:py-5 bg-green-400 text-gray-100 flex justify-between">
        Links Info
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
      <div
        className={
          (extand ? "grid" : "hidden") + " gap-5 gap-y-3 p-1 pb-4 pl-4 pt-4"
        }
      >
        <InputComponent
          labelName={"Github"}
          elname={"Github"}
          value={allLinks.Github}
          updateFunction={updateallLinks}
          idx={""}
        />
        <InputComponent
          labelName={"Linkedin"}
          elname={"Linkedin"}
          value={allLinks.Linkedin}
          updateFunction={updateallLinks}
          idx={""}
        />
        <InputComponent
          labelName={"Twitter"}
          elname={"Twitter"}
          value={allLinks.Twitter}
          updateFunction={updateallLinks}
          idx={""}
        />
        <InputComponent
          labelName={"Medium"}
          elname={"Medium"}
          value={allLinks.Medium}
          updateFunction={updateallLinks}
          idx={""}
        />
        <Save handleClick={handleClick} />
      </div>
    </div>
  );
}

export default FPLink