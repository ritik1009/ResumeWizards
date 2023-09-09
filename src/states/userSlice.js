import { createSlice } from "@reduxjs/toolkit";

//Here we creating a user Slice that will act as a model for our store which will contain the variables and the functions 
export const userSlice = createSlice({
		// The name of our slice i think the name of the store
    name:"user",
		// Then we are setting the initial values of the variable we will be 
		// assigning to the variable that we will use.
    initialState:{
    personalInfo: {
      firstName: "firstName",
      lastName: "lastName",
      job_position: "job_position",
      phone_number: "phone_number",
      email_address: "email_address",
      city: "city",
      country: "country",
      summary: "summary",
    },
    links: {
      title: "Links",
      data: [
        
      ],
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
		// The reducers will contain our function that is responsible for the updation 
		// of the data using this function we can update the value of the variables.
    reducers:{
		// The update is the function that we will call when we need to update the variable data
		// In this we are passing to params i.e. state and action. The state contains the present data
		// The action contains the data that we want to update i.e action contains the payload that
		// That will contain the data that the user has passed and will be used to update.
        updatePersonalInfo:(state,action)=>{
            state.personalInfo.firstName = action.payload.firstName;
            state.personalInfo.lastName = action.payload.lastName;
            state.personalInfo.city = action.payload.city;
            state.personalInfo.country = action.payload.country;
            state.personalInfo.phone_number = action.payload.phone_number;
            state.personalInfo.job_position = action.payload.job_position;
            state.personalInfo.summary = action.payload.summary;
            state.personalInfo.email_address = action.payload.email_address;
        },
        updateLink:(state,action)=>{
          state.links.data = action.payload.data;
          state.links.title = action.payload.title;
        },
        updateSkills:(state,action)=>{
          state.skills.data = action.payload.data;
          state.skills.title = action.payload.title;
        },
        updateWorkHistory:(state,action)=>{
          state.work_History.data = action.payload.data;
          state.work_History.title = action.payload.title;
        },
        updateProjects:(state,action)=>{
          state.Projects.data = action.payload.data;
          state.Projects.title = action.payload.title;
        },
        updateEductaion:(state,action)=>{
          state.education.data = action.payload.data;
          state.education.title = action.payload.title;
        },
        updateCourse:(state,action)=>{
          state.course.data = action.payload.data;
          state.course.title = action.payload.title;
        },
    }
})

export const { updatePersonalInfo,updateLink,updateSkills,updateWorkHistory,updateProjects,updateEductaion,updateCourse } = userSlice.actions;

export default userSlice.reducer;