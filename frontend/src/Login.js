import React,{useState} from 'react'

function Login() {
    const [details,setDetails]=useState({
        email:'',
        password:''
    })

    const onChange=e=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    return (
        <form className='form'>
        <p>Email</p>
        <input type='text' placeholder='enter Email' onChange={onChange}/>
        <p>Password</p>
        <input type='text' placeholder='enter Password' onChange={onChange}/>
        <input type='submit' value='LogIn' className='Enter'/>
    </form>
    )
}

export default Login
