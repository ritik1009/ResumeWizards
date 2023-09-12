import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLink } from "../states/userSlice";
import ButtonNextPrev from "./ButtonNextPrev";

const Links = ({ currentPage }) => {
  const data = useSelector((state) => state.user.links.data);
  const [githubLink, setGithubLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [MediumLink, setMediumLink] = useState('');
  const [linkedinbLink, setLinkedinLink] = useState('');
  useEffect(()=>{
    if(data.length){
      if(data[0].link!==""){
        setGithubLink(data[0].link);
      }
      if (data[1].link !== null) {
        console.log(data[1].link);
        setLinkedinLink(data[1].link);
      }
      if (data[2].link !== "") {
        setMediumLink(data[2].link);
      }
      if (data[3].link !== "") {
        setTwitterLink(data[3].link);
      }
    }
  },[])
  const dispatch = useDispatch();
  const handleNextClick = () => {
    dispatch(
      updateLink({
        data: [
          {
            name: "Github",
            link: githubLink,
          },
          {
            name: "Linkedin",
            link: linkedinbLink,
          },
          {
            name: "Medium",
            link: MediumLink,
          },
          {
            name: "Twitter",
            link: twitterLink,
          },
        ],
        title: "Links",
      })
    );
    currentPage('Education')
  };
  const handlePrevClick = () => {
    dispatch(
      updateLink({
        data: [
          {
            name: "Github",
            link: githubLink,
          },
          {
            name: "Linkedin",
            link: linkedinbLink,
          },
          {
            name: "Medium",
            link: MediumLink,
          },
          {
            name: "Twitter",
            link: twitterLink,
          },
        ],
        title: "Links",
      })
    );
    currentPage("PersonalInfo");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className=" text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 align-middle text-start pl-3 sm:pl-10 py-5 bg-green-400 text-gray-100">
        Links Info
      </h1>
      <div className="formContainer grid sm:grid-cols-2 gap-2 sm:gap-5 gap-y-5 sm:gap-y-10 p-2 pb-4 ">
        <div className="formItem flex gap-3 sm:gap-1 md:gap-3 px-2 lg:px-10 items-center justify-between">
          <label className=" mr:0 sm:mr-5 text-base flex-none font-semibold sm:text-base md:text-lg">
            Github
          </label>
          <input
            className="formInput px-2 text-base sm:px-3 py-1 w-full shrink  sm:w-40 md:w-72 bg-slate-200 sm:text-base md:text-lg"
            type="text"
            placeholder={"Link"}
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-3 sm:gap-1 md:gap-3 px-2 lg:px-10 items-center justify-between">
          <label className=" mr:0 sm:mr-5 text-base shrink-0 font-semibold sm:text-base md:text-lg">
            Linkedin
          </label>
          <input
            className="formInput px-2 text-base sm:px-3 py-1 w-full shrink-1  sm:w-40 md:w-72 bg-slate-200 sm:text-base md:text-lg"
            type="text"
            placeholder={"Link"}
            value={linkedinbLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-3 sm:gap-1 md:gap-3 px-2 lg:px-10 items-center justify-between">
          <label className=" mr:0 sm:mr-5 text-base flex-none shrink-0 font-semibold sm:text-base md:text-lg">
            Twitter
          </label>
          <input
            className="formInput px-2 text-base sm:px-3 py-1 shrink-1 w-full   sm:w-40 md:w-72 bg-slate-200 sm:text-base md:text-lg"
            type="text"
            placeholder={"Link"}
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-3 sm:gap-1 md:gap-3 px-2 lg:px-10 items-center justify-between">
          <label className=" mr:0 sm:mr-5 text-base flex-none shrink-0 font-semibold sm:text-base md:text-lg">
            Medium
          </label>
          <input
            className="formInput px-2 text-base sm:px-3 py-1 w-full shrink-1  sm:w-40 md:w-72 bg-slate-200 sm:text-base md:text-lg"
            type="text"
            placeholder={"Link"}
            value={MediumLink}
            onChange={(e) => setMediumLink(e.target.value)}
          />
        </div>
      </div>
      <ButtonNextPrev
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </div>
  );
};

export default Links;
