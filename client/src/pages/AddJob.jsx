import React, {useEffect, useRef, useState } from 'react'
import Quill from 'quill';

function AddJob() {

    const [title,setTitle] = useState('');
    const [location,setLocation] = useState('Banglore')
    const [category,setCategory] = useState('Programming')
    const [level,setLevel] = useState('Beginner level')
    const [salary,setSalary] = useState(0);
    const editorRef = useRef(null)
    const quilRef = useRef(null)
    useEffect(()=>{
    },[])


  return (
    <form>
        <div>
            <p>Job Title</p>
            <input type="text" placeholder='Type here' onChange={e => setTitle(e.target.value)} value={title} required/>
        </div>
        <div>
            <p>Job Description</p>
            <div ref={editorRef}>

            </div>
        </div>
    </form>
  )
}

export default AddJob
