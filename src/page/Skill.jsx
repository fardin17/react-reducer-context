import { Link, Outlet } from "react-router-dom"

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
const Skill = () => {
  return (
    <div>
         <h1>Skill</h1>
        {skills.map((skill,index)=>
        <div key={index} >
            <Link to={`/skill/${skill.title}`}>{skill.title}</Link>
            <p>{skill.description}</p>
        </div>)}
        <Outlet/>
    </div>
   
  )
}

export default Skill