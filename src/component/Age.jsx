// import withCounter from "./hoc/withCounter"

import { memo, useEffect,useRef, useState } from "react"
import video from '../assets/video.mp4'
const Age = () => {
  const ref = useRef(false)
  const divRef= useRef()
  const videoRef= useRef()
  const [isPlaying, setPlaying]= useState(false)
  useEffect(()=>{
    if(ref.current) return
    divRef.current.innerText='Age New'
    console.log('i am in useEffect')
  return ()=>ref.current=true
  },[])
  useEffect(()=>{
    if(isPlaying)videoRef.current.play()
    else videoRef.current.pause()
  },[isPlaying])
  return (
    <div>
        <p ref={divRef}>Age</p>
        <video
        controls
        width={200}
        height={200}
        src={video}
        ref={videoRef}
        />
        <div onClick={()=>setPlaying(prev=>!prev)}>{isPlaying?'Pause':'Play'}</div>
    </div>
  )
}

export default memo(Age)