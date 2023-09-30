import { useState } from "react"

const RenderProps = (props) => {
    const [count, setCount]=useState(0)
    const handleCounter=()=>{
        setCount(prev=>prev+1)
    }
  return props.children(count,handleCounter)
}

export default RenderProps