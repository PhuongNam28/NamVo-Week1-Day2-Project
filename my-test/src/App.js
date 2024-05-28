import {useState} from 'react'

function App() {

const[jobs,setJobs] = useState(()=>
{
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  return storageJobs ?? []
})
const[job,setJob] = useState('')
const handleClick = ()=>
  {
    setJobs(prev=>{
      const newJobs = [...prev,job]

      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)
      return newJobs
    })
    setJob('')
  }
  return (
    <div>
       <h1>TO DO LIST</h1>
       <input placeholder='please type in your to do list'
       value={job}
       onChange={e=>setJob(e.target.value)}/>
       <button onClick={handleClick}>ADD</button>
       <ul>
        {jobs.map((job,index)=>(
            <li key={index}>{job}</li>
        ))}
        </ul>
    
      
    </div>
    
  );
}

export default App;
