import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo, updateProfilePicture } from "../../states/userSlice";
import InputComponent from "./elements/InputComponent";
import TextInputComponent from "./elements/TextInputComponent";
import Save from "./elements/Save";
import ImageComponent from "./elements/ImageComponent";
import { updateDocument } from "../../Firebase/firestore";
import { storage } from "../../Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FPPersonalInfo = () => {
  const data = useSelector((state) => state.user.resumeData.personalInfo);
  const doc_id = useSelector((state) => state.user.id);
  const [image, setImage] = useState("");
  const[extand,setExtand] = useState(true);
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
    if (
      personalInfo.firstName === "" &&
      personalInfo.lastName === "" &&
      personalInfo.phone_number === "" &&
      personalInfo.email_address === ""
    ) {
      toast.warn("Please fill all the necessary things");
    } else {
      dispatch(updatePersonalInfo(personalInfo));
      const new_resume_data = { ...resume_data };
      new_resume_data.personalInfo = personalInfo;
      updateDocument(doc_id, { resume: new_resume_data });
      toast.success("Data has been updated");
    }
    
  };
  
  const updateImage = (e) => {
    setImage(e.target.files[0]);
    setImageUpdated(true)
  };
  const upload = async () => {
    if (image == null) return;
    const imageRef = storage.ref(`/images/${image.name}`);
    imageRef.put(image).then((_snapshot) => {
      // You can retrieve the download URL after the image is uploaded.
      imageRef.getDownloadURL().then((url) => {
        dispatch(updateProfilePicture({ profileImage: url }));
        // Do something with the URL, such as saving it in Firestore or displaying it in your UI.
      });
    });
  };
  return (
    <div className="form shadow-lg pb-0 sm:pb-0 w-[98%] sm:w-[90%]">
      <h1 className="group text-2xl sm:text-3xl font-bold align-middle text-start pl-4 sm:pl-10 py-2 sm:py-5 bg-green-400 text-gray-100 flex justify-between">
        Personal Info
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
          (extand ? "grid" : "hidden") + " gap-5 gap-y-3 p-1 pb-4 pl-4 sm:pt-4"
        }
      >
        <InputComponent
          labelName={"First Name *"}
          elname={"firstName"}
          value={personalInfo.firstName}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Last Name *"}
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
          labelName={"Phone Number *"}
          elname={"phone_number"}
          value={personalInfo.phone_number}
          updateFunction={updatePersnalInfo}
          idx={""}
        />
        <InputComponent
          labelName={"Email Address *"}
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
        <Save handleClick={handleClick} />
      </div>
      <ToastContainer position="top-right" newestOnTop closeOnClick />
      {/* <ButtonNextPrev handleNextClick={handleNextClick} /> */}
    </div>
  );
};

export default FPPersonalInfo