import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLink } from "../../states/userSlice";
import ButtonNextPrev from "../elements/ButtonNextPrev";
import InputComponent from "../elements/InputComponent";

const Links = ({ currentPage }) => {
  const data = useSelector((state) => state.user.resumeData.links.data);
  const [allLinks, setallLinks] = useState({
    Github: "",
    Linkedin: "",
    Medium: "",
    Twitter:"",
  });
  useEffect(()=>{
    if(data){
      setallLinks(data)
    }
  },[])
  const updateallLinks = (e, key) => {
    let newArray = JSON.parse(JSON.stringify(allLinks));
    newArray[e.target.name] = e.target.value;
    setallLinks(newArray);
  };
  const dispatch = useDispatch();
  const handleNextClick = () => {
    dispatch(
      updateLink({
        data: allLinks,
        title: "Links",
      })
    );
    currentPage('Education')
  };
  
  const handlePrevClick = () => {
    if(allLinks.Github!=="" || allLinks.Linkedin!=="" || allLinks.Medium!=="" || allLinks.Twitter!==""){
      dispatch(
        updateLink({
          data: allLinks,
          title: "Links",
        })
      );
    }
    currentPage("PersonalInfo");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className=" text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 align-middle text-start pl-3 sm:pl-10 py-5 bg-green-400 text-gray-100">
        Links Info
      </h1>
      <div className="formContainer grid sm:grid-cols-2 gap-2 sm:gap-5 gap-y-5 sm:gap-y-10 p-2 pb-4 ">
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
      <ButtonNextPrev
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </div>
  );
};

export default Links;
