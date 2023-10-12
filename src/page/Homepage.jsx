import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/type/todoTypes"
import { decrementCount, incrementCount } from "../redux/actions/todoActions"

const Homepage = () => {
  const data=useSelector((state)=>state.todo)
  const dispatch=useDispatch()
  console.log({data})
  return (
    <h3>
      This is Homepage
      {/* <div>{data}</div> */}
      <button
      className="bg-red-500 px-4 py-2 rounded outline-none"
      onClick={()=>incrementCount(5,dispatch)}>Count Increase</button>
      <br/>
      <br/>
      <button
        className="bg-yellow-500 px-4 py-2 rounded outline-none"
      onClick={()=>decrementCount(dispatch)}>Count Decrease</button>
       </h3>
  )
}

export default Homepage