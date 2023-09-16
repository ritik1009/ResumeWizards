import { useEffect, useState } from "react";
// import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../states/userSlice";
import InputComponent from "./InputComponent";
import TextInputComponent from './TextInputComponent';
import ButtonNextPrev from './ButtonNextPrev';

const PersonalInfo = ({currentPage}) => {
  const data = useSelector((state) => state.user.resumeData.personalInfo);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    job_position: "",
    phone_number: "",
    email_address: "",
    city: "",
    country: "",
    summary: "",
  });
  useEffect(()=>{
    console.log(data)
    if(data){
      setPersonalInfo(data)
    }
  },[])
  const dispatch = useDispatch();
  const updatePersnalInfo = (e,key)=>{
    let newArray = JSON.parse(JSON.stringify(personalInfo));
    newArray[e.target.name] = e.target.value;
    setPersonalInfo(newArray);
  }
  const handleNextClick = () => {
    dispatch(
      updatePersonalInfo(
      personalInfo
      )
    );
    currentPage("Links");
  };
  return (
    <div className="form shadow-lg pb-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-gray-100">
        Personal Info
      </h1>
      <div className="grid sm:grid-cols-2 gap-5 gap-y-3 text-l p-2 pb-4">
        <InputComponent
          labelName={"First Name"}
          elname={"firstName"}
          value={personalInfo.firstName}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Last Name"}
          elname={"lastName"}
          value={personalInfo.lastName}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Job Position"}
          elname={"job_position"}
          value={personalInfo.job_position}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Phone Number"}
          elname={"phoneNumber"}
          value={personalInfo.phoneNumber}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Email Address"}
          elname={"email_address"}
          value={personalInfo.email_address}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"City"}
          elname={"city"}
          value={personalInfo.city}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Country"}
          elname={"country"}
          value={personalInfo.country}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <TextInputComponent
          labelName={"Summary"}
          elname={"summary"}
          value={personalInfo.summary}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
      </div>
      <ButtonNextPrev handleNextClick={handleNextClick} />
    </div>
  );
};

export default PersonalInfo;
