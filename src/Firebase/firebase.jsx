import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { updateError, updateStart, updateUserCredentials } from "../states/userSlice";
import {getFirestore} from "@firebase/firestore"

console.log(import.meta.env.VITE_apiKey)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;

// This is for databse
export const db = getFirestore(app);




// This is for authentication

export const loginRedux = async(email,password,dispatch)=>{
  dispatch(updateStart());
  try{
    const res = await auth.signInWithEmailAndPassword(email,password)
    console.log("Inside the ressss---",res)
    dispatch(updateUserCredentials(res.user))
    return false
  }catch(error){
    dispatch(updateError())
    return true
  }
}

export const signUpRedux = async (email, password, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    dispatch(updateUserCredentials(res.user._delegate));
    return res.user;
  } catch (error) {
    dispatch(updateError());
    return true;
  }
};

export const logoutRedux = async (dispatch) => {
  dispatch(updateStart());
  try {
    await auth.signOut();
    dispatch(updateUserCredentials({}));
    return false;
  } catch (error) {
    dispatch(updateError());
    return true;
  }
};


export const auth = app.auth();
