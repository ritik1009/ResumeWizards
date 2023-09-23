import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo, updateProfilePicture } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import TextInputComponent from "./elements/TextInputComponent";
import Save from "./elements/Save";
import ImageComponent from "./elements/ImageComponent";
import { updateDocument } from "../../Firebase/firestore";
import { storage } from "../../Firebase/firebase";


const FPPersonalInfo = () => {
  const data = useSelector((state) => state.user.resumeData.personalInfo);
  const doc_id = useSelector((state) => state.user.id);
  const [image, setImage] = useState("");
  const [imageUpdated,setImageUpdated] = useState(false)
  const resume_data = useSelector(
    (state) => state.user.resumeData
  );
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
    if(imageUpdated){
      upload();
      setImageUpdated(false)
    }
    dispatch(
      updatePersonalInfo(
      personalInfo
      )
    );
    const new_resume_data = {...resume_data}
    new_resume_data.personalInfo = personalInfo 

    updateDocument(doc_id,{resume:new_resume_data})
  };
  
  const updateImage = (e) => {
    setImage(e.target.files[0]);
    setImageUpdated(true)
  };
  const upload = async () => {
    if (image == null) return;
    const imageRef = storage.ref(`/images/${image.name}`);
    imageRef.put(image).then((snapshot) => {
      // You can retrieve the download URL after the image is uploaded.
      imageRef.getDownloadURL().then((url) => {
        dispatch(updateProfilePicture({ profileImage: url }));
        // Do something with the URL, such as saving it in Firestore or displaying it in your UI.
      });
    });
  };
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
          updateFunction={updateImage}
        />
      </div>
      <Save handleClick={handleClick} />
      {/* <ButtonNextPrev handleNextClick={handleNextClick} /> */}
    </div>
  );
};

export default FPPersonalInfo