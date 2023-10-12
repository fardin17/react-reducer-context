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
    <div className="mx-30 my-1 bg- rounded md ">
        <div className =" md:block justify-center px-4 py-2 rounded text-3xl bg-blue-300 w-fit ">Login page</div>
        <form onSubmit={submitHandler} className="">
            <label htmlFor="username">Username</label>
            <input id='username'
            className="mx-2 border-2 border-red-500"
            onChange={(e)=>setUserData(prev=>{return {...prev,username:e.target.value}})}/>
            <label htmlFor="password">Password</label>
            <input id='password' className="mx-2  border-2 border-red-500" onChange={(e)=>setUserData(prev=>{return {...prev,password:e.target.value}})}/>
            <input type="submit" name='Login'/>
        </form>
        <Link to='/auth/signup'> Go to Sign Up</Link>
    </div>
  )
}

export default Login