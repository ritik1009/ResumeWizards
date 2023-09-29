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
      <section className="grid grid-cols-4 pl-12 py-5  gap-y-12">
        {resumeData.map((res,idx)=>{
          return <div key={idx}>
          <ResumeButton data={res}/>
          </div >
        })}
        <ResumeButton/>
      </section>
    </div>
  );
}

export default Home