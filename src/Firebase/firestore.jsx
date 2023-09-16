import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "./firebase";
const userCollectionRef = collection(db, "user");
const resumeCollectionRef = collection(db, "resumeData")


// Getting the user data by using the user_id
export const getUser = async (id) => {
  const q = query(
    userCollectionRef,
    where("user_id", "==", id)
  );
  const data = await getDocs(q);
  return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};


// Making a new user for new sign up
export const addUser = async (id,name,email)=>{
    await addDoc(userCollectionRef,{user_id:id,name:name,email:email})
}


// Getting all the resume by passing the user_id
export const getResume = async(id)=>{
    const q = query(
    resumeCollectionRef,
    where("user_id", "==", id)
  );
    const data = await getDocs(q);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}


// Saving the data in the database
export const addResume = async (id, name,resumedata) => {
  await addDoc(resumeCollectionRef, {
    user_id: id,
    name: name,
    resume: resumedata,
  });
};
