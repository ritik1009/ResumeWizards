import { useEffect, useState } from 'react';
import ResumeButton from '../components/elements/ResumeButton';
import { useSelector } from 'react-redux';
import { getResume, getUser } from '../Firebase/firestore';

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const[users,setUsers] = useState([]);
  
  const[resumeData,setResumeData] = useState([])
  useEffect(()=>{
    const getUserdata = async()=>{
      const user_data = await getUser(currentUser.uid);
      setUsers(user_data)
      const resume_data = await getResume(currentUser.uid)
      setResumeData(resume_data)
    }
    getUserdata();
  },[])
  return (
    <div className="">
      <section className="grid grid-cols-2 sm:grid-cols-4 px-1 sm:pl-12 py-1 sm:py-5 gap-2 gap-y-5 sm:gap-y-12">
        {resumeData.map((res,_idx)=>{
          return <><ResumeButton data={res}/></>
        })}
        <ResumeButton/>
      </section>
    </div>
  );
}

export default Home