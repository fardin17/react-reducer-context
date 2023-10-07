import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const skills=[
    {title:'Javascript',
description:'i have good knowledge in javascript'},
{title:'React',
description:'i have good knowledge in React'},
{title:'Vue',
description:'i have good knowledge in Vue'},
{title:'Angular',
description:'i have good knowledge in Angular'}
]
const SkillDetails = () => {
    const [skillDetails,setSkillDetails]=useState()
    const {skill}= useParams()
    // console.log({params})
    useEffect(()=>{
        console.log(skills.filter((value)=>value.title==skill))
        setSkillDetails(skills.filter((value)=>value.title===skill)[0])
    },[skill])
  return (
    <div>
          <h1>SkillDetails</h1>
          <h3>{skillDetails?.title}</h3>
          <p>{skillDetails?.description}</p>
    </div>
  
  )
}

export default SkillDetails