import { createSlice } from "@reduxjs/toolkit";

//Here we creating a user Slice that will act as a model for our store which will contain the variables and the functions 
export const userSlice = createSlice({
		// The name of our slice i think the name of the store
    name:"user",
		// Then we are setting the initial values of the variable we will be 
		// assigning to the variable that we will use.
    initialState:{
      currentUser:{},
      pending:false,
      error:false,
      resumeData:{
        personalInfo: {
      firstName: "",
      lastName: "",
      job_position: "",
      phone_number: "",
      email_address: "",
      city: "",
      country: "",
      summary: "",
    },
    links: {
      title: "Links",
      data: {
        
      },
    },
    skills: {
      title: "Skills",
      data: [
        
      ],
    },
    work_History: {
      title: "Employment history",
      data: [
        
      ],
    },
    Projects: {
      title: "Projects",
      data: [
      ],
    },
    education: {
      title: "Education",
      data: [
      ],
    },
    course: {
      title: "Course",
      data: [
      ],
    },
      },
    
  },
		// The reducers will contain our function that is responsible for the updation 
		// of the data using this function we can update the value of the variables.
    reducers:{
		// The update is the function that we will call when we need to update the variable data
		// In this we are passing to params i.e. state and action. The state contains the present data
		// The action contains the data that we want to update i.e action contains the payload that
		// That will contain the data that the user has passed and will be used to update.
        updateResumeData:(state,action)=>{
          state.resumeData = action.payload.data
        },
        updatePersonalInfo:(state,action)=>{
            state.resumeData.personalInfo.firstName = action.payload.firstName;
            state.resumeData.personalInfo.lastName = action.payload.lastName;
            state.resumeData.personalInfo.city = action.payload.city;
            state.resumeData.personalInfo.country = action.payload.country;
            state.resumeData.personalInfo.phone_number = action.payload.phone_number;
            state.resumeData.personalInfo.job_position = action.payload.job_position;
            state.resumeData.personalInfo.summary = action.payload.summary;
            state.resumeData.personalInfo.email_address = action.payload.email_address;
        },
        updateLink:(state,action)=>{
          state.resumeData.links.data = action.payload.data;
          state.resumeData.links.title = action.payload.title;
        },
        updateSkills:(state,action)=>{
          state.resumeData.skills.data = action.payload.data;
          state.resumeData.skills.title = action.payload.title;
        },
        updateWorkHistory:(state,action)=>{
          state.resumeData.work_History.data = action.payload.data;
          state.resumeData.work_History.title = action.payload.title;
        },
        updateProjects:(state,action)=>{
          state.resumeData.Projects.data = action.payload.data;
          state.resumeData.Projects.title = action.payload.title;
        },
        updateEductaion:(state,action)=>{
          state.resumeData.education.data = action.payload.data;
          state.resumeData.education.title = action.payload.title;
        },
        updateCourse:(state,action)=>{
          state.resumeData.course.data = action.payload.data;
          state.resumeData.course.title = action.payload.title;
        },
        updateStart:(state)=>{
          state.pending=true
          state.error =false
        },
        updateError:(state)=>{
            state.error = true;
            state.pending=false;
        },
        updateUserCredentials:(state,action)=>{
            state.pending = false;
            state.currentUser = action.payload
        },
        getError:(state)=>{
          return state.error
        }
    }
})

export const { updatePersonalInfo,updateLink,updateSkills,updateWorkHistory,updateProjects,updateEductaion,updateCourse,updateStart,updateError,updateUserCredentials,getError,updateResumeData } = userSlice.actions;

export default userSlice.reducer;