/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

export const getUser = () => {
const [user,setUser]= useState(null)
const getUserData =()=>{
    let data=null
    if(typeof window !== 'undefined'){
         data=localStorage.getItem('user')
         data=data?JSON.parse(data):{username:null,password:null}
    }
return data
}
useEffect(()=>{setUser(getUserData())},[])
  
 return user
}
