import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateLink } from '../../states/userSlice';
import InputComponent from './elements/InputComponent';
import Save from './elements/Save';
import { updateDocument } from '../../Firebase/firestore';

const FPLink = () => {
  const data = useSelector((state) => state.user.resumeData.links.data);
  const doc_id = useSelector((state) => state.user.id);
  const resume_data = useSelector((state) => state.user.resumeData);
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
    dispatch(
      updateLink({
        data: allLinks,
        title: "Links",
      })
    );
    const new_resume_data = { ...resume_data };
    new_resume_data.links = allLinks;

    updateDocument(doc_id, { resume: new_resume_data });
  };
  return (
    <div className="form shadow-lg pb-8 w-[90%]">
      <h1 className=" text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Links Info
      </h1>
      <div className="grid gap-5 gap-y-3 p-2 pb-4 ">
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
      </div>
      <Save handleClick={handleClick} />
    </div>
  );
}

export default FPLink