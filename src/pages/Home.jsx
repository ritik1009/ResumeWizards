import { useEffect, useState } from 'react';
import ResumeButton from '../components/ResumeButton';
import { db } from '../Firebase/firebase';
import { useSelector } from 'react-redux';
import { addResume, getResume, getUser } from '../Firebase/firestore';

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const[users,setUsers] = useState([]);
  
  const[resumeData,setResumeData] = useState([])
  useEffect(()=>{
    const getUserdata = async()=>{
      const user_data = await getUser(currentUser.uid);
      setUsers(user_data)
      const resume_data = await getResume(currentUser.uid)
      console.log("Ressss----",resume_data)
      setResumeData(resume_data)
    }
    getUserdata();
  },[])
  console.log("The Resemuemenme", resumeData)
  return (
    <div className="">
      <section className="grid grid-cols-4 pl-12 py-5  gap-y-12">
        {resumeData.map((res,idx)=>{
          return <><ResumeButton data={res}/></>
        })}
        <ResumeButton/>
      </section>
    </div>
  );
}

export default Home