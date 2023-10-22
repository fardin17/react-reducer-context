import { useDispatch, useSelector } from "react-redux"
import { decrementCount, incrementCount } from "../redux/actions/todoActions"
import { useCreatePostMutation, useGetPostQuery, useGetSinglePostQuery } from "../redux-toolkit/apiSlice"
import { useEffect } from "react"
import { decrement } from "../redux-toolkit/countSlice"

const Homepage = () => {
  const {data,isLoading,isError,error,}=useGetPostQuery()
  // const {data:singleUserData}=useGetSinglePostQuery(1)
  const [createPost]=useCreatePostMutation()
  const data1=useSelector((state)=>state.todo)
  const apiData= useSelector((state=>state))
// console.log({apiData})
  const dispatch=useDispatch()
  console.log({data})
  // console.log({singleUserData})
  
  const handlePost=()=>{
    createPost({userId:1, id:2,title:'this is title', description:'this is description'}).then(result=>{
      console.log({result})
    })
  }
  return (
    <h3>
      This is Homepage
      {/* <div>{data}</div> */}
      <button
      className="bg-red-500 px-4 py-2 rounded outline-none"
      onClick={()=>incrementCount(5,dispatch)}>Count Increase</button>
      <br/>
      <br/>
      <button onClick={handlePost}>Create Post</button>
      <button
        className="bg-yellow-500 px-4 py-2 rounded outline-none"
      onClick={()=>dispatch(decrement())}>Count Decrease</button>
       </h3>
  )
}

export default Homepage






