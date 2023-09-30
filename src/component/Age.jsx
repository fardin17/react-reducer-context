// import withCounter from "./hoc/withCounter"

import { memo } from "react"

const Age = ({handleCount}) => {
  console.log('i am in age')
  return (
    <div>
        <p>Age</p>
    </div>
  )
}

export default memo(Age)