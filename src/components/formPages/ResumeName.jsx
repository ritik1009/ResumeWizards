import React, { useRef } from 'react'
import TemplateShow from './TemplateShow';
import { useDispatch } from 'react-redux';
import { updateResumeName } from '../../states/userSlice';

const ResumeName = ({currentPage}) => {
    const resumeNameRef = useRef()
    const dispatch = useDispatch()
    let templateArray = ["template_1","template_2","template_3","template_4","template_5"]
    const handleClick  = (template)=>{
        if(resumeNameRef.current.value==""){
            alert("Please give this resume a name")
        }else{
            dispatch(
              updateResumeName({
                resumeName: resumeNameRef.current.value,
                templateName: template,
              })
            );
            currentPage("PersonalInfo");
        }
    }
  return (
    <div className="form shadow-lg pb-8">
      <input
        className=" w-full text-2xl md:text-4xl font-bold mb-4 md:mb-8 align-middle text-start pl-3 md:pl-10 py-5 bg-green-400 text-white "
        placeholder="Resume Name"
        required
        ref={resumeNameRef}
      />
      <div className="grid  grid-cols-2 sm:grid-cols-4 gap-5 gap-y-3 text-l p-2 pb-4">
        {templateArray.map((template,idx)=>{
            return (<TemplateShow template={template} key={idx} onClick={handleClick}/>)
        })}
      </div>
    </div>
  );
}

export default ResumeName