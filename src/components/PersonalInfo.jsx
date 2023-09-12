import { useEffect, useState } from "react";
// import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../states/userSlice";

const PersonalInfo = ({currentPage}) => {
  const data = useSelector((state) => state.user.personalInfo);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [job_position, setJob_position] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [summary, setSummary] = useState("");
  useEffect(()=>{
    console.log(data)
    if(data){
      setFirstName(data.firstName);
      setlastName(data.lastName);
      setJob_position(data.job_position);
      setPhoneNumber(data.phoneNumber);
      setEmail_address(data.email_address);
      setCity(data.city);
      setCountry(data.country)
      setSummary(data.summary)
    }
  },[])
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updatePersonalInfo({
        firstName: firstName,
        lastName: lastName,
        job_position: job_position,
        phoneNumber: phoneNumber,
        email_address: email_address,
        city: city,
        country: country,
        summary: summary,
      })
    );
    currentPage("Links");
  };
  return (
    <div className="form shadow-lg ">
      <h1 className="text-4xl font-bold mb-8 align-middle text-start pl-10 py-5 bg-green-400 text-gray-100">
        Personal Info
      </h1>
      <div className="formContainer grid grid-cols-2 gap-10 text-l p-2 pb-4">
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className=" mr-5 font-semibold">First Name</label>
          <input
            className="formInput  px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"First Name"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className=" mr-5 font-semibold">Last Name</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"Last Name"}
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className=" mr-5 font-semibold">Job Position</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"Frontend Devloper"}
            value={job_position}
            onChange={(e) => setJob_position(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className=" mr-5 font-semibold">Phone Number</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"1122334455"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className=" mr-5 font-semibold">Email Address</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"demo@gmail.com"}
            value={email_address}
            onChange={(e) => setEmail_address(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className="mr-5 font-semibold">City</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"City"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className="mr-5 font-semibold">Country</label>
          <input
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"Country"}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="formItem flex gap-1 px-10 items-center justify-between">
          <label className="mr-5 font-semibold">Summary</label>
          <textarea
            className="formInput px-3 py-1 w-72 bg-slate-200"
            type="text"
            placeholder={"Summary"}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <button
          disabled
          className="bg-gray-500 w-44 text-white py-1 px-2 text-xl font-semibold justify-self-end"
        >
          Prev
        </button>
        <button
          onClick={handleClick}
          className="bg-green-400 w-44 text-white py-1 px-2 text-xl font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
