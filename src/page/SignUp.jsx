import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const SignUp = () => {
    const navigate= useNavigate()
    const [userData,setUserData]= useState({username:'',password:''})
    const submitHandler =()=>{
        let userList = localStorage.getItem('userlist')
        userList= userList?JSON.parse(userList):[]
        let checkUser= userList.some(({username})=>(username===userData.username))
        if (checkUser)alert('User is already in userlist')
        if(!checkUser){
            localStorage.setItem('userlist',JSON.stringify([...userList,userData]))
            localStorage.setItem('user',JSON.stringify(userData))
            navigate('/')
        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e)=>setUserData(prev=>{return {...prev,username:e.target.value}})}/>
            <input onChange={(e)=>setUserData(prev=>{return {...prev,password:e.target.value}})}/>
            <input type="submit" name='SignUp'/>
        </form>
        <Link to='/auth/login'> Go to Login</Link>
    </div>
  )
}

export default SignUp