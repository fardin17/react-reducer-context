import { useState } from "react"
const withCounter = (ChildComponent) => {
    const NewComponent=()=>{
        const [count, setCount]=useState(0)
        const handleCounter=()=>{
            setCount(prev=>prev+1)
        }
        return (
            <div><ChildComponent {...{count,handleCounter}}/></div>
          )
    }
    return NewComponent
  
}

export default withCounter