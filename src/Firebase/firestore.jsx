import { addDoc, collection, getDocs, query, where,doc,updateDoc } from "@firebase/firestore";
import { db } from "./firebase";
import { updateId } from "../states/userSlice";
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

// Updating the Document
export const updateDocument = async (docId, updatedData) => {
  try {
    console.log("DocumentId",docId)
    docId = "zal6vr6O2mQR5CMs73J7";
    console.log("The Document",updatedData)
    const docRef = doc(db,"resumeData", docId);
    // Use the update method to update the document with new data
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error("Error updating document:", error);
  }
};


// Saving the data in the database
export const addResume = async (id, name, tempalteName, resumedata,dispatch) => {
  const doc_id = await addResumeFunc(id, name, tempalteName, resumedata);
  console.log("This is the Doc_id -------------",doc_id)
  dispatch(updateId({id:doc_id}));
}; 
const addResumeFunc = (id, name,tempalteName,resumedata) => {
  return addDoc(resumeCollectionRef, {
    user_id: id,
    name: name,
    templateName:tempalteName,
    resume: resumedata,
  }).then((docRef)=>{
    return docRef._key.path.segments[1]
  });
};
