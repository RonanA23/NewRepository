import React,{useState,useContext} from 'react'
import './Register.css'
import authContext from './authContext/authContext'


function Register() {
    const AuthContext=useContext(authContext)
    const{register}=AuthContext
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })
    const{name,email,password}=user

    const onChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=e=>{
        e.preventDefault()
        register({
            name,
            email,
            password
        })
        console.log('we submitted somthing')
    
       
    }
    return (
        <form className='form' onSubmit={onSubmit}>
            <label 
            htmlFor="name">Name:</label>
            <input type='text' 
            placeholder='enter Name' 
            value={name} 
            name='name'
            required
            onChange={onChange}/>
            <label 
            htmlFor="name">Email:</label>
            <input type='text' 
            placeholder='enter Email' 
            name='email'
            required
            value={email} 
            onChange={onChange}/>
            <label 
            htmlFor="name">Password:</label>
            <input type='text' 
            placeholder='enter Password' 
            name='password'
            required
            value={password} 
            onChange={onChange}/>
            <input type='submit' value ='Register' className='Enter'/>
        </form>
    )
}

export default Register
