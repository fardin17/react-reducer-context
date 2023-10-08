import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
    const navigate= useNavigate()
    const [userData,setUserData]= useState({username:'',password:''})
    const submitHandler =()=>{
        let userList = localStorage.getItem('userlist')
        userList= userList?JSON.parse(userList):[]
        let checkUser= userList.some(({username,password})=>(username===userData.username && password===userData.password))
        if(checkUser){
            localStorage.setItem('user',JSON.stringify(userData))
            navigate('/')
        }
        else{
            alert('User is not registered!')
            navigate('/auth/signup')
        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e)=>setUserData(prev=>{return {...prev,username:e.target.value}})}/>
            <input onChange={(e)=>setUserData(prev=>{return {...prev,password:e.target.value}})}/>
            <input type="submit" name='Login'/>
        </form>
        <Link to='/auth/signup'> Go to Sign Up</Link>
    </div>
  )
}

export default Login