
import {Controller, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'

const passSchema=yup.string()
.matches(
    /[a-z]/,
    "Password should have lower case"
  ).matches(
    /[A-Z]/,
    "Password should have upper case"
  )
  .matches(
    /[0-9]/,
    "Password should have a number"
  )
  .min(8,'Minimum length should be 8')
  .required('Password is required')
const schema= yup.object({
    password:passSchema,
    confirm_password:yup.string().oneOf([yup.ref('password'),null],('Confirm password not match')).required('Password is required')
})

const InputForm = () => {
    const [confirmPassErr, setConfirmPassErr]=useState('')
    const {register,handleSubmit,formState:{errors},watch,getValues}=useForm({
        resolver:yupResolver(schema)
    })
    const pass= getValues()
    console.log({pass})
    console.log({errors})
    const submitHandler =(values)=>{
        console.log({values})
    }
    
    const password = watch('password')
    useEffect(()=>{
        passSchema.validate(password)
        .then(result=>setConfirmPassErr(''))
        .catch(errors=>setConfirmPassErr(errors?.message))
    },[password])
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input {...register('password')}/>
            <p>{confirmPassErr}</p>
            <input  {...register('confirm_password')}/>
            <input type="submit" name ='Submit'/>
        </form>
    </div>
  )
}

export default InputForm


