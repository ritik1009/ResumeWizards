import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

// In this we are configuring the store i.e. the database that will store all of our
// states
export default configureStore({
    reducer:{
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})