import { useEffect, useState } from "react";
// import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import TextInputComponent from "./elements/TextInputComponent";
import Save from "./elements/Save";
import ImageComponent from "./elements/ImageComponent";
// import ButtonNextPrev from "./elements/ButtonNextPrev";
const FPPersonalInfo = () => {
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
  const handleClick = () => {
    console.log("BUtton Clicked")
    console.log("data",personalInfo)
    dispatch(
      updatePersonalInfo(
      personalInfo
      )
    );
  };
  const handleFile = (e)=>{
    let newArray = JSON.parse(JSON.stringify(personalInfo));
    console.log("Thsi is the File update", newArray);
    const file = e.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    newArray[e.target.name] = localImageUrl;
    console.log("Thsi is the File update",newArray)
    setPersonalInfo(newArray)
  }
  return (
    <div className="form shadow-lg pb-8 w-[90%] ">
      <h1 className="text-3xl  font-bold mb-4 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Personal Info
      </h1>
      <div className="grid gap-5 gap-y-3 p-1 pb-4">
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
          elname={"phone_number"}
          value={personalInfo.phone_number}
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
        <ImageComponent
          labelName={"Profile Image"}
          elname={"profileImage"}
          // value={personalInfo.profileImage}
          updateFunction={handleFile}
        />
      </div>
      <Save handleClick={handleClick} />
      {/* <ButtonNextPrev handleNextClick={handleNextClick} /> */}
    </div>
  );
};

export default FPPersonalInfo